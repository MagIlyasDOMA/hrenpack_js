/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

function getSystemTheme(): NullStr {
    // Проверяем поддержку matchMedia и prefers-color-scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDark ? 'dark' : 'light';
    }
    return null;
}


function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text)
        .then(() => {})
        .catch(err => {
            console.error('Не удалось скопировать текст: ', err);
        });
}


function redirectBackOrClose(default_url: string = '/'): void {
    // Проверяем, есть ли предыдущая страница в истории
    if (document.referrer && document.referrer !== window.location.href) {
        // Возвращаемся на предыдущую страницу
        window.history.back();
    } else {
        // Пытаемся закрыть вкладку
        window.close();

        // Если закрытие не сработало (браузер заблокировал), перенаправляем на домашнюю страницу
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

/*export {
    getSystemTheme,
    copyTextToClipboard,
    redirectBackOrClose,
    getHost
}*/
