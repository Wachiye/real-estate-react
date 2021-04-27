import * as $ from "jquery/dist/jquery.min";
$(document).ready( () => {
    function creatToast(){
        return ` <div class="alert alert-dismissible position-absolute w-75" role="alert" >
                    <div class="alert-header">
                        <i class="fa  fa-cart-plus"></i>
                        <strong class="mr-auto">Booked
                            <small class="text-muted ml-auto">
                                <span>1</span> Items in cart
                            </small>
                        </strong>
                        
                        <button type="button" class=" mb-1 close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="alert-body">
                        Your booking has been recorded. To complete booking  
                        <a href="./checkout.html">Click here</a>
                    </div>
                </div>`;
    }
    $('.book-property-btn').on('click', (evt) => {
        let id = evt.target.getAttribute('data-property-id');

        let parent = $(`#property-${id}`);

        $(parent).prepend(
            creatToast()
        );
    });

    $('.show-nav-btn').on( 'click', (evt) => {
        evt.preventDefault();
        let elm = evt.target.getAttribute('data-nav-class');
        $(`.${elm}`).toggleClass('active');
    });
    //trigger file open dialog box
    $('.file-upload-btn').on( 'click', (evt) => {
        evt.preventDefault();
        let fileInput = evt.target.getAttribute('data-upload-id');
        console.log({fileInput});
        $(`#${fileInput}`).click();
    });

    //file preview
    $('input:file').on('change', (evt) => {
        evt.preventDefault();
        let previewElement;
        const files = evt.target.files;
        if(files.length === 1){
            previewElement = evt.target.getAttribute('data-preview-id');
            const src = URL.createObjectURL(files[0]);
            $(`#${previewElement}`).attr('src',src );
        }
        else{
            previewElement = evt.target.getAttribute('data-preview-class');
            let elements = $(`.${previewElement}`);
            for (let i = 0; i < elements.length; i++) {
                let src = URL.createObjectURL(files[i]);
                elements[i].setAttribute('src',src );
            }
        }
    });
});