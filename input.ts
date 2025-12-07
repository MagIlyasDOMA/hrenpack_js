function getInputCursorPosition(input: HTMLInputElement): number {
    const start = input.selectionStart
    if (start == null)
        throw new Error("Incorrect input type")
    return start - 1
}


function copyInputToClipboard(input: HTMLInputElement): void {
    const disabled: boolean = input.hasAttribute("disabled");

    // Временно снимаем атрибут disabled
    if (disabled)
        input.removeAttribute('disabled');

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(input.value)
        .then(() => {})
        .catch(err => {
            console.error('Не удалось скопировать текст: ', err);
        })
        .finally(() => {
            if (disabled)
                input.setAttribute('disabled', '');
        });
}


function clearInput_and_addLastSymbol(input: HTMLInputElement): void {
    input.value = input.value[getInputCursorPosition(input)] || '';
}


function getInputLabel(input: HTMLInputElement): HTMLLabelElement {
    const label: HTMLLabelElement | null = document.querySelector(`label[for="${input.id}"]`)
    if (!label)
        throw new Error("Label не найден. Возможно, вы не использовали атрибут for в нем")
    return label
}
