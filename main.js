$(document).ready(() => {
    function getFilds(){
        const data = {
            title: $('#title').val(),
            author: $('#author').val(),
            pages: $('#pages').val(),
            status: $('#status').val(),
        }
        return data;
        
    }

    function showModal(data){
        console.log(data)
        const modal = ` <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Book successfully added</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body " style="display: flex;flex-direction: column; text-align: center">
                    <span>Title: ${data.title}</span>
                    <span>Author: ${data.author}</span>
                    <span>Pages: ${data.pages}</span>
                    <span>Status: ${data.status}</span>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>`
    $('.container').append(modal);
    }
    $('#submit').click(()=>{
        
        const data = getFilds();
        console.log('Salvando ' + data.title);
        console.log(JSON.parse(localStorage.getItem('data')));
        
        let dataStorage = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
        console.log(typeof(dataStorage))
        dataStorage.push(data);
        
        localStorage.setItem('data',JSON.stringify(dataStorage));

        showModal(data);


    });
});