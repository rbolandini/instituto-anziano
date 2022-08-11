export default class Height {
    constructor() {
        this.minHeight();
        this.height();
    }

    minHeight() {
        $(document).ready(function() {
            let $heights = $('[data-min-height]');

            $heights.each((el, value) => {
                let $el = $(value);
                let minheight = $el.data('min-height');
                $el.css({
                    minHeight: `${minheight}`
                });
            });
        });
    }

    height() {
        $(document).ready(function() {
            let $heights = $('[data-height]');

            $heights.each((el, value) => {
                let $el = $(value);
                let height = $el.data('height');
                $el.css({
                    height: `${height}`
                });
            });
        });
    }
}