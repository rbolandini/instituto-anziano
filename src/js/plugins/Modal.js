
export default class Modal {
    constructor() {
     this.default();
 }

 default() {
    $(document).ready(function() {
        $('[data-modal="close"]').click(function(e){
            e.preventDefault();
                $('[data-modal-container]').fadeOut(300);
        });

        $('[data-modal="open"]').each(function(index, element){
            let $id = $(element).data('id');

            $(element).click( function() {
                $('[data-modal-container]').fadeIn(300);
               $('[data-modal-title]').html( $('[data-title="'+$id+'"]').html() );
               $('[data-modal-content]').html( $('[data-content="'+$id+'"]').html() );
               $('[data-modal-thumbnail]').html( $('[data-thumbnail="'+$id+'"]').html() );
               $('[data-modal-url]').attr('href', $('[data-url="'+$id+'"]').text() );
           })
        })
    });
}


}
