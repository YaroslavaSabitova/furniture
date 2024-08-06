export default function () {
    const buttons = document.querySelectorAll('.js_btn_rounded');

    buttons.forEach(button => {
        button.onclick = () => {
            button.classList.toggle('disabled');
        };
    });

    document.body.addEventListener('click', event => {
        if (!event.target.closest('.js_btn_rounded')) {
            buttons.forEach(button => {
                if (button.classList.contains('disabled')) {
                    button.classList.remove('disabled');
                }
            });
        }
    });
}
