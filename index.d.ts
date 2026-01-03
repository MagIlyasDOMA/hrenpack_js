// ===== File: arraywork.d.ts =====
declare function arrayIsEmpty(arr: any[]): boolean;
declare function arraysIsEqual(array1: any[], array2: any[], strict?: boolean): boolean;
//# sourceMappingURL=arraywork.d.ts.map

// ===== File: auto.d.ts =====
declare const stylesRoot: CSSStyleDeclaration;
//# sourceMappingURL=auto.d.ts.map

// ===== File: classes.d.ts =====
declare class ClickableLinksFactory {
    private readonly urlRegex;
    private walk;
    private get_anchor;
    private get_clickToCopy;
    clickableLinks(element: HTMLElement): void;
    clickToCopyLinks(element: HTMLElement): void;
    get generatedElements(): NodeListOf<HTMLElement>;
}
declare class GETParamsManager {
    private params;
    constructor();
    get<T = string>(key: string, defaultValue?: T): T | string | null;
    set(key: string, value: string | number | boolean): void;
    delete(key: string): void;
    all(): Record<string, string>;
    clear(): void;
    private updateURL;
}
//# sourceMappingURL=classes.d.ts.map

// ===== File: compiler.d.ts =====
declare function downloadTextAsFile(filename: string, text: string): void;
//# sourceMappingURL=compiler.d.ts.map

// ===== File: cookie.d.ts =====
declare function getCookie(name: string): NullStr;
declare function setCookie(name: string, value: string, days?: NullNum, path?: string): void;
declare function hasCookie(name: string): boolean;
//# sourceMappingURL=cookie.d.ts.map

