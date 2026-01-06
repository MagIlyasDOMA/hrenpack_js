// @ts-nocheck
// ===== File: arraywork.js =====
"use strict";
function arrayIsEmpty(arr) {
    return arr.length === 0 || !arr[0];
}
function arraysIsEqual(array1, array2, strict = true) {
    if (array1.length !== array2.length)
        return false;
    if (strict)
        return array1.every((value, index) => value === array2[index]);
    else {
        array1.forEach(element => {
            if (!array2.includes(element))
                return false;
        });
        return true;
    }
}
//# sourceMappingURL=arraywork.js.map

// ===== File: auto.js =====
"use strict";
const stylesRoot = getComputedStyle(document.documentElement);
//# sourceMappingURL=auto.js.map

// ===== File: classes.js =====
"use strict";
class ClickableLinksFactory {
    constructor() {
        Object.defineProperty(this, "urlRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /(https?:\/\/[^\s]+)/g
        });
    }
    walk(node, isClickToCopy) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || '';
            const func = isClickToCopy ? this.get_clickToCopy : this.get_anchor;
            if (this.urlRegex.test(text)) {
                const parent = node.parentNode;
                const newContent = text.replace(this.urlRegex, url => {
                    return func(url);
                });
                if (!parent)
                    return;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newContent;
                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, node);
                }
                parent.removeChild(node);
            }
        }
        else {
            node.childNodes.forEach(child => {
                this.walk(child, isClickToCopy);
            });
        }
    }
    get_anchor(url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" data-clf-generated>${url}</a>`;
    }
    get_clickToCopy(url) {
        return `<click-to-copy data-clf-generated>${url}</click-to-copy>`;
    }
    clickableLinks(element) {
        this.walk(element, false);
    }
    clickToCopyLinks(element) {
        this.walk(element, true);
    }
    get generatedElements() {
        return document.querySelectorAll('[data-clf-generated]');
    }
}
class GETParamsManager {
    constructor() {
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.params = new URLSearchParams(window.location.search);
    }
    get(key, defaultValue) {
        const value = this.params.get(key);
        if (value === null)
            return defaultValue || null;
        if (defaultValue !== undefined) {
            switch (typeof defaultValue) {
                case 'number':
                    return Number(value);
                case 'boolean':
                    return (value === 'true');
                default:
                    return value;
            }
        }
        return value;
    }
    set(key, value) {
        this.params.set(key, String(value));
        this.updateURL();
    }
    delete(key) {
        this.params.delete(key);
        this.updateURL();
    }
    all() {
        const result = {};
        for (const [key, value] of this.params.entries()) {
            result[key] = value;
        }
        return result;
    }
    clear() {
        const keys = Array.from(this.params.keys());
        keys.forEach(key => this.params.delete(key));
        this.updateURL();
    }
    updateURL() {
        const newUrl = `${window.location.pathname}?${this.params.toString()}`;
        window.history.pushState({}, '', newUrl);
    }
}
//# sourceMappingURL=classes.js.map

