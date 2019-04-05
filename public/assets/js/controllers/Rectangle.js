export default class Animate {
    constructor(elements) {
        this.elements = elements;
    }
    // Getter
    randomColor() {
        var self = this;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;


    }

    setColors(color) {
        let self = this;
        for (let k = 0; k < this.elements.length; k++) {
            self.elements[k].style.backgroundColor = self.randomColor();
        }
    }

    showElements() {
        let self = this;
        let i = 0;
        function iterate(){
            // do whatever you like here
            if (i < self.elements.length){
                if (self.isInView(self.elements[i]) === true) {
                    console.log(1);
                    self.elements[i].className = 'fold-under fold-under-Visible';
                    return;
                }
                i++;
            }

            setTimeout(iterate, 10);
        }

        iterate();
    }
    isInView(elem){
        var isInViewport = function (elem) {
            var bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        return isInViewport(elem);
    }
}