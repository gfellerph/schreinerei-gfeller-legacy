export default class Slider {
    constructor(selector) {
        if (!selector) selector = '.slider';
        const $slider = document.querySelector(selector);

        this.activeSlide = $slider.querySelector('.slide.active');
    }

    prev () {
        this.activeSlide.className = this.activeSlide.className
            .replace('active', '')
            .trim();
        this.activeSlide.previousElementSibling.className += ' active';
        this.activeSlide = this.activeSlide.previousElementSibling;
    }

    next () {
        this.activeSlide.className = this.activeSlide.className
            .replace('active', '')
            .trim();
        this.activeSlide.nextElementSibling.className += ' active';
        this.activeSlide = this.activeSlide.nextElementSibling;
    }
}