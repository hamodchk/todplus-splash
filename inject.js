(() => {
    const setupFocusableElements = () => {
        const elements = Array.from(document.querySelectorAll('a, button, input, [tabindex], div[role="button"]'));
        elements.forEach((el, index) => {
            el.setAttribute('data-focus-index', index);
            el.style.outline = 'none';
            el.style.border = '2px solid transparent';
            el.style.transition = 'border 0.2s, background-color 0.2s';
            el.style.backgroundColor = 'transparent';

            el.addEventListener('focus', () => {
                el.style.border = '2px solid red';
                el.style.backgroundColor = 'rgba(255, 0, 0, 0.25)';
                el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            });

            el.addEventListener('blur', () => {
                el.style.border = '2px solid transparent';
                el.style.backgroundColor = 'transparent';
            });
        });

        if (elements.length > 0) {
            elements[0].focus();
        }
        return elements.length;
    };

    const observer = new MutationObserver(() => {
        setupFocusableElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return setupFocusableElements();
})();
