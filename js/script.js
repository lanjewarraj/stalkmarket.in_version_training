//FAQ
let Headings = document.querySelectorAll('.faq-title');
let Contents = document.querySelectorAll('.faq-content');

Headings.forEach(function (heading, index) {
    heading.addEventListener("click", function () {
        // Toggle current content
        let content = heading.parentElement.querySelector('.faq-content');
        if (content.classList.contains('active')) {
            content.classList.remove('active');
        } else {
            // Close all other contents
            Contents.forEach(function (otherContent) {
                otherContent.classList.remove('active');
            });
            // Open clicked content
            content.classList.add('active');
        }
    });
});