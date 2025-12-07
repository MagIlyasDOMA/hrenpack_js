function isAbsoluteUrl(url: string): boolean {
    try {
        new URL(url); // Попытка создать объект URL
        return true; // Если успешно, это абсолютный URL
    } catch (e) {
        return url[0] === '/' || url[0] === '\\'; // Если ошибка, это относительный URL
    }
}


function combineUrls(baseUrl: string, relativeUrl: string): string {
    try {
        if (!baseUrl) {
            if (relativeUrl.startsWith('/'))
                return relativeUrl;
            return '/' + relativeUrl;
        }
        return new URL(relativeUrl, baseUrl).toString();
    } catch (error) {
        throw new Error(`Invalid URL combination: ${baseUrl}, ${relativeUrl}`);
    }
}


function getScriptSite(script: HTMLScriptElement): string {
    return new URL(script.src).origin;
}
