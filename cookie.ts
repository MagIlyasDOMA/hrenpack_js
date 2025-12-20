/*
* hrenpack_js 3.1.4
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/



function getCookie(name: string): NullStr {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';'); // разбиваем строку cookie на массив
    cookiesArray.forEach(cookie => {
        cookie = cookie.trim()
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length); // возвращаем значение cookie
        }
    })
    return null; // если cookie не найден, возвращаем null
}


function setCookie(name: string, value: string, days: NullNum = null, path = '/'): void {
    let expires: string;
    if (!days) {
        expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT'; // форматируем дату
    } else {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // преобразуем дни в миллисекунды
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=${path}`; // установка cookie
}


function hasCookie(name: string): boolean {
    return getCookie(name) != null;
}

// export { getCookie, setCookie, hasCookie };