// ===== File: compiler.js =====
"use strict";
function downloadTextAsFile(filename, text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    console.log(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
//# sourceMappingURL=compiler.js.map

// ===== File: cookie.js =====
"use strict";
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    cookiesArray.forEach(cookie => {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    });
    return null;
}
function setCookie(name, value, days = null, path = '/') {
    let expires;
    if (!days) {
        expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
    else {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=${path}`;
}
function hasCookie(name) {
    return getCookie(name) != null;
}
//# sourceMappingURL=cookie.js.map

// ===== File: datework.js =====
"use strict";
class datetime {
    constructor(_year, _month, _days, _hours, _minutes, _seconds) {
        Object.defineProperty(this, "_year", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _year
        });
        Object.defineProperty(this, "_month", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _month
        });
        Object.defineProperty(this, "_days", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _days
        });
        Object.defineProperty(this, "_hours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _hours
        });
        Object.defineProperty(this, "_minutes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _minutes
        });
        Object.defineProperty(this, "_seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _seconds
        });
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.date = new Date(this._year, this._month, this._days, this._hours, this._minutes, this._seconds);
    }
    static newObject(dateObject) {
        return new datetime(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), dateObject.getHours(), dateObject.getMinutes(), dateObject.getSeconds());
    }
    static now() {
        return datetime.newObject(new Date());
    }
    static fromTimestamp(timestamp) {
        return datetime.newObject(new Date(timestamp));
    }
    get year() { return this._year; }
    get month() { return this._month; }
    get days() { return this._days; }
    get hours() { return this._hours; }
    get minutes() { return this._minutes; }
    get seconds() { return this._seconds; }
    set year(year) { this._year = year; }
    set month(month) { this._month = month; }
    set days(days) { this._days = days; }
    set hours(hours) { this._hours = hours; }
    set minutes(minutes) { this._minutes = minutes; }
    set seconds(seconds) { this._seconds = seconds; }
    timestamp() {
        return this.date.getTime();
    }
}
//# sourceMappingURL=datework.js.map

// ===== File: exceptions.js =====
"use strict";
class NotAuthorizedError extends Error {
    constructor() {
        super("Пользователь не авторизован");
        this.name = 'NotAuthorizedError';
    }
}
//# sourceMappingURL=exceptions.js.map

// ===== File: get_element_types.js =====
"use strict";
function button_submit(parent) {
    const buttons = parent.querySelectorAll('button');
    let submit = null;
    buttons.forEach(button => {
        if (button.type === 'submit')
            submit = button;
    });
    return submit;
}
//# sourceMappingURL=get_element_types.js.map

// ===== File: html.js =====
"use strict";
const escapeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
};
function togglePassword(passwordInput) {
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}
function isTextWrapped(element) {
    const elementHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;
    return scrollHeight > elementHeight;
}
function notArrayEmpty(array) {
    return array.length > 0;
}
function get_tagName(element) {
    return element.tagName.toLowerCase();
}
function element_toHTMLText(element) {
    const tag = get_tagName(element);
    const attrs = element.attributes;
    let text = `<${tag}`;
    if (attrs.length > 0) {
        for (let attr of attrs) {
            text += ` ${attr.name}="${attr.value}"`;
        }
    }
    text += `>${element.innerHTML}</${tag}>`;
    return text;
}
function element_to_div(element) {
    const div = document.createElement('div');
    div.innerHTML = element.outerHTML;
    return div;
}
function password_format(shownPasswordHTML, hiddenPasswordHTML) {
    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input[type="password"]');
            inputs.forEach(input => {
                const wrapper = document.createElement('div');
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';
                wrapper.style.width = '100%';
                input.parentNode.insertBefore(wrapper, input);
                wrapper.appendChild(input);
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
function escapeHTML(html) {
    return html.replace(/[<>"']/g, function (i) {
        return escapeChars[i] || i;
    });
}
function strFormat(template, ...args) {
    return template.replace(/{(\w+)}/g, (match, key) => {
        if (args.length > 0 && typeof args[0] === 'object' && args[0][key] !== undefined) {
            return args[0][key];
        }
        const index = parseInt(key);
        if (!isNaN(index) && args[index] !== undefined) {
            return args[index];
        }
        return match;
    });
}
function elementToHyperlink(element, href, cursorPointer = true, preventDefault = false) {
    element.addEventListener('click', function (elem) {
        if (elem.button === 0)
            window.location.href = href;
        else if (elem.button === 1)
            window.open(href, '_blank');
    });
    if (preventDefault) {
        element.addEventListener('auxclick', function (elem) {
            if (elem.button === 1)
                elem.preventDefault();
        });
    }
    if (cursorPointer)
        element.style.cursor = 'pointer';
    return element;
}
//# sourceMappingURL=html.js.map

// ===== File: index.js =====
// @ts-nocheck

// ===== File: arraywork.js =====
"use strict";
function arrayIsEmpty(arr) {
    return arr.length === 0 || !arr[0];
}
function arraysIsEqual(array1, array2, strict = true) {
    if (array1.length !== array2.length)
        return false;
    if (strict)
        return array1.every((value, index) => value === array2[index]);
    else {
        array1.forEach(element => {
            if (!array2.includes(element))
                return false;
        });
        return true;
    }
}
//# sourceMappingURL=arraywork.js.map

// ===== File: auto.js =====
"use strict";
const stylesRoot = getComputedStyle(document.documentElement);
//# sourceMappingURL=auto.js.map

// ===== File: classes.js =====
"use strict";
class ClickableLinksFactory {
    constructor() {
        Object.defineProperty(this, "urlRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /(https?:\/\/[^\s]+)/g
        });
    }
    walk(node, isClickToCopy) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || '';
            const func = isClickToCopy ? this.get_clickToCopy : this.get_anchor;
            if (this.urlRegex.test(text)) {
                const parent = node.parentNode;
                const newContent = text.replace(this.urlRegex, url => {
                    return func(url);
                });
                if (!parent)
                    return;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newContent;
                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, node);
                }
                parent.removeChild(node);
            }
        }
        else {
            node.childNodes.forEach(child => {
                this.walk(child, isClickToCopy);
            });
        }
    }
    get_anchor(url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" data-clf-generated>${url}</a>`;
    }
    get_clickToCopy(url) {
        return `<click-to-copy data-clf-generated>${url}</click-to-copy>`;
    }
    clickableLinks(element) {
        this.walk(element, false);
    }
    clickToCopyLinks(element) {
        this.walk(element, true);
    }
    get generatedElements() {
        return document.querySelectorAll('[data-clf-generated]');
    }
}
class GETParamsManager {
    constructor() {
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.params = new URLSearchParams(window.location.search);
    }
    get(key, defaultValue) {
        const value = this.params.get(key);
        if (value === null)
            return defaultValue || null;
        if (defaultValue !== undefined) {
            switch (typeof defaultValue) {
                case 'number':
                    return Number(value);
                case 'boolean':
                    return (value === 'true');
                default:
                    return value;
            }
        }
        return value;
    }
    set(key, value) {
        this.params.set(key, String(value));
        this.updateURL();
    }
    delete(key) {
        this.params.delete(key);
        this.updateURL();
    }
    all() {
        const result = {};
        for (const [key, value] of this.params.entries()) {
            result[key] = value;
        }
        return result;
    }
    clear() {
        const keys = Array.from(this.params.keys());
        keys.forEach(key => this.params.delete(key));
        this.updateURL();
    }
    updateURL() {
        const newUrl = `${window.location.pathname}?${this.params.toString()}`;
        window.history.pushState({}, '', newUrl);
    }
}
//# sourceMappingURL=classes.js.map

// ===== File: compiler.js =====
"use strict";
function downloadTextAsFile(filename, text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    console.log(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
//# sourceMappingURL=compiler.js.map

// ===== File: cookie.js =====
"use strict";
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    cookiesArray.forEach(cookie => {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    });
    return null;
}
function setCookie(name, value, days = null, path = '/') {
    let expires;
    if (!days) {
        expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
    else {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=${path}`;
}
function hasCookie(name) {
    return getCookie(name) != null;
}
//# sourceMappingURL=cookie.js.map

// ===== File: datework.js =====
"use strict";
class datetime {
    constructor(_year, _month, _days, _hours, _minutes, _seconds) {
        Object.defineProperty(this, "_year", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _year
        });
        Object.defineProperty(this, "_month", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _month
        });
        Object.defineProperty(this, "_days", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _days
        });
        Object.defineProperty(this, "_hours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _hours
        });
        Object.defineProperty(this, "_minutes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _minutes
        });
        Object.defineProperty(this, "_seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _seconds
        });
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.date = new Date(this._year, this._month, this._days, this._hours, this._minutes, this._seconds);
    }
    static newObject(dateObject) {
        return new datetime(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate(), dateObject.getHours(), dateObject.getMinutes(), dateObject.getSeconds());
    }
    static now() {
        return datetime.newObject(new Date());
    }
    static fromTimestamp(timestamp) {
        return datetime.newObject(new Date(timestamp));
    }
    get year() { return this._year; }
    get month() { return this._month; }
    get days() { return this._days; }
    get hours() { return this._hours; }
    get minutes() { return this._minutes; }
    get seconds() { return this._seconds; }
    set year(year) { this._year = year; }
    set month(month) { this._month = month; }
    set days(days) { this._days = days; }
    set hours(hours) { this._hours = hours; }
    set minutes(minutes) { this._minutes = minutes; }
    set seconds(seconds) { this._seconds = seconds; }
    timestamp() {
        return this.date.getTime();
    }
}
//# sourceMappingURL=datework.js.map

// ===== File: exceptions.js =====
"use strict";
class NotAuthorizedError extends Error {
    constructor() {
        super("Пользователь не авторизован");
        this.name = 'NotAuthorizedError';
    }
}
//# sourceMappingURL=exceptions.js.map

// ===== File: get_element_types.js =====
"use strict";
function button_submit(parent) {
    const buttons = parent.querySelectorAll('button');
    let submit = null;
    buttons.forEach(button => {
        if (button.type === 'submit')
            submit = button;
    });
    return submit;
}
//# sourceMappingURL=get_element_types.js.map

// ===== File: html.js =====
"use strict";
const escapeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
};
function togglePassword(passwordInput) {
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}
function isTextWrapped(element) {
    const elementHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;
    return scrollHeight > elementHeight;
}
function notArrayEmpty(array) {
    return array.length > 0;
}
function get_tagName(element) {
    return element.tagName.toLowerCase();
}
function element_toHTMLText(element) {
    const tag = get_tagName(element);
    const attrs = element.attributes;
    let text = `<${tag}`;
    if (attrs.length > 0) {
        for (let attr of attrs) {
            text += ` ${attr.name}="${attr.value}"`;
        }
    }
    text += `>${element.innerHTML}</${tag}>`;
    return text;
}
function element_to_div(element) {
    const div = document.createElement('div');
    div.innerHTML = element.outerHTML;
    return div;
}
function password_format(shownPasswordHTML, hiddenPasswordHTML) {
    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input[type="password"]');
            inputs.forEach(input => {
                const wrapper = document.createElement('div');
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';
                wrapper.style.width = '100%';
                input.parentNode.insertBefore(wrapper, input);
                wrapper.appendChild(input);
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
function escapeHTML(html) {
    return html.replace(/[<>"']/g, function (i) {
        return escapeChars[i] || i;
    });
}
function strFormat(template, ...args) {
    return template.replace(/{(\w+)}/g, (match, key) => {
        if (args.length > 0 && typeof args[0] === 'object' && args[0][key] !== undefined) {
            return args[0][key];
        }
        const index = parseInt(key);
        if (!isNaN(index) && args[index] !== undefined) {
            return args[index];
        }
        return match;
    });
}
function elementToHyperlink(element, href, cursorPointer = true, preventDefault = false) {
    element.addEventListener('click', function (elem) {
        if (elem.button === 0)
            window.location.href = href;
        else if (elem.button === 1)
            window.open(href, '_blank');
    });
    if (preventDefault) {
        element.addEventListener('auxclick', function (elem) {
            if (elem.button === 1)
                elem.preventDefault();
        });
    }
    if (cursorPointer)
        element.style.cursor = 'pointer';
    return element;
}
//# sourceMappingURL=html.js.map

// ===== File: index.js =====
// @ts-nocheck

// ===== File: arraywork.js =====
"use strict";
function arrayIsEmpty(arr) {
    return arr.length === 0 || !arr[0];
}
function arraysIsEqual(array1, array2, strict = true) {
    if (array1.length !== array2.length)
        return false;
    if (strict)
        return array1.every((value, index) => value === array2[index]);
    else {
        array1.forEach(element => {
            if (!array2.includes(element))
                return false;
        });
        return true;
    }
}
//# sourceMappingURL=arraywork.js.map

// ===== File: auto.js =====
"use strict";
const stylesRoot = getComputedStyle(document.documentElement);
//# sourceMappingURL=auto.js.map

// ===== File: classes.js =====
"use strict";
class ClickableLinksFactory {
    constructor() {
        Object.defineProperty(this, "urlRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /(https?:\/\/[^\s]+)/g
        });
    }
    walk(node, isClickToCopy) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || '';
            const func = isClickToCopy ? this.get_clickToCopy : this.get_anchor;
            if (this.urlRegex.test(text)) {
                const parent = node.parentNode;
                const newContent = text.replace(this.urlRegex, url => {
                    return func(url);
                });
                if (!parent)
                    return;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newContent;
                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, node);
                }
                parent.removeChild(node);
            }
        }
        else {
            node.childNodes.forEach(child => {
                this.walk(child, isClickToCopy);
            });
        }
    }
    get_anchor(url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" data-clf-generated>${url}</a>`;
    }
    get_clickToCopy(url) {
        return `<click-to-copy data-clf-generated>${url}</click-to-copy>`;
    }
    clickableLinks(element) {
        this.walk(element, false);
    }
    clickToCopyLinks(element) {
        this.walk(element, true);
    }
    get generatedElements() {
        return document.querySelectorAll('[data-clf-generated]');
    }
}
class GETParamsManager {
    constructor() {
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.params = new URLSearchParams(window.location.search);
    }
    get(key, defaultValue) {
        const value = this.params.get(key);
        if (value === null)
            return defaultValue || null;
        if (defaultValue !== undefined) {
            switch (typeof defaultValue) {
                case 'number':
                    return Number(value);
                case 'boolean':
                    return (value === 'true');
                default:
                    return value;
            }
        }
        return value;
    }
    set(key, value) {
        this.params.set(key, String(value));
        this.updateURL();
    }
    delete(key) {
        this.params.delete(key);
        this.updateURL();
    }
    all() {
        const result = {};
        for (const [key, value] of this.params.entries()) {
            result[key] = value;
        }
        return result;
    }
    clear() {
        const keys = Array.from(this.params.keys());
        keys.forEach(key => this.params.delete(key));
        this.updateURL();
    }
    updateURL() {
        const newUrl = `${window.location.pathname}?${this.params.toString()}`;
        window.history.pushState({}, '', newUrl);
    }
}
//# sourceMappingURL=classes.js.map

// ===== File: compiler.js =====
"use strict";
function downloadTextAsFile(filename, text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    console.log(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
//# sourceMappingURL=compiler.js.map

// ===== File: cookie.js =====
"use strict";
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    cookiesArray.forEach(cookie => {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    });
    return null;
}
function setCookie(name, value, days = null, path = '/') {
    let expires;
    if (!days) {
        expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
    else {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=${path}`;
}
function hasCookie(name) {
    return getCookie(name) != null;
}
//# sourceMappingURL=cookie.js.map

// ===== File: exceptions.js =====
"use strict";
class NotAuthorizedError extends Error {
    constructor() {
        super("Пользователь не авторизован");
        this.name = 'NotAuthorizedError';
    }
}
//# sourceMappingURL=exceptions.js.map

// ===== File: get_element_types.js =====
"use strict";
function button_submit(parent) {
    const buttons = parent.querySelectorAll('button');
    let submit = null;
    buttons.forEach(button => {
        if (button.type === 'submit')
            submit = button;
    });
    return submit;
}
//# sourceMappingURL=get_element_types.js.map

// ===== File: html.js =====
"use strict";
const escapeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
};
function togglePassword(passwordInput) {
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}
function isTextWrapped(element) {
    const elementHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;
    return scrollHeight > elementHeight;
}
function notArrayEmpty(array) {
    return array.length > 0;
}
function get_tagName(element) {
    return element.tagName.toLowerCase();
}
function element_toHTMLText(element) {
    const tag = get_tagName(element);
    const attrs = element.attributes;
    let text = `<${tag}`;
    if (attrs.length > 0) {
        for (let attr of attrs) {
            text += ` ${attr.name}="${attr.value}"`;
        }
    }
    text += `>${element.innerHTML}</${tag}>`;
    return text;
}
function element_to_div(element) {
    const div = document.createElement('div');
    div.innerHTML = element.outerHTML;
    return div;
}
function password_format(shownPasswordHTML, hiddenPasswordHTML) {
    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input[type="password"]');
            inputs.forEach(input => {
                const wrapper = document.createElement('div');
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';
                wrapper.style.width = '100%';
                input.parentNode.insertBefore(wrapper, input);
                wrapper.appendChild(input);
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
function escapeHTML(html) {
    return html.replace(/[<>"']/g, function (i) {
        return escapeChars[i] || i;
    });
}
function strFormat(template, ...args) {
    return template.replace(/{(\w+)}/g, (match, key) => {
        if (args.length > 0 && typeof args[0] === 'object' && args[0][key] !== undefined) {
            return args[0][key];
        }
        const index = parseInt(key);
        if (!isNaN(index) && args[index] !== undefined) {
            return args[index];
        }
        return match;
    });
}
function elementToHyperlink(element, href, cursorPointer = true, preventDefault = false) {
    element.addEventListener('click', function (elem) {
        if (elem.button === 0)
            window.location.href = href;
        else if (elem.button === 1)
            window.open(href, '_blank');
    });
    if (preventDefault) {
        element.addEventListener('auxclick', function (elem) {
            if (elem.button === 1)
                elem.preventDefault();
        });
    }
    if (cursorPointer)
        element.style.cursor = 'pointer';
    return element;
}
//# sourceMappingURL=html.js.map

// ===== File: input.js =====
"use strict";
function getInputCursorPosition(input) {
    const start = input.selectionStart;
    if (start == null)
        throw new Error("Incorrect input type");
    return start - 1;
}
function copyInputToClipboard(input) {
    const disabled = input.hasAttribute("disabled");
    if (disabled)
        input.removeAttribute('disabled');
    navigator.clipboard.writeText(input.value)
        .then(() => { })
        .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    })
        .finally(() => {
        if (disabled)
            input.setAttribute('disabled', '');
    });
}
function clearInput_and_addLastSymbol(input) {
    input.value = input.value[getInputCursorPosition(input)] || '';
}
function getInputLabel(input) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (!label)
        throw new Error("Label не найден. Возможно, вы не использовали атрибут for в нем");
    return label;
}
//# sourceMappingURL=input.js.map

// ===== File: link.js =====
"use strict";
function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}
//# sourceMappingURL=link.js.map

// ===== File: notifications.js =====
"use strict";
function pushNotification(title = "Уведомление", body = "Текст уведомления", icon = null) {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                if (icon)
                    new Notification(title, { body: body, icon: icon });
                else
                    new Notification(title, { body: body });
            }
        });
    }
    else {
        if (icon)
            new Notification(title, { body: body, icon: icon });
        else
            new Notification(title, { body: body });
    }
}
class HyperTextNotification {
    constructor({ bottom = '20', right = '20', backgroundColor = '#121212', color = '#ededed', padding = '15', borderRadius = '5', timeout = 3 } = {}) {
        Object.defineProperty(this, "bottom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "right", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backgroundColor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "padding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "borderRadius", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bottom = intToPixel(bottom);
        this.right = intToPixel(right);
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.padding = intToPixel(padding);
        this.borderRadius = intToPixel(borderRadius);
        this.timeout = timeout;
    }
    show(message, timeout = 0) {
        const notification = document.createElement("div");
        notification.textContent = message;
        notification.style.position = "fixed";
        notification.style.bottom = this.bottom;
        notification.style.right = this.right;
        notification.style.backgroundColor = this.backgroundColor;
        notification.style.color = this.color;
        notification.style.padding = this.padding;
        notification.style.borderRadius = this.borderRadius;
        notification.style.zIndex = "1000";
        const actualTimeout = timeout === 0 ? this.timeout : timeout;
        document.body.appendChild(notification);
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, actualTimeout * 1000);
    }
}
//# sourceMappingURL=notifications.js.map

// ===== File: styles.js =====
"use strict";
function input_type_fc(input) {
    return input.type !== 'hidden' && input.type !== 'reset' && input.type !== 'checkbox' && input.type !== 'radio';
}
function input_form_control(form) {
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const areas = form.querySelectorAll('textarea');
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control');
    });
    selects.forEach(select => {
        select.classList.add('form-control');
    });
    areas.forEach(textarea => {
        textarea.classList.add('form-control');
    });
}
function input_form_control_unline(form) {
    console.log(form.id);
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const areas = form.querySelectorAll('textarea');
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control-unline');
    });
    selects.forEach(select => {
        select.classList.add('form-control-unline');
    });
    areas.forEach(textarea => {
        textarea.classList.add('form-control-unline');
    });
}
function intToPixel(number = '0') {
    number = number.toString();
    if (parseInt(number) === 0)
        return '0';
    return !isNaN(parseInt(number)) ? number + 'px' : number;
}
//# sourceMappingURL=styles.js.map

// ===== File: system.js =====
"use strict";
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDark ? 'dark' : 'light';
    }
    return null;
}
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => { })
        .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    });
}
function redirectBackOrClose(default_url = '/') {
    if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
    }
    else {
        window.close();
        setTimeout(() => {
            if (!window.closed) {
                window.location.href = default_url;
            }
        }, 100);
    }
}
function getHost() {
    return window.location.protocol + '//' + window.location.host;
}
//# sourceMappingURL=system.js.map

// ===== File: tags.js =====
"use strict";
class AbbreviatedNumber extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "isShortened", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isShortened = true;
        this.originalNumber = parseFloat(this.textContent?.trim() || '0');
        this.render();
        this.addEventListener('click', this.toggle.bind(this));
        if (isNaN(this.originalNumber))
            throw new TypeError('The value must be a number');
    }
    static get observedAttributes() {
        return ['lang', 'use_comma'];
    }
    toggle() {
        this.isShortened = !this.isShortened;
        this.render();
    }
    getCurrentLang() {
        return this.getAttribute('lang') || document.documentElement.getAttribute('lang') || 'en';
    }
    formatNumber(num, lang) {
        num = parseFloat(num.toString().replace(/[^\d.-]/g, ''));
        if (isNaN(num))
            return this.originalNumber.toString();
        const useComma = this.hasAttribute('use_comma');
        const separator = useComma ? ',' : '.';
        const round = (value, digits) => {
            if (digits === 0)
                return Math.round(value);
            const factor = Math.pow(10, digits);
            return Math.round(value * factor) / factor;
        };
        const format = (value, digits) => {
            const rounded = round(value, digits);
            let str = rounded.toString();
            if (digits > 0 && str.includes('.')) {
                str = str.replace(/\.?0+$/, '');
            }
            return str.replace('.', separator);
        };
        const getFractionDigits = (value) => {
            if (value < 10)
                return 2;
            if (value < 100)
                return 1;
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
    render() {
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
    static get observedAttributes() {
        return ['active', 'completed', 'label'];
    }
    get index() {
        return Array.from(this.parentNode.children).indexOf(this) + 1;
    }
    get active() {
        return this.hasAttribute('active');
    }
    set active(force) {
        this.toggleAttribute('active', force);
    }
    get completed() {
        return this.hasAttribute('completed');
    }
    set completed(force) {
        this.toggleAttribute('completed', force);
    }
    get label() {
        return this.getAttribute('label') || "";
    }
    set label(value) {
        this.setAttribute('label', value);
    }
    reset() {
        this.active = false;
        this.completed = false;
    }
    get status() {
        if (this.active)
            return 'active';
        else if (this.completed)
            return 'complete';
        else
            return 'uncomplete';
    }
    set status(value) {
        this.reset();
        switch (value) {
            case 'complete':
                this.completed = true;
                break;
            case 'active':
                this.active = true;
                break;
            case 'uncomplete':
                break;
            default:
                throw new TypeError(`Unknown status: ${value}`);
        }
    }
    connectedCallback() {
        this.querySelector('[data-sb-generated="circle"]').textContent = this.index.toString();
        this.querySelector('[data-sb-generated="label"]').textContent = this.label;
        const parent = this.parentElement;
        const currentStep = parent.currentStep || 1;
        if (this.index === currentStep)
            this.active = true;
        else if (this.index < currentStep)
            this.completed = true;
    }
}
class Stepbar extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "_observer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <slot></slot>
        `;
    }
    static get observedAttributes() {
        return ['current'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'current') {
            this.updateSteps();
        }
    }
    connectedCallback() {
        if (!this._observer) {
            this._observer = new MutationObserver(() => this.updateSteps());
            this._observer.observe(this, { childList: true });
        }
        this.updateSteps();
    }
    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }
    updateSteps() {
        const currentStep = parseInt(this.getAttribute('current') || '1');
        const elements = Array.from(this.children).filter((el) => el.tagName === 'SB-ELEMENT');
        elements.forEach((element, index) => {
            const stepNumber = index + 1;
            element.status = 'uncomplete';
            if (stepNumber < currentStep) {
                element.status = 'complete';
            }
            else if (stepNumber === currentStep) {
                element.status = 'active';
            }
        });
    }
    get currentStep() {
        return parseInt(this.getAttribute('current') || '1');
    }
    set currentStep(step) {
        this.setAttribute('current', step.toString());
    }
}
class HTMLFile extends HTMLElement {
    constructor() {
        super();
    }
    get src() {
        return this.getAttribute('src') || '';
    }
    set src(value) {
        if (value) {
            this.setAttribute('src', value);
        }
        else {
            this.removeAttribute('src');
        }
    }
    static get observedAttributes() {
        return ['src'];
    }
    connectedCallback() {
        this.loadContent();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src' && oldValue !== newValue && this.isConnected) {
            this.loadContent();
        }
    }
    async loadContent() {
        const src = this.src;
        if (!src)
            return;
        try {
            const response = await fetch(src);
            const content = await response.text();
            this.innerHTML = content;
            await this.executeScripts();
        }
        catch (error) {
            this.innerHTML = `Ошибка загрузки: ${error.message}`;
        }
    }
    async executeScripts() {
        const scripts = this.querySelectorAll('script');
        for (const script of scripts) {
            if (script.src) {
                await this.loadExternalScript(script.src);
            }
            else {
                this.executeInlineScript(script.textContent || '');
            }
            script.remove();
        }
    }
    loadExternalScript(src) {
        return new Promise((resolve, reject) => {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.onload = resolve;
            newScript.onerror = reject;
            document.head.appendChild(newScript);
        });
    }
    executeInlineScript(code) {
        try {
            const newScript = document.createElement('script');
            newScript.textContent = code;
            document.head.appendChild(newScript);
            document.head.removeChild(newScript);
        }
        catch (error) {
            console.error('Ошибка выполнения скрипта:', error);
        }
    }
    get loaded() {
        return this.hasAttribute('data-loaded');
    }
    reload() {
        return this.loadContent();
    }
    get content() {
        return this.innerHTML;
    }
}
class ClickToCopy extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "notification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.notification = new HyperTextNotification({ backgroundColor: 'rgba(192,0,192,0.8)' });
    }
    get notificationText() {
        return this.getAttribute('text') || "Скопировано";
    }
    set notificationText(value) {
        if (value)
            this.setAttribute('text', value);
        else
            this.removeAttribute('text');
    }
    get isNotified() {
        return this.hasAttribute('notified');
    }
    set isNotified(value) {
        if (value)
            this.setAttribute('notified', '');
        else
            this.removeAttribute('notified');
    }
    connectedCallback() {
        this.addEventListener('click', () => {
            navigator.clipboard.writeText(this.textContent || '');
            if (this.isNotified)
                this.notification.show(this.notificationText);
        });
    }
}
customElements.define('sb-element', StepElement);
customElements.define('step-bar', Stepbar);
customElements.define('ab-num', AbbreviatedNumber);
customElements.define('include-html', HTMLFile);
customElements.define('click-to-copy', ClickToCopy);
//# sourceMappingURL=tags.js.map

// ===== File: url.js =====
"use strict";
function isAbsoluteUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch (e) {
        return url[0] === '/' || url[0] === '\\';
    }
}
function combineUrls(baseUrl, relativeUrl) {
    try {
        if (!baseUrl) {
            if (relativeUrl.startsWith('/'))
                return relativeUrl;
            return '/' + relativeUrl;
        }
        return new URL(relativeUrl, baseUrl).toString();
    }
    catch (error) {
        throw new Error(`Invalid URL combination: ${baseUrl}, ${relativeUrl}`);
    }
}
function getScriptSite(script) {
    return new URL(script.src).origin;
}
//# sourceMappingURL=url.js.map

// ===== File: uuid.js =====
"use strict";
function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
//# sourceMappingURL=uuid.js.map


// string.js
function stringToBoolean(input) {
    if (input.toLowerCase() === "true")
        return true;
    if (input.toLowerCase() === "false")
        return false;
    return null;
}


// ===== File: input.js =====
"use strict";
function getInputCursorPosition(input) {
    const start = input.selectionStart;
    if (start == null)
        throw new Error("Incorrect input type");
    return start - 1;
}
function copyInputToClipboard(input) {
    const disabled = input.hasAttribute("disabled");
    if (disabled)
        input.removeAttribute('disabled');
    navigator.clipboard.writeText(input.value)
        .then(() => { })
        .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    })
        .finally(() => {
        if (disabled)
            input.setAttribute('disabled', '');
    });
}
function clearInput_and_addLastSymbol(input) {
    input.value = input.value[getInputCursorPosition(input)] || '';
}
function getInputLabel(input) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (!label)
        throw new Error("Label не найден. Возможно, вы не использовали атрибут for в нем");
    return label;
}
//# sourceMappingURL=input.js.map

