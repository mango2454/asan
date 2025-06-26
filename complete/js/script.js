document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.subject-container');
            const boxes = document.querySelectorAll('.subject-box');

            function isFullyVisible(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
            }

            function checkAndAnimate() {
                if (isFullyVisible(container)) {
                    boxes.forEach(box => box.classList.add('visible'));
                } else {
                    boxes.forEach(box => box.classList.remove('visible'));
                }
            }

            window.addEventListener('scroll', checkAndAnimate);
            window.addEventListener('resize', checkAndAnimate);
            checkAndAnimate();
        });