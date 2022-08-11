export default class Background {
    constructor() {
        this.image();
    }

    image() {
        $(document).ready(function() {
            let $backgrounds = $('[data-image]');

            $backgrounds.each((el, value) => {
                let $el = $(value);
                let backgroundImage = $el.data('image');

                $el.css({
                    backgroundImage: `url(${backgroundImage})`
                });
            });
        });
    }
}