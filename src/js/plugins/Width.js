export default class width {
    constructor() {
        this.minWidth();
        this.width();
    }

    minWidth() {
        $(document).ready(function() {
            let $widths = $('[data-min-width]');

            $widths.each((el, value) => {
                let $el = $(value);
                let minWidth = $el.data('min-width');
                $el.css({
                    minWidth: `${minWidth}`
                });
            });
        });
    }

    width() {
        $(document).ready(function() {
            let $widths = $('[data-width]');

            $widths.each((el, value) => {
                let $el = $(value);
                let width = $el.data('width');
                $el.css({
                    width: `${width}`
                });
            });
        });
    }
}