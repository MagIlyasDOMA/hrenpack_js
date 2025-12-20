/*
* hrenpack_js 3.1.4
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

function input_type_fc(input: HTMLInputElement): boolean {
    return input.type !== 'hidden' && input.type !== 'reset' && input.type !== 'checkbox' && input.type !== 'radio'
}


function input_form_control(form: HTMLFormElement): void {
    const inputs = form.querySelectorAll('input')
    const selects = form.querySelectorAll('select')
    const areas = form.querySelectorAll('textarea')
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control')
    })
    selects.forEach(select => {
        select.classList.add('form-control')
    })
    areas.forEach(textarea => {
        textarea.classList.add('form-control')
    })
}

function input_form_control_unline(form: HTMLFormElement): void {
    console.log(form.id)
    const inputs = form.querySelectorAll('input')
    const selects = form.querySelectorAll('select')
    const areas = form.querySelectorAll('textarea')
    inputs.forEach(input => {
        if (input_type_fc(input))
            input.classList.add('form-control-unline')
    })
    selects.forEach(select => {
        select.classList.add('form-control-unline')
    })
    areas.forEach(textarea => {
        textarea.classList.add('form-control-unline')
    })
}


function intToPixel(number: NumStr = '0'): string {
    number = number.toString();
    if (parseInt(number) === 0)
        return '0';
    return !isNaN(parseInt(number)) ? number + 'px' : number;
}

/*export {
    input_type_fc,
    input_form_control,
    input_form_control_unline,
    intToPixel,
}*/
