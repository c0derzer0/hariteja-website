// Force LaTeX font on all elements after page load
document.addEventListener('DOMContentLoaded', function() {
    // Add style tag with highest specificity
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,300;0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400&display=swap');

        * {
            font-family: 'Literata', 'Georgia', serif !important;
        }

        body, body *,
        .content, .content *,
        article, article *,
        .post, .post *,
        main, main * {
            font-family: 'Literata', 'Georgia', serif !important;
        }

        code, pre, .highlight, .highlight * {
            font-family: 'Courier New', monospace !important;
        }
    `;
    document.head.appendChild(style);

    // Force style on all elements directly
    const elements = document.querySelectorAll('body, h1, h2, h3, h4, h5, h6, p, div, span, a, li, article');
    elements.forEach(el => {
        if (!el.closest('code') && !el.closest('pre')) {
            el.style.fontFamily = "'Literata', 'Georgia', serif";
        }
    });
});