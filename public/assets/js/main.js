import Animate from '/assets/js/controllers/Rectangle.js';

const elements = document.getElementsByClassName('fold-under');
const anim = new Animate(elements);
anim.setColors();

document.addEventListener("DOMContentLoaded", function() {

    anim.showElements();
        window.addEventListener('scroll', function () {
            anim.showElements();
        });
});