// ===== File: link.js =====
"use strict";
function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}
//# sourceMappingURL=link.js.map

// ===== File: notifications.js =====
"use strict";
function pushNotification(title = "Уведомление", body = "Текст уведомления", icon = null) {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                if (icon)
                    new Notification(title, { body: body, icon: icon });
                else
                    new Notification(title, { body: body });
            }
        });
    }
    else {
        if (icon)
            new Notification(title, { body: body, icon: icon });
        else
            new Notification(title, { body: body });
    }
}
class HyperTextNotification {
    constructor({ bottom = '20', right = '20', backgroundColor = '#121212', color = '#ededed', padding = '15', borderRadius = '5', timeout = 3 } = {}) {
        Object.defineProperty(this, "bottom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "right", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backgroundColor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "padding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "borderRadius", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bottom = intToPixel(bottom);
        this.right = intToPixel(right);
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.padding = intToPixel(padding);
        this.borderRadius = intToPixel(borderRadius);
        this.timeout = timeout;
    }
    show(message, timeout = 0) {
        const notification = document.createElement("div");
        notification.textContent = message;
        notification.style.position = "fixed";
        notification.style.bottom = this.bottom;
        notification.style.right = this.right;
        notification.style.backgroundColor = this.backgroundColor;
        notification.style.color = this.color;
        notification.style.padding = this.padding;
        notification.style.borderRadius = this.borderRadius;
        notification.style.zIndex = "1000";
        const actualTimeout = timeout === 0 ? this.timeout : timeout;
        document.body.appendChild(notification);
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, actualTimeout * 1000);
    }
}
//# sourceMappingURL=notifications.js.map

