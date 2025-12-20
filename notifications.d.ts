/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

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