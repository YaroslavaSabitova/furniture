export default function () {
    const catalogBtn = document.querySelector('.js_catalog_btn');
    const catalogHidden = document.querySelector('.js_catalog_hidden');

    catalogBtn.onclick = () => {
        catalogHidden.classList.remove('visually-hidden');
        catalogBtn.classList.add('visually-hidden');
    };
}