// ===== File: string.js =====
"use strict";
function stringToBoolean(input) {
    if (input.toLowerCase() === "true")
        return true;
    if (input.toLowerCase() === "false")
        return false;
    return null;
}
//# sourceMappingURL=string.js.map

// ===== File: styles.js =====
"use strict";
function input_type_fc(input) {
    return input.type !== 'hidden' && input.type !== 'reset' && input.type !== 'checkbox' && input.type !== 'radio';
}
function input_form_control(form) {
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const areas = form.querySelectorAll('textarea');
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control');
    });
    selects.forEach(select => {
        select.classList.add('form-control');
    });
    areas.forEach(textarea => {
        textarea.classList.add('form-control');
    });
}
function input_form_control_unline(form) {
    console.log(form.id);
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const areas = form.querySelectorAll('textarea');
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control-unline');
    });
    selects.forEach(select => {
        select.classList.add('form-control-unline');
    });
    areas.forEach(textarea => {
        textarea.classList.add('form-control-unline');
    });
}
function intToPixel(number = '0') {
    number = number.toString();
    if (parseInt(number) === 0)
        return '0';
    return !isNaN(parseInt(number)) ? number + 'px' : number;
}
//# sourceMappingURL=styles.js.map

// ===== File: system.js =====
"use strict";
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDark ? 'dark' : 'light';
    }
    return null;
}
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => { })
        .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    });
}
function redirectBackOrClose(default_url = '/') {
    if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
    }
    else {
        window.close();
        setTimeout(() => {
            if (!window.closed) {
                window.location.href = default_url;
            }
        }, 100);
    }
}
function getHost() {
    return window.location.protocol + '//' + window.location.host;
}
//# sourceMappingURL=system.js.map

