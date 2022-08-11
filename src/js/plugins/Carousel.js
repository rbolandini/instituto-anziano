import Flickity from 'flickity';

export default class Carousel {
    constructor() {
        this.one();
        this.two();
        this.simple();
        this.tree();
    }

    one() {
        $(document).ready(function() {

            let $one = $('[data-carousel-one]');
            if ($one.length > 0) {
                $.each($one, function(index, item) {
                    new Flickity(item, {
                        pageDots: $(item).data('dots') || false,
                        groupCells: false,
                        prevNextButtons: $(item).data('navigation') || false,
                        autoPlay: true,
                        wrapAround: false,
                        cellAlign: 'left',
                        cellSelector: '[data-carousel-cell]'
                    });
                });
            }
        });
    }


    simple() {
        $(document).ready(function() {

            let $simple = $('[data-carousel-simple]');
            if ($simple.length > 0) {
                $.each($simple, function(index, item) {
                    new Flickity(item, {
                        pageDots: false,
                        groupCells: false,
                        prevNextButtons: false,
                        autoPlay: 5000,
                        wrapAround: false,
                        cellAlign: 'left',
                        cellSelector: '[data-carousel-cell]'
                    });
                });
            }
        });
    }


    two() {
        $(document).ready(function() {

            let $one = $('[data-carousel-two]');
            if ($one.length > 0) {
                $.each($one, function(index, item) {
                    new Flickity(item, {
                        pageDots: false,
                        groupCells: false,
                        prevNextButtons: false,
                        autoPlay: false,
                        contain: true,
                        wrapAround: false,
                        cellAlign: 'left',
                        cellSelector: '[data-carousel-cell]'
                    });
                });
            }
        });
    }

    tree() {
        $(document).ready(function() {

            let $one = $('[data-carousel-tree]');
            if ($one.length > 0) {
                $.each($one, function(index, item) {
                    new Flickity(item, {
                        pageDots: false,
                        groupCells: false,
                        prevNextButtons: true,
                        autoPlay: true,
                        wrapAround: true,
                        cellAlign: 'left',
                        cellSelector: '[data-carousel-cell]'
                    });
                });
            }
        });
    }

    four() {
        $(document).ready(function() {

            let $three = $('[data-carousel-four]');
            if ($three.length > 0) {
                $.each($three, function(index, item) {

                    new Flickity(item, {
                        pageDots: true,
                        groupCells: true,
                        lazyLoad: false,
                        prevNextButtons: false,
                        autoPlay: true,
                        adaptiveHeight: true,
                        setGallerySize: false,
                        cellAlign: 'left',
                        cellSelector: '[data-carousel-cell]'
                    });
                });

            }
        });

    }

}
