// import {HyperTextNotification} from './notifications'

type StepElementStatus = 'uncomplete' | 'active' | 'complete';

// Добавляем интерфейс для расширения HTMLElement
interface StepbarElement extends HTMLElement {
    currentStep: number;
}

class AbbreviatedNumber extends HTMLElement {
    isShortened: boolean
    originalNumber: number

    constructor() {
        super();
        this.isShortened = true;
        this.originalNumber = parseFloat(this.textContent?.trim() || '0');
        this.render();
        this.addEventListener('click', this.toggle.bind(this));
        if (isNaN(this.originalNumber))
            throw new TypeError('The value must be a number');
    }

    static get observedAttributes(): string[] {
        return ['lang', 'use_comma']
    }

    private toggle(): void {
        this.isShortened = !this.isShortened;
        this.render();
    }

    private getCurrentLang(): string {
        return this.getAttribute('lang') || document.documentElement.getAttribute('lang') || 'en';
    }

    private formatNumber(num: number, lang: string): string {
        num = parseFloat(num.toString().replace(/[^\d.-]/g, ''));
        if (isNaN(num)) return this.originalNumber.toString();

        const useComma = this.hasAttribute('use_comma');
        const separator = useComma ? ',' : '.';

        const round = (value: number, digits: number): number => {
            if (digits === 0) return Math.round(value);
            const factor = Math.pow(10, digits);
            return Math.round(value * factor) / factor;
        };

        const format = (value: number, digits: number): string => {
            const rounded = round(value, digits);
            // Убираем лишние нули в дробной части
            let str = rounded.toString();
            if (digits > 0 && str.includes('.')) {
                str = str.replace(/\.?0+$/, '');
            }
            return str.replace('.', separator);
        };

        const getFractionDigits = (value: number): number => {
            if (value < 10) return 2;
            if (value < 100) return 1;
            return 0;
        };

        if (lang.startsWith('ru')) {
            if (num >= 1000000000000) {
                const value = num / 1000000000000;
                return format(value, getFractionDigits(value)) + ' трлн.';
            }
            if (num >= 1000000000) {
                const value = num / 1000000000;
                return format(value, getFractionDigits(value)) + ' млрд.';
            }
            if (num >= 1000000) {
                const value = num / 1000000;
                return format(value, getFractionDigits(value)) + ' млн.';
            }
            if (num >= 1000) {
                const value = num / 1000;
                return format(value, getFractionDigits(value)) + ' тыс.';
            }
        }
        else {
            if (num >= 1000000000000) {
                const value = num / 1000000000000;
                return format(value, getFractionDigits(value)) + 'T';
            }
            if (num >= 1000000000) {
                const value = num / 1000000000;
                return format(value, getFractionDigits(value)) + 'B';
            }
            if (num >= 1000000) {
                const value = num / 1000000;
                return format(value, getFractionDigits(value)) + 'M';
            }
            if (num >= 1000) {
                const value = num / 1000;
                return format(value, getFractionDigits(value)) + 'K';
            }
        }
        return format(num, 0);
    }

    private render(): void {
        const lang = this.getCurrentLang();
        this.textContent = this.isShortened
            ? this.formatNumber(this.originalNumber, lang)
            : this.originalNumber.toString();
    }
}

class StepElement extends HTMLElement {
    constructor() {
        super();
        if (this.textContent)
            this.label = this.textContent;
        this.innerHTML = `
            <div data-sb-generated="circle"></div>
            <div data-sb-generated="label"><slot></slot></div>
        `;
    }

    static get observedAttributes(): string[] {
        return ['active', 'completed', 'label']
    }

    get index(): number {
        return Array.from(this.parentNode!.children).indexOf(this) + 1;
    }

    private get active(): boolean {
        return this.hasAttribute('active')
    }

    private set active(force: boolean) {
        this.toggleAttribute('active', force)
    }

    private get completed(): boolean {
        return this.hasAttribute('completed')
    }

    private set completed(force: boolean) {
        this.toggleAttribute('completed', force)
    }

    get label(): string {
        return this.getAttribute('label') || ""
    }

    set label(value: string) {
        this.setAttribute('label', value);
    }

    private reset() {
        this.active = false;
        this.completed = false;
    }

    get status(): StepElementStatus {
        if (this.active)
            return 'active';
        else if (this.completed)
            return 'complete'
        else
            return 'uncomplete'
    }

    set status(value: StepElementStatus) {
        this.reset()
        switch (value) {
            case 'complete':
                this.completed = true
                break;
            case 'active':
                this.active = true
                break;
            case 'uncomplete':
                break;
            default:
                throw new TypeError(`Unknown status: ${value}`);
        }
    }