// ===== File: tags.js =====
"use strict";
class AbbreviatedNumber extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "isShortened", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isShortened = true;
        this.originalNumber = parseFloat(this.textContent?.trim() || '0');
        this.render();
        this.addEventListener('click', this.toggle.bind(this));
        if (isNaN(this.originalNumber))
            throw new TypeError('The value must be a number');
    }
    static get observedAttributes() {
        return ['lang', 'use_comma'];
    }
    toggle() {
        this.isShortened = !this.isShortened;
        this.render();
    }
    getCurrentLang() {
        return this.getAttribute('lang') || document.documentElement.getAttribute('lang') || 'en';
    }
    formatNumber(num, lang) {
        num = parseFloat(num.toString().replace(/[^\d.-]/g, ''));
        if (isNaN(num))
            return this.originalNumber.toString();
        const useComma = this.hasAttribute('use_comma');
        const separator = useComma ? ',' : '.';
        const round = (value, digits) => {
            if (digits === 0)
                return Math.round(value);
            const factor = Math.pow(10, digits);
            return Math.round(value * factor) / factor;
        };
        const format = (value, digits) => {
            const rounded = round(value, digits);
            let str = rounded.toString();
            if (digits > 0 && str.includes('.')) {
                str = str.replace(/\.?0+$/, '');
            }
            return str.replace('.', separator);
        };
        const getFractionDigits = (value) => {
            if (value < 10)
                return 2;
            if (value < 100)
                return 1;
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
    render() {
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
    static get observedAttributes() {
        return ['active', 'completed', 'label'];
    }
    get index() {
        return Array.from(this.parentNode.children).indexOf(this) + 1;
    }
    get active() {
        return this.hasAttribute('active');
    }
    set active(force) {
        this.toggleAttribute('active', force);
    }
    get completed() {
        return this.hasAttribute('completed');
    }
    set completed(force) {
        this.toggleAttribute('completed', force);
    }
    get label() {
        return this.getAttribute('label') || "";
    }
    set label(value) {
        this.setAttribute('label', value);
    }
    reset() {
        this.active = false;
        this.completed = false;
    }
    get status() {
        if (this.active)
            return 'active';
        else if (this.completed)
            return 'complete';
        else
            return 'uncomplete';
    }
    set status(value) {
        this.reset();
        switch (value) {
            case 'complete':
                this.completed = true;
                break;
            case 'active':
                this.active = true;
                break;
            case 'uncomplete':
                break;
            default:
                throw new TypeError(`Unknown status: ${value}`);
        }
    }
    connectedCallback() {
        this.querySelector('[data-sb-generated="circle"]').textContent = this.index.toString();
        this.querySelector('[data-sb-generated="label"]').textContent = this.label;
        const parent = this.parentElement;
        const currentStep = parent.currentStep || 1;
        if (this.index === currentStep)
            this.active = true;
        else if (this.index < currentStep)
            this.completed = true;
    }
}
class Stepbar extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "_observer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <slot></slot>
        `;
    }
    static get observedAttributes() {
        return ['current'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'current') {
            this.updateSteps();
        }
    }
    connectedCallback() {
        if (!this._observer) {
            this._observer = new MutationObserver(() => this.updateSteps());
            this._observer.observe(this, { childList: true });
        }
        this.updateSteps();
    }
    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }
    updateSteps() {
        const currentStep = parseInt(this.getAttribute('current') || '1');
        const elements = Array.from(this.children).filter((el) => el.tagName === 'SB-ELEMENT');
        elements.forEach((element, index) => {
            const stepNumber = index + 1;
            element.status = 'uncomplete';
            if (stepNumber < currentStep) {
                element.status = 'complete';
            }
            else if (stepNumber === currentStep) {
                element.status = 'active';
            }
        });
    }
    get currentStep() {
        return parseInt(this.getAttribute('current') || '1');
    }
    set currentStep(step) {
        this.setAttribute('current', step.toString());
    }
}
class HTMLFile extends HTMLElement {
    constructor() {
        super();
    }
    get src() {
        return this.getAttribute('src') || '';
    }
    set src(value) {
        if (value) {
            this.setAttribute('src', value);
        }
        else {
            this.removeAttribute('src');
        }
    }
    static get observedAttributes() {
        return ['src'];
    }
    connectedCallback() {
        this.loadContent();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src' && oldValue !== newValue && this.isConnected) {
            this.loadContent();
        }
    }
    async loadContent() {
        const src = this.src;
        if (!src)
            return;
        try {
            const response = await fetch(src);
            const content = await response.text();
            this.innerHTML = content;
            await this.executeScripts();
        }
        catch (error) {
            this.innerHTML = `Ошибка загрузки: ${error.message}`;
        }
    }
    async executeScripts() {
        const scripts = this.querySelectorAll('script');
        for (const script of scripts) {
            if (script.src) {
                await this.loadExternalScript(script.src);
            }
            else {
                this.executeInlineScript(script.textContent || '');
            }
            script.remove();
        }
    }
    loadExternalScript(src) {
        return new Promise((resolve, reject) => {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.onload = resolve;
            newScript.onerror = reject;
            document.head.appendChild(newScript);
        });
    }
    executeInlineScript(code) {
        try {
            const newScript = document.createElement('script');
            newScript.textContent = code;
            document.head.appendChild(newScript);
            document.head.removeChild(newScript);
        }
        catch (error) {
            console.error('Ошибка выполнения скрипта:', error);
        }
    }
    get loaded() {
        return this.hasAttribute('data-loaded');
    }
    reload() {
        return this.loadContent();
    }
    get content() {
        return this.innerHTML;
    }
}
class ClickToCopy extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "notification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.notification = new HyperTextNotification({ backgroundColor: 'rgba(192,0,192,0.8)' });
    }
    get notificationText() {
        return this.getAttribute('text') || "Скопировано";
    }
    set notificationText(value) {
        if (value)
            this.setAttribute('text', value);
        else
            this.removeAttribute('text');
    }
    get isNotified() {
        return this.hasAttribute('notified');
    }
    set isNotified(value) {
        if (value)
            this.setAttribute('notified', '');
        else
            this.removeAttribute('notified');
    }
    connectedCallback() {
        this.addEventListener('click', () => {
            navigator.clipboard.writeText(this.textContent || '');
            if (this.isNotified)
                this.notification.show(this.notificationText);
        });
    }
}
customElements.define('sb-element', StepElement);
customElements.define('step-bar', Stepbar);
customElements.define('ab-num', AbbreviatedNumber);
customElements.define('include-html', HTMLFile);
customElements.define('click-to-copy', ClickToCopy);
//# sourceMappingURL=tags.js.map

// ===== File: url.js =====
"use strict";
function isAbsoluteUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch (e) {
        return url[0] === '/' || url[0] === '\\';
    }
}
function combineUrls(baseUrl, relativeUrl) {
    try {
        if (!baseUrl) {
            if (relativeUrl.startsWith('/'))
                return relativeUrl;
            return '/' + relativeUrl;
        }
        return new URL(relativeUrl, baseUrl).toString();
    }
    catch (error) {
        throw new Error(`Invalid URL combination: ${baseUrl}, ${relativeUrl}`);
    }
}
function getScriptSite(script) {
    return new URL(script.src).origin;
}
//# sourceMappingURL=url.js.map

// ===== File: uuid.js =====
"use strict";
function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
//# sourceMappingURL=uuid.js.map


// ===== File: input.js =====
"use strict";
function getInputCursorPosition(input) {
    const start = input.selectionStart;
    if (start == null)
        throw new Error("Incorrect input type");
    return start - 1;
}
function copyInputToClipboard(input) {
    const disabled = input.hasAttribute("disabled");
    if (disabled)
        input.removeAttribute('disabled');
    navigator.clipboard.writeText(input.value)
        .then(() => { })
        .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    })
        .finally(() => {
        if (disabled)
            input.setAttribute('disabled', '');
    });
}
function clearInput_and_addLastSymbol(input) {
    input.value = input.value[getInputCursorPosition(input)] || '';
}
function getInputLabel(input) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (!label)
        throw new Error("Label не найден. Возможно, вы не использовали атрибут for в нем");
    return label;
}
//# sourceMappingURL=input.js.map

// ===== File: link.js =====
"use strict";
function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}
//# sourceMappingURL=link.js.map

// ===== File: notifications.js =====
"use strict";
function pushNotification(title = "Уведомление", body = "Текст уведомления", icon = null) {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                if (icon)
                    new Notification(title, { body: body, icon: icon });
                else
                    new Notification(title, { body: body });
            }
        });
    }
    else {
        if (icon)
            new Notification(title, { body: body, icon: icon });
        else
            new Notification(title, { body: body });
    }
}
class HyperTextNotification {
    constructor({ bottom = '20', right = '20', backgroundColor = '#121212', color = '#ededed', padding = '15', borderRadius = '5', timeout = 3 } = {}) {
        Object.defineProperty(this, "bottom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "right", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backgroundColor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "padding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "borderRadius", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bottom = intToPixel(bottom);
        this.right = intToPixel(right);
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.padding = intToPixel(padding);
        this.borderRadius = intToPixel(borderRadius);
        this.timeout = timeout;
    }
    show(message, timeout = 0) {
        const notification = document.createElement("div");
        notification.textContent = message;
        notification.style.position = "fixed";
        notification.style.bottom = this.bottom;
        notification.style.right = this.right;
        notification.style.backgroundColor = this.backgroundColor;
        notification.style.color = this.color;
        notification.style.padding = this.padding;
        notification.style.borderRadius = this.borderRadius;
        notification.style.zIndex = "1000";
        const actualTimeout = timeout === 0 ? this.timeout : timeout;
        document.body.appendChild(notification);
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, actualTimeout * 1000);
    }
}
//# sourceMappingURL=notifications.js.map

// ===== File: string.js =====
"use strict";
function stringToBoolean(input) {
    if (input.toLowerCase() === "true")
        return true;
    if (input.toLowerCase() === "false")
        return false;
    return null;
}
//# sourceMappingURL=string.js.map

// ===== File: styles.js =====
"use strict";
function input_type_fc(input) {
    return input.type !== 'hidden' && input.type !== 'reset' && input.type !== 'checkbox' && input.type !== 'radio';
}
function input_form_control(form) {
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const areas = form.querySelectorAll('textarea');
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control');
    });
    selects.forEach(select => {
        select.classList.add('form-control');
    });
    areas.forEach(textarea => {
        textarea.classList.add('form-control');
    });
}
function input_form_control_unline(form) {
    console.log(form.id);
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    const areas = form.querySelectorAll('textarea');
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control-unline');
    });
    selects.forEach(select => {
        select.classList.add('form-control-unline');
    });
    areas.forEach(textarea => {
        textarea.classList.add('form-control-unline');
    });
}
function intToPixel(number = '0') {
    number = number.toString();
    if (parseInt(number) === 0)
        return '0';
    return !isNaN(parseInt(number)) ? number + 'px' : number;
}
//# sourceMappingURL=styles.js.map

// ===== File: system.js =====
"use strict";
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDark ? 'dark' : 'light';
    }
    return null;
}
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => { })
        .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    });
}
function redirectBackOrClose(default_url = '/') {
    if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
    }
    else {
        window.close();
        setTimeout(() => {
            if (!window.closed) {
                window.location.href = default_url;
            }
        }, 100);
    }
}
function getHost() {
    return window.location.protocol + '//' + window.location.host;
}
//# sourceMappingURL=system.js.map

// ===== File: tags.js =====
"use strict";
class AbbreviatedNumber extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "isShortened", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isShortened = true;
        this.originalNumber = parseFloat(this.textContent?.trim() || '0');
        this.render();
        this.addEventListener('click', this.toggle.bind(this));
        if (isNaN(this.originalNumber))
            throw new TypeError('The value must be a number');
    }
    static get observedAttributes() {
        return ['lang', 'use_comma'];
    }
    toggle() {
        this.isShortened = !this.isShortened;
        this.render();
    }
    getCurrentLang() {
        return this.getAttribute('lang') || document.documentElement.getAttribute('lang') || 'en';
    }
    formatNumber(num, lang) {
        num = parseFloat(num.toString().replace(/[^\d.-]/g, ''));
        if (isNaN(num))
            return this.originalNumber.toString();
        const useComma = this.hasAttribute('use_comma');
        const separator = useComma ? ',' : '.';
        const round = (value, digits) => {
            if (digits === 0)
                return Math.round(value);
            const factor = Math.pow(10, digits);
            return Math.round(value * factor) / factor;
        };
        const format = (value, digits) => {
            const rounded = round(value, digits);
            let str = rounded.toString();
            if (digits > 0 && str.includes('.')) {
                str = str.replace(/\.?0+$/, '');
            }
            return str.replace('.', separator);
        };
        const getFractionDigits = (value) => {
            if (value < 10)
                return 2;
            if (value < 100)
                return 1;
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
    render() {
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
    static get observedAttributes() {
        return ['active', 'completed', 'label'];
    }
    get index() {
        return Array.from(this.parentNode.children).indexOf(this) + 1;
    }
    get active() {
        return this.hasAttribute('active');
    }
    set active(force) {
        this.toggleAttribute('active', force);
    }
    get completed() {
        return this.hasAttribute('completed');
    }
    set completed(force) {
        this.toggleAttribute('completed', force);
    }
    get label() {
        return this.getAttribute('label') || "";
    }
    set label(value) {
        this.setAttribute('label', value);
    }
    reset() {
        this.active = false;
        this.completed = false;
    }
    get status() {
        if (this.active)
            return 'active';
        else if (this.completed)
            return 'complete';
        else
            return 'uncomplete';
    }
    set status(value) {
        this.reset();
        switch (value) {
            case 'complete':
                this.completed = true;
                break;
            case 'active':
                this.active = true;
                break;
            case 'uncomplete':
                break;
            default:
                throw new TypeError(`Unknown status: ${value}`);
        }
    }
    connectedCallback() {
        this.querySelector('[data-sb-generated="circle"]').textContent = this.index.toString();
        this.querySelector('[data-sb-generated="label"]').textContent = this.label;
        const parent = this.parentElement;
        const currentStep = parent.currentStep || 1;
        if (this.index === currentStep)
            this.active = true;
        else if (this.index < currentStep)
            this.completed = true;
    }
}
class Stepbar extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "_observer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <slot></slot>
        `;
    }
    static get observedAttributes() {
        return ['current'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'current') {
            this.updateSteps();
        }
    }
    connectedCallback() {
        if (!this._observer) {
            this._observer = new MutationObserver(() => this.updateSteps());
            this._observer.observe(this, { childList: true });
        }
        this.updateSteps();
    }
    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }
    updateSteps() {
        const currentStep = parseInt(this.getAttribute('current') || '1');
        const elements = Array.from(this.children).filter((el) => el.tagName === 'SB-ELEMENT');
        elements.forEach((element, index) => {
            const stepNumber = index + 1;
            element.status = 'uncomplete';
            if (stepNumber < currentStep) {
                element.status = 'complete';
            }
            else if (stepNumber === currentStep) {
                element.status = 'active';
            }
        });
    }
    get currentStep() {
        return parseInt(this.getAttribute('current') || '1');
    }
    set currentStep(step) {
        this.setAttribute('current', step.toString());
    }
}
class HTMLFile extends HTMLElement {
    constructor() {
        super();
    }
    get src() {
        return this.getAttribute('src') || '';
    }
    set src(value) {
        if (value) {
            this.setAttribute('src', value);
        }
        else {
            this.removeAttribute('src');
        }
    }
    static get observedAttributes() {
        return ['src'];
    }
    connectedCallback() {
        this.loadContent();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src' && oldValue !== newValue && this.isConnected) {
            this.loadContent();
        }
    }
    async loadContent() {
        const src = this.src;
        if (!src)
            return;
        try {
            const response = await fetch(src);
            const content = await response.text();
            this.innerHTML = content;
            await this.executeScripts();
        }
        catch (error) {
            this.innerHTML = `Ошибка загрузки: ${error.message}`;
        }
    }
    async executeScripts() {
        const scripts = this.querySelectorAll('script');
        for (const script of scripts) {
            if (script.src) {
                await this.loadExternalScript(script.src);
            }
            else {
                this.executeInlineScript(script.textContent || '');
            }
            script.remove();
        }
    }
    loadExternalScript(src) {
        return new Promise((resolve, reject) => {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.onload = resolve;
            newScript.onerror = reject;
            document.head.appendChild(newScript);
        });
    }
    executeInlineScript(code) {
        try {
            const newScript = document.createElement('script');
            newScript.textContent = code;
            document.head.appendChild(newScript);
            document.head.removeChild(newScript);
        }
        catch (error) {
            console.error('Ошибка выполнения скрипта:', error);
        }
    }
    get loaded() {
        return this.hasAttribute('data-loaded');
    }
    reload() {
        return this.loadContent();
    }
    get content() {
        return this.innerHTML;
    }
}
class ClickToCopy extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "notification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.notification = new HyperTextNotification({ backgroundColor: 'rgba(192,0,192,0.8)' });
    }
    get notificationText() {
        return this.getAttribute('text') || "Скопировано";
    }
    set notificationText(value) {
        if (value)
            this.setAttribute('text', value);
        else
            this.removeAttribute('text');
    }
    get isNotified() {
        return this.hasAttribute('notified');
    }
    set isNotified(value) {
        if (value)
            this.setAttribute('notified', '');
        else
            this.removeAttribute('notified');
    }
    connectedCallback() {
        this.addEventListener('click', () => {
            navigator.clipboard.writeText(this.textContent || '');
            if (this.isNotified)
                this.notification.show(this.notificationText);
        });
    }
}
customElements.define('sb-element', StepElement);
customElements.define('step-bar', Stepbar);
customElements.define('ab-num', AbbreviatedNumber);
customElements.define('include-html', HTMLFile);
customElements.define('click-to-copy', ClickToCopy);
//# sourceMappingURL=tags.js.map

// ===== File: url.js =====
"use strict";
function isAbsoluteUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch (e) {
        return url[0] === '/' || url[0] === '\\';
    }
}
function combineUrls(baseUrl, relativeUrl) {
    try {
        if (!baseUrl) {
            if (relativeUrl.startsWith('/'))
                return relativeUrl;
            return '/' + relativeUrl;
        }
        return new URL(relativeUrl, baseUrl).toString();
    }
    catch (error) {
        throw new Error(`Invalid URL combination: ${baseUrl}, ${relativeUrl}`);
    }
}
function getScriptSite(script) {
    return new URL(script.src).origin;
}
//# sourceMappingURL=url.js.map

// ===== File: uuid.js =====
"use strict";
function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
//# sourceMappingURL=uuid.js.map

