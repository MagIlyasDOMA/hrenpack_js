/*
* hrenpack_js 3.1.4
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

class ClickableLinksFactory {
    private readonly urlRegex = /(https?:\/\/[^\s]+)/g;

    private walk(node: Node, isClickToCopy: boolean): void {
        if (node.nodeType === Node.TEXT_NODE) {
            const text: string = node.textContent || '';
            const func: (url: string) => string = isClickToCopy ? this.get_clickToCopy : this.get_anchor
            if (this.urlRegex.test(text)) {
                const parent = node.parentNode!;
                const newContent = text.replace(this.urlRegex, url => {
                    return func(url)
                });

                if (!parent) return

                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newContent;

                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, node);
                }
                parent.removeChild(node);
            }
        } else {
            node.childNodes.forEach(child => {
                this.walk(child, isClickToCopy);
            })
        }
    }

    private get_anchor(url: string): string {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" data-clf-generated>${url}</a>`
    }

    private get_clickToCopy(url: string): string {
        return `<click-to-copy data-clf-generated>${url}</click-to-copy>`
    }

    clickableLinks(element: HTMLElement): void {
        this.walk(element, false)
    }

    clickToCopyLinks(element: HTMLElement): void {
        this.walk(element, true)
    }

    get generatedElements(): NodeListOf<HTMLElement> {
        return document.querySelectorAll('[data-clf-generated]')
    }
}


class GETParamsManager {
    private params: URLSearchParams;

    constructor() {
        this.params = new URLSearchParams(window.location.search);
    }

    // Получить параметр
    get<T = string>(key: string, defaultValue?: T): T | string | null {
        const value = this.params.get(key);
        if (value === null) return defaultValue || null;

        // Попытка преобразования типов
        if (defaultValue !== undefined) {
            switch (typeof defaultValue) {
                case 'number':
                    return Number(value) as T;
                case 'boolean':
                    return (value === 'true') as T;
                default:
                    return value as T;
            }
        }

        return value;
    }

    // Установить параметр
    set(key: string, value: string | number | boolean): void {
        this.params.set(key, String(value));
        this.updateURL();
    }

    // Удалить параметр
    delete(key: string): void {
        this.params.delete(key);
        this.updateURL();
    }

    // Получить все параметры как объект
    all(): Record<string, string> {
        const result: Record<string, string> = {};

        for (const [key, value] of this.params.entries()) {
            result[key] = value;
        }

        return result;
    }

    // Очистить все параметры
    clear(): void {
        const keys = Array.from(this.params.keys());
        keys.forEach(key => this.params.delete(key));
        this.updateURL();
    }

    private updateURL(): void {
        const newUrl = `${window.location.pathname}?${this.params.toString()}`;
        window.history.pushState({}, '', newUrl);
    }
}

// export { ClickableLinksFactory, GETParamsManager };
