export default class Slider {
    constructor(selector) {
        if (!selector) selector = '.slider';
        this.activeSlide = document.querySelector(selector)
            .querySelector('.slide.active');
    }

    prev () {
        this.activeSlide.className = this.activeSlide.className
            .replace('active', '')
            .trim();
        this.activeSlide.previousElementSibling.className += ' active';
        this.activeSlide = this.activeSlide.previousElementSibling;
    }

    next () {
        this.currentSlide.className = this.currentSlide.className
            .replace('active', '')
            .trim();
        this.currentSlide.nextElementSibling.className += ' active';
        this.currentSlide = this.currentSlide.nextElementSibling;
    }
}