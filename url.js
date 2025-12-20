/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

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