    connectedCallback() {
        this.querySelector('[data-sb-generated="circle"]')!.textContent = this.index.toString();
        this.querySelector('[data-sb-generated="label"]')!.textContent = this.label;
        const parent = this.parentElement as StepbarElement;
        const currentStep: number = parent.currentStep || 1;
        if (this.index === currentStep)
            this.active = true;
        else if (this.index < currentStep)
            this.completed = true;
    }
}

class Stepbar extends HTMLElement {
    private _observer: MutationObserver | undefined;

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot!.innerHTML = `
            <slot></slot>
        `;
    }

    static get observedAttributes(): string[] {
        return ['current'];
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === 'current') {
            this.updateSteps();
        }
    }

    connectedCallback() {
        if (!this._observer) {
            this._observer = new MutationObserver(() => this.updateSteps());
            this._observer.observe(this, {childList: true});
        }
        this.updateSteps();
    }

    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    private updateSteps() {
        const currentStep = parseInt(this.getAttribute('current') || '1');
        const elements: StepElement[] = Array.from(this.children).filter((el): el is StepElement => el.tagName === 'SB-ELEMENT');

        elements.forEach((element, index) => {
            const stepNumber = index + 1;
            element.status = 'uncomplete'

            if (stepNumber < currentStep) {
                element.status = 'complete'
            } else if (stepNumber === currentStep) {
                element.status = 'active';
            }
        });
    }

    get currentStep(): number {
        return parseInt(this.getAttribute('current') || '1');
    }

    set currentStep(step: number) {
        this.setAttribute('current', step.toString());
    }
}

class HTMLFile extends HTMLElement {
    constructor() {
        super();
    }

    get src(): string {
        return this.getAttribute('src') || '';
    }

    set src(value: string) {
        if (value) {
            this.setAttribute('src', value);
        } else {
            this.removeAttribute('src');
        }
    }

    static get observedAttributes() {
        return ['src'];
    }

    connectedCallback() {
        this.loadContent();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'src' && oldValue !== newValue && this.isConnected) {
            this.loadContent();
        }
    }

    private async loadContent() {
        const src = this.src;
        if (!src) return;

        try {
            const response = await fetch(src);
            const content = await response.text();

            // Вставляем HTML
            this.innerHTML = content;

            // Принудительно выполняем скрипты
            await this.executeScripts();

        } catch (error) {
            this.innerHTML = `Ошибка загрузки: ${(error as Error).message}`;
        }
    }

    private async executeScripts() {
        const scripts = this.querySelectorAll('script');

        for (const script of scripts) {
            if (script.src) {
                // Внешний скрипт
                await this.loadExternalScript(script.src);
            } else {
                // Inline скрипт
                this.executeInlineScript(script.textContent || '');
            }
            // Удаляем оригинальный script тег
            script.remove();
        }
    }

    private loadExternalScript(src: string) {
        return new Promise((resolve, reject) => {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.onload = resolve;
            newScript.onerror = reject;
            document.head.appendChild(newScript);
        });
    }

    private executeInlineScript(code: string) {
        try {
            const newScript = document.createElement('script');
            newScript.textContent = code;
            document.head.appendChild(newScript);
            document.head.removeChild(newScript);
        } catch (error) {
            console.error('Ошибка выполнения скрипта:', error);
        }
    }

    // Getter для проверки загрузки
    private get loaded() {
        return this.hasAttribute('data-loaded');
    }

    // Метод для перезагрузки
    reload() {
        return this.loadContent();
    }

    // Getter для содержимого
    get content() {
        return this.innerHTML;
    }
}

class ClickToCopy extends HTMLElement {
    private notification: HyperTextNotification

    constructor() {
        super();
        this.notification = new HyperTextNotification({backgroundColor: 'rgba(192,0,192,0.8)'})
    }

    get notificationText(): string {
        return this.getAttribute('text') || "Скопировано"
    }

    set notificationText(value: string) {
        if (value)
            this.setAttribute('text', value)
        else
            this.removeAttribute('text')
    }

    get isNotified(): boolean {
        return this.hasAttribute('notified')
    }

    set isNotified(value: boolean) {
        if (value)
            this.setAttribute('notified', '')
        else
            this.removeAttribute('notified')
    }

    connectedCallback() {
        this.addEventListener('click', () => {
            navigator.clipboard.writeText(this.textContent || '');
            if (this.isNotified)
                this.notification.show(this.notificationText)
        });
    }
}

customElements.define('sb-element', StepElement);
customElements.define('step-bar', Stepbar);
customElements.define('ab-num', AbbreviatedNumber)
customElements.define('include-html', HTMLFile);
customElements.define('click-to-copy', ClickToCopy)

// export { ClickToCopy, Stepbar, StepElement, AbbreviatedNumber, HTMLFile };
