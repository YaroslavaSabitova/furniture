export default function () {
    const screenHeight = document.documentElement.clientHeight;
    const catalogItems = document.querySelectorAll('.js_catalog_item');
    const conditionsItems = document.querySelectorAll('.js_conditions_item');

    function scrolling() {
        for (let i = 0; i < catalogItems.length; i++) {
            const listItem = catalogItems[i];

            if (isPartiallyVisible(listItem)) {
                listItem.classList.add('active');
            }
            // else {
            //     listItem.classList.remove('active');
            // }
        }

        for (let i = 0; i < conditionsItems.length; i++) {
            const condItem = conditionsItems[i];

            if (isPartiallyVisible(condItem)) {
                condItem.classList.add('active');
            } else {
                condItem.classList.remove('active');
            }
        }
    }

    function isPartiallyVisible(element) {
        const elementBoundary = element.getBoundingClientRect();
        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;
        const height = elementBoundary.height;

        return top + height >= 0 && height + screenHeight > bottom;
    }

    window.addEventListener('scroll', scrolling);
}
