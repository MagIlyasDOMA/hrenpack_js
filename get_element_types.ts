/*
* hrenpack_js 3.1.5
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

function button_submit(parent: HTMLElement): HTMLButtonElement | null {
    const buttons: NodeListOf<HTMLButtonElement> = parent.querySelectorAll('button');
    let submit = null

    buttons.forEach(button => {
        if (button.type === 'submit')
            submit = button;
    });
    return submit
}

// export {button_submit}
