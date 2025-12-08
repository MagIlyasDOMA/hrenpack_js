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
export { escapeHTML, togglePassword, strFormat, elementToHyperlink, password_format, element_to_div, element_toHTMLText, isTextWrapped, get_tagName, notArrayEmpty };
//# sourceMappingURL=html.d.ts.map