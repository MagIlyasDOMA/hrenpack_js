/*
* hrenpack_js 3.1.5
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

const escapeChars: StringDict = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
};

function togglePassword(passwordInput: HTMLInputElement): void {
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}


function isTextWrapped(element: HTMLElement): boolean {
    const elementHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;
    return scrollHeight > elementHeight;
}


function notArrayEmpty(array: any[]): boolean {
    return array.length > 0;
}


function get_tagName(element: HTMLElement): string {
    return element.tagName.toLowerCase();
}


function element_toHTMLText(element: HTMLElement): string {
    const tag = get_tagName(element);
    const attrs = element.attributes;
    let text = `<${tag}`;

    // Добавляем атрибуты, если они есть
    if (attrs.length > 0) {
        for (let attr of attrs) {
            text += ` ${attr.name}="${attr.value}"`;
        }
    }

    text += `>${element.innerHTML}</${tag}>`;
    return text;
}


function element_to_div(element: HTMLElement): HTMLDivElement {
    const div = document.createElement('div');
    div.innerHTML = element.outerHTML; // Простое копирование
    return div;
}


function password_format(shownPasswordHTML: string, hiddenPasswordHTML: string): void {
    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input[type="password"]');
            inputs.forEach(input => {
                const wrapper = document.createElement('div');
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';
                wrapper.style.width = '100%';

                // Обёртываем input
                input.parentNode!.insertBefore(wrapper, input);
                wrapper.appendChild(input);

                // Создаём кнопку
                const toggleBtn = document.createElement('button');
                toggleBtn.type = 'button';
                toggleBtn.className = 'show-password-btn';
                toggleBtn.innerHTML = hiddenPasswordHTML;
                toggleBtn.style.cssText = `
                    position: absolute;
                    left: 45%;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    user-select: none;
                    background: none;
                    border: none;
                    padding: 0;
                `;

                toggleBtn.addEventListener('click', () => {
                    const isShowing = input.type === 'text';
                    input.type = isShowing ? 'password' : 'text';
                    toggleBtn.innerHTML = isShowing ? hiddenPasswordHTML : shownPasswordHTML;
                });

                wrapper.appendChild(toggleBtn);
            });
        });
    });
}


function escapeHTML(html: string): string {
    return html.replace(/[<>"']/g, function(i: string) {
        return escapeChars[i] || i;
    });
}


function strFormat(template: string, ...args: any[]): string {
    return template.replace(/{(\w+)}/g, (match, key) => {
        // Если ключ есть в аргументах по имени
        if (args.length > 0 && typeof args[0] === 'object' && args[0][key] !== undefined) {
            return args[0][key];
        }
        // Если ключ - число (позиционный аргумент)
        const index = parseInt(key);
        if (!isNaN(index) && args[index] !== undefined) {
            return args[index];
        }
        return match;
    });
}


function elementToHyperlink(element: HTMLElement, href: string,
                            cursorPointer: boolean = true, preventDefault: boolean = false): HTMLElement {
    element.addEventListener('click', function (elem) {
        if (elem.button === 0)
            window.location.href = href;
        else if (elem.button === 1)
            window.open(href, '_blank')
    })
    if (preventDefault) {
        element.addEventListener('auxclick', function (elem) {
            if (elem.button === 1)
                elem.preventDefault()
        })
    }
    if (cursorPointer)
        element.style.cursor = 'pointer'
    return element
}

/*export {
    escapeHTML,
    togglePassword,
    strFormat,
    elementToHyperlink,
    password_format,
    element_to_div,
    element_toHTMLText,
    isTextWrapped,
    get_tagName,
    notArrayEmpty
};*/
