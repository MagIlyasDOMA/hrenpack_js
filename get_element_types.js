/*
* hrenpack_js 3.1.2
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

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