/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

// import {intToPixel} from "./styles";

function pushNotification(title: string = "Уведомление", body: string = "Текст уведомления",
                          icon: NullStr = null): void {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                if (icon)
                    new Notification(title, {body: body, icon: icon});
                else
                    new Notification(title, {body: body});
            }
        });
    } else {
        if (icon)
            new Notification(title, {body: body, icon: icon});
        else
            new Notification(title, {body: body});
    }
}


class HyperTextNotification {
    bottom: string;
    right: string;
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    timeout: number;

    constructor({
                    bottom = '20',
                    right = '20',
                    backgroundColor = '#121212',
                    color = '#ededed',
                    padding = '15',
                    borderRadius = '5',
                    timeout = 3
                } = {}) {
        this.bottom = intToPixel(bottom);
        this.right = intToPixel(right);
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.padding = intToPixel(padding);
        this.borderRadius = intToPixel(borderRadius);
        this.timeout = timeout;
    }

    show(message: string, timeout: number = 0) {
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

/*export {
    HyperTextNotification,
    pushNotification
}*/
