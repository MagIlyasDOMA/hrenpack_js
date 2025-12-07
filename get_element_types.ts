function button_submit(parent: HTMLElement): HTMLButtonElement | null {
    const buttons: NodeListOf<HTMLButtonElement> = parent.querySelectorAll('button');
    let submit = null

    buttons.forEach(button => {
        if (button.type === 'submit')
            submit = button;
    });
    return submit
}