// ===== File: datework.d.ts =====
declare class datetime {
    private _year;
    private _month;
    private _days;
    private _hours;
    private _minutes;
    private _seconds;
    private date;
    constructor(_year: number, _month: number, _days: number, _hours: number, _minutes: number, _seconds: number);
    private static newObject;
    static now(): datetime;
    static fromTimestamp(timestamp: number): datetime;
    get year(): number;
    get month(): number;
    get days(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    set year(year: number);
    set month(month: number);
    set days(days: number);
    set hours(hours: number);
    set minutes(minutes: number);
    set seconds(seconds: number);
    timestamp(): number;
}
//# sourceMappingURL=datework.d.ts.map

// ===== File: exceptions.d.ts =====
declare class NotAuthorizedError extends Error {
    constructor();
}
//# sourceMappingURL=exceptions.d.ts.map

// ===== File: get_element_types.d.ts =====
declare function button_submit(parent: HTMLElement): HTMLButtonElement | null;
//# sourceMappingURL=get_element_types.d.ts.map

// ===== File: html.d.ts =====
declare const escapeChars: StringDict;
declare function togglePassword(passwordInput: HTMLInputElement): void;
declare function isTextWrapped(element: HTMLElement): boolean;
declare function notArrayEmpty(array: any[]): boolean;
declare function get_tagName(element: HTMLElement): string;
declare function element_toHTMLText(element: HTMLElement): string;
declare function element_to_div(element: HTMLElement): HTMLDivElement;
declare function password_format(shownPasswordHTML: string, hiddenPasswordHTML: string): void;
declare function escapeHTML(html: string): string;
declare function strFormat(template: string, ...args: any[]): string;
declare function elementToHyperlink(element: HTMLElement, href: string, cursorPointer?: boolean, preventDefault?: boolean): HTMLElement;
//# sourceMappingURL=html.d.ts.map

// ===== File: index.d.ts =====
// ===== File: arraywork.d.ts =====
declare function arrayIsEmpty(arr: any[]): boolean;
declare function arraysIsEqual(array1: any[], array2: any[], strict?: boolean): boolean;
//# sourceMappingURL=arraywork.d.ts.map

// ===== File: auto.d.ts =====
declare const stylesRoot: CSSStyleDeclaration;
//# sourceMappingURL=auto.d.ts.map

// ===== File: classes.d.ts =====
declare class ClickableLinksFactory {
    private readonly urlRegex;
    private walk;
    private get_anchor;
    private get_clickToCopy;
    clickableLinks(element: HTMLElement): void;
    clickToCopyLinks(element: HTMLElement): void;
    get generatedElements(): NodeListOf<HTMLElement>;
}
declare class GETParamsManager {
    private params;
    constructor();
    get<T = string>(key: string, defaultValue?: T): T | string | null;
    set(key: string, value: string | number | boolean): void;
    delete(key: string): void;
    all(): Record<string, string>;
    clear(): void;
    private updateURL;
}
//# sourceMappingURL=classes.d.ts.map

// ===== File: compiler.d.ts =====
declare function downloadTextAsFile(filename: string, text: string): void;
//# sourceMappingURL=compiler.d.ts.map

// ===== File: cookie.d.ts =====
declare function getCookie(name: string): NullStr;
declare function setCookie(name: string, value: string, days?: NullNum, path?: string): void;
declare function hasCookie(name: string): boolean;
//# sourceMappingURL=cookie.d.ts.map

// ===== File: datework.d.ts =====
declare class datetime {
    private _year;
    private _month;
    private _days;
    private _hours;
    private _minutes;
    private _seconds;
    private date;
    constructor(_year: number, _month: number, _days: number, _hours: number, _minutes: number, _seconds: number);
    private static newObject;
    static now(): datetime;
    static fromTimestamp(timestamp: number): datetime;
    get year(): number;
    get month(): number;
    get days(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    set year(year: number);
    set month(month: number);
    set days(days: number);
    set hours(hours: number);
    set minutes(minutes: number);
    set seconds(seconds: number);
    timestamp(): number;
}
//# sourceMappingURL=datework.d.ts.map

// ===== File: exceptions.d.ts =====
declare class NotAuthorizedError extends Error {
    constructor();
}
//# sourceMappingURL=exceptions.d.ts.map

// ===== File: get_element_types.d.ts =====
declare function button_submit(parent: HTMLElement): HTMLButtonElement | null;
//# sourceMappingURL=get_element_types.d.ts.map

// ===== File: html.d.ts =====
declare const escapeChars: StringDict;
declare function togglePassword(passwordInput: HTMLInputElement): void;
declare function isTextWrapped(element: HTMLElement): boolean;
declare function notArrayEmpty(array: any[]): boolean;
declare function get_tagName(element: HTMLElement): string;
declare function element_toHTMLText(element: HTMLElement): string;
declare function element_to_div(element: HTMLElement): HTMLDivElement;
declare function password_format(shownPasswordHTML: string, hiddenPasswordHTML: string): void;
declare function escapeHTML(html: string): string;
declare function strFormat(template: string, ...args: any[]): string;
declare function elementToHyperlink(element: HTMLElement, href: string, cursorPointer?: boolean, preventDefault?: boolean): HTMLElement;
//# sourceMappingURL=html.d.ts.map

// ===== File: index.d.ts =====
/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

// @ts-nocheck

// ===== File: arraywork.d.ts =====
declare function arrayIsEmpty(arr: any[]): boolean;
declare function arraysIsEqual(array1: any[], array2: any[], strict?: boolean): boolean;
//# sourceMappingURL=arraywork.d.ts.map

// ===== File: auto.d.ts =====
declare const stylesRoot: CSSStyleDeclaration;
//# sourceMappingURL=auto.d.ts.map

// ===== File: classes.d.ts =====
declare class ClickableLinksFactory {
    private readonly urlRegex;
    private walk;
    private get_anchor;
    private get_clickToCopy;
    clickableLinks(element: HTMLElement): void;
    clickToCopyLinks(element: HTMLElement): void;
    get generatedElements(): NodeListOf<HTMLElement>;
}
declare class GETParamsManager {
    private params;
    constructor();
    get<T = string>(key: string, defaultValue?: T): T | string | null;
    set(key: string, value: string | number | boolean): void;
    delete(key: string): void;
    all(): Record<string, string>;
    clear(): void;
    private updateURL;
}
//# sourceMappingURL=classes.d.ts.map

// ===== File: compiler.d.ts =====
declare function downloadTextAsFile(filename: string, text: string): void;
//# sourceMappingURL=compiler.d.ts.map

// ===== File: cookie.d.ts =====
declare function getCookie(name: string): NullStr;
declare function setCookie(name: string, value: string, days?: NullNum, path?: string): void;
declare function hasCookie(name: string): boolean;
//# sourceMappingURL=cookie.d.ts.map

// ===== File: exceptions.d.ts =====
declare class NotAuthorizedError extends Error {
    constructor();
}
//# sourceMappingURL=exceptions.d.ts.map

// ===== File: get_element_types.d.ts =====
declare function button_submit(parent: HTMLElement): HTMLButtonElement | null;
//# sourceMappingURL=get_element_types.d.ts.map

// ===== File: html.d.ts =====
declare const escapeChars: StringDict;
declare function togglePassword(passwordInput: HTMLInputElement): void;
declare function isTextWrapped(element: HTMLElement): boolean;
declare function notArrayEmpty(array: any[]): boolean;
declare function get_tagName(element: HTMLElement): string;
declare function element_toHTMLText(element: HTMLElement): string;
declare function element_to_div(element: HTMLElement): HTMLDivElement;
declare function password_format(shownPasswordHTML: string, hiddenPasswordHTML: string): void;
declare function escapeHTML(html: string): string;
declare function strFormat(template: string, ...args: any[]): string;
declare function elementToHyperlink(element: HTMLElement, href: string, cursorPointer?: boolean, preventDefault?: boolean): HTMLElement;
//# sourceMappingURL=html.d.ts.map

// ===== File: input.d.ts =====
declare function getInputCursorPosition(input: HTMLInputElement): number;
declare function copyInputToClipboard(input: HTMLInputElement): void;
declare function clearInput_and_addLastSymbol(input: HTMLInputElement): void;
declare function getInputLabel(input: HTMLInputElement): HTMLLabelElement;
//# sourceMappingURL=input.d.ts.map

// ===== File: link.d.ts =====
declare function loadCSS(href: string): void;
//# sourceMappingURL=link.d.ts.map

// ===== File: notifications.d.ts =====
declare function pushNotification(title?: string, body?: string, icon?: NullStr): void;
declare class HyperTextNotification {
    bottom: string;
    right: string;
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    timeout: number;
    constructor({ bottom, right, backgroundColor, color, padding, borderRadius, timeout }?: {
        bottom?: string | undefined;
        right?: string | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        padding?: string | undefined;
        borderRadius?: string | undefined;
        timeout?: number | undefined;
    });
    show(message: string, timeout?: number): void;
}
//# sourceMappingURL=notifications.d.ts.map

// ===== File: styles.d.ts =====
declare function input_type_fc(input: HTMLInputElement): boolean;
declare function input_form_control(form: HTMLFormElement): void;
declare function input_form_control_unline(form: HTMLFormElement): void;
declare function intToPixel(number?: NumStr): string;
//# sourceMappingURL=styles.d.ts.map

// ===== File: system.d.ts =====
declare function getSystemTheme(): NullStr;
declare function copyTextToClipboard(text: string): void;
declare function redirectBackOrClose(default_url?: string): void;
declare function getHost(): string;
//# sourceMappingURL=system.d.ts.map

// ===== File: tags.d.ts =====
type StepElementStatus = 'uncomplete' | 'active' | 'complete';
interface StepbarElement extends HTMLElement {
    currentStep: number;
}
declare class AbbreviatedNumber extends HTMLElement {
    isShortened: boolean;
    originalNumber: number;
    constructor();
    static get observedAttributes(): string[];
    private toggle;
    private getCurrentLang;
    private formatNumber;
    private render;
}
declare class StepElement extends HTMLElement {
    constructor();
    static get observedAttributes(): string[];
    get index(): number;
    private get active();
    private set active(value);
    private get completed();
    private set completed(value);
    get label(): string;
    set label(value: string);
    private reset;
    get status(): StepElementStatus;
    set status(value: StepElementStatus);
    connectedCallback(): void;
}
declare class Stepbar extends HTMLElement {
    private _observer;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateSteps;
    get currentStep(): number;
    set currentStep(step: number);
}
declare class HTMLFile extends HTMLElement {
    constructor();
    get src(): string;
    set src(value: string);
    static get observedAttributes(): string[];
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private loadContent;
    private executeScripts;
    private loadExternalScript;
    private executeInlineScript;
    private get loaded();
    reload(): Promise<void>;
    get content(): string;
}
declare class ClickToCopy extends HTMLElement {
    private notification;
    constructor();
    get notificationText(): string;
    set notificationText(value: string);
    get isNotified(): boolean;
    set isNotified(value: boolean);
    connectedCallback(): void;
}
//# sourceMappingURL=tags.d.ts.map

// ===== File: types.d.ts =====
type NullStr = string | null;
type NullNum = number | null;
type Dict = {
    [key: string]: any;
};
type StringDict = {
    [key: string]: string;
};
type NumStr = number | string;
//# sourceMappingURL=types.d.ts.map

// ===== File: url.d.ts =====
declare function isAbsoluteUrl(url: string): boolean;
declare function combineUrls(baseUrl: string, relativeUrl: string): string;
declare function getScriptSite(script: HTMLScriptElement): string;
//# sourceMappingURL=url.d.ts.map

// ===== File: uuid.d.ts =====
declare function generateUUIDv4(): string;
//# sourceMappingURL=uuid.d.ts.map


// ===== File: input.d.ts =====
declare function getInputCursorPosition(input: HTMLInputElement): number;
declare function copyInputToClipboard(input: HTMLInputElement): void;
declare function clearInput_and_addLastSymbol(input: HTMLInputElement): void;
declare function getInputLabel(input: HTMLInputElement): HTMLLabelElement;
//# sourceMappingURL=input.d.ts.map

// ===== File: link.d.ts =====
declare function loadCSS(href: string): void;
//# sourceMappingURL=link.d.ts.map

// ===== File: notifications.d.ts =====
declare function pushNotification(title?: string, body?: string, icon?: NullStr): void;
declare class HyperTextNotification {
    bottom: string;
    right: string;
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    timeout: number;
    constructor({ bottom, right, backgroundColor, color, padding, borderRadius, timeout }?: {
        bottom?: string | undefined;
        right?: string | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        padding?: string | undefined;
        borderRadius?: string | undefined;
        timeout?: number | undefined;
    });
    show(message: string, timeout?: number): void;
}
//# sourceMappingURL=notifications.d.ts.map

// ===== File: string.d.ts =====
declare function stringToBoolean(input: string): NullBool;
//# sourceMappingURL=string.d.ts.map

// ===== File: styles.d.ts =====
declare function input_type_fc(input: HTMLInputElement): boolean;
declare function input_form_control(form: HTMLFormElement): void;
declare function input_form_control_unline(form: HTMLFormElement): void;
declare function intToPixel(number?: NumStr): string;
//# sourceMappingURL=styles.d.ts.map

// ===== File: system.d.ts =====
declare function getSystemTheme(): NullStr;
declare function copyTextToClipboard(text: string): void;
declare function redirectBackOrClose(default_url?: string): void;
declare function getHost(): string;
//# sourceMappingURL=system.d.ts.map

// ===== File: tags.d.ts =====
type StepElementStatus = 'uncomplete' | 'active' | 'complete';
interface StepbarElement extends HTMLElement {
    currentStep: number;
}
declare class AbbreviatedNumber extends HTMLElement {
    isShortened: boolean;
    originalNumber: number;
    constructor();
    static get observedAttributes(): string[];
    private toggle;
    private getCurrentLang;
    private formatNumber;
    private render;
}
declare class StepElement extends HTMLElement {
    constructor();
    static get observedAttributes(): string[];
    get index(): number;
    private get active();
    private set active(value);
    private get completed();
    private set completed(value);
    get label(): string;
    set label(value: string);
    private reset;
    get status(): StepElementStatus;
    set status(value: StepElementStatus);
    connectedCallback(): void;
}
declare class Stepbar extends HTMLElement {
    private _observer;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateSteps;
    get currentStep(): number;
    set currentStep(step: number);
}
declare class HTMLFile extends HTMLElement {
    constructor();
    get src(): string;
    set src(value: string);
    static get observedAttributes(): string[];
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private loadContent;
    private executeScripts;
    private loadExternalScript;
    private executeInlineScript;
    private get loaded();
    reload(): Promise<void>;
    get content(): string;
}
declare class ClickToCopy extends HTMLElement {
    private notification;
    constructor();
    get notificationText(): string;
    set notificationText(value: string);
    get isNotified(): boolean;
    set isNotified(value: boolean);
    connectedCallback(): void;
}
//# sourceMappingURL=tags.d.ts.map

// ===== File: types.d.ts =====
/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

type NullStr = string | null;
type NullNum = number | null;
type Dict = {
    [key: string]: any;
};
type StringDict = {
    [key: string]: string;
};
type NumStr = number | string;
type NullBool = boolean | null;
//# sourceMappingURL=types.d.ts.map

// ===== File: url.d.ts =====
declare function isAbsoluteUrl(url: string): boolean;
declare function combineUrls(baseUrl: string, relativeUrl: string): string;
declare function getScriptSite(script: HTMLScriptElement): string;
//# sourceMappingURL=url.d.ts.map

// ===== File: uuid.d.ts =====
declare function generateUUIDv4(): string;
//# sourceMappingURL=uuid.d.ts.map


// ===== File: input.d.ts =====
declare function getInputCursorPosition(input: HTMLInputElement): number;
declare function copyInputToClipboard(input: HTMLInputElement): void;
declare function clearInput_and_addLastSymbol(input: HTMLInputElement): void;
declare function getInputLabel(input: HTMLInputElement): HTMLLabelElement;
//# sourceMappingURL=input.d.ts.map

// ===== File: link.d.ts =====
declare function loadCSS(href: string): void;
//# sourceMappingURL=link.d.ts.map

// ===== File: notifications.d.ts =====
declare function pushNotification(title?: string, body?: string, icon?: NullStr): void;
declare class HyperTextNotification {
    bottom: string;
    right: string;
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    timeout: number;
    constructor({ bottom, right, backgroundColor, color, padding, borderRadius, timeout }?: {
        bottom?: string | undefined;
        right?: string | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        padding?: string | undefined;
        borderRadius?: string | undefined;
        timeout?: number | undefined;
    });
    show(message: string, timeout?: number): void;
}
//# sourceMappingURL=notifications.d.ts.map

// ===== File: string.d.ts =====
declare function stringToBoolean(input: string): NullBool;
//# sourceMappingURL=string.d.ts.map

// ===== File: styles.d.ts =====
declare function input_type_fc(input: HTMLInputElement): boolean;
declare function input_form_control(form: HTMLFormElement): void;
declare function input_form_control_unline(form: HTMLFormElement): void;
declare function intToPixel(number?: NumStr): string;
//# sourceMappingURL=styles.d.ts.map

// ===== File: system.d.ts =====
declare function getSystemTheme(): NullStr;
declare function copyTextToClipboard(text: string): void;
declare function redirectBackOrClose(default_url?: string): void;
declare function getHost(): string;
//# sourceMappingURL=system.d.ts.map

// ===== File: tags.d.ts =====
type StepElementStatus = 'uncomplete' | 'active' | 'complete';
interface StepbarElement extends HTMLElement {
    currentStep: number;
}
declare class AbbreviatedNumber extends HTMLElement {
    isShortened: boolean;
    originalNumber: number;
    constructor();
    static get observedAttributes(): string[];
    private toggle;
    private getCurrentLang;
    private formatNumber;
    private render;
}
declare class StepElement extends HTMLElement {
    constructor();
    static get observedAttributes(): string[];
    get index(): number;
    private get active();
    private set active(value);
    private get completed();
    private set completed(value);
    get label(): string;
    set label(value: string);
    private reset;
    get status(): StepElementStatus;
    set status(value: StepElementStatus);
    connectedCallback(): void;
}
declare class Stepbar extends HTMLElement {
    private _observer;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateSteps;
    get currentStep(): number;
    set currentStep(step: number);
}
declare class HTMLFile extends HTMLElement {
    constructor();
    get src(): string;
    set src(value: string);
    static get observedAttributes(): string[];
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private loadContent;
    private executeScripts;
    private loadExternalScript;
    private executeInlineScript;
    private get loaded();
    reload(): Promise<void>;
    get content(): string;
}
declare class ClickToCopy extends HTMLElement {
    private notification;
    constructor();
    get notificationText(): string;
    set notificationText(value: string);
    get isNotified(): boolean;
    set isNotified(value: boolean);
    connectedCallback(): void;
}
//# sourceMappingURL=tags.d.ts.map

// ===== File: types.d.ts =====
/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

type NullStr = string | null;
type NullNum = number | null;
type Dict = {
    [key: string]: any;
};
type StringDict = {
    [key: string]: string;
};
type NumStr = number | string;
type NullBool = boolean | null;

type OnOffType = 'on' | 'off';
//# sourceMappingURL=types.d.ts.map

// ===== File: url.d.ts =====
declare function isAbsoluteUrl(url: string): boolean;
declare function combineUrls(baseUrl: string, relativeUrl: string): string;
declare function getScriptSite(script: HTMLScriptElement): string;
//# sourceMappingURL=url.d.ts.map

// ===== File: uuid.d.ts =====
declare function generateUUIDv4(): string;
//# sourceMappingURL=uuid.d.ts.map

