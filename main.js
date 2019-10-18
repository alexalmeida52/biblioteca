$(document).ready(() => {

    // Criando a tabela com os livros que já existem no localstarage
    function onInit() {
        const bookList = JSON.parse(localStorage.getItem('data'));
        if (bookList != null) {
            console.log(bookList);
            $('#livros').empty();
            for (i in bookList) {
                const tr = `<tr id="${i}">
            <th class="text-center" scope="row">${Number(i) + 1}</th>
            <td class="text-center">${bookList[i].title}</td>
            <td class="text-center">${bookList[i].author}</td>
            <td class="text-center">${bookList[i].pages}</td>
            <td class="text-center">${bookList[i].status}</td>
            <td class="text-center"><i id="${i}" class="fa fa-trash" style="cursor: pointer" aria-hidden="true"></i></td>
          </tr>`
                $('#livros').append(tr);
            }
        }
    }
    onInit();

    // Função para capturar valores dos inputs no momento de salvar o livro
    function getFilds() {
        const data = {
            title: $('#title').val(),
            author: $('#author').val(),
            pages: $('#pages').val(),
            status: $('#status').val(),
        }
        return data;

    }

    // Alerta de ocnfirmação que o livro foi salvo
    function showModal(data) {
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
                    <button onclick="teste()" id="teste" type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>`
        $('.container').append(modal);
    }

    // Evento do clique para salvar o formulário do livro
    $('#submit').click(() => {
        if (verify()) {
            
            const data = getFilds();
            console.log('Salvando ' + data.title);
            console.log(JSON.parse(localStorage.getItem('data')));

            let dataStorage = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
            // console.log(typeof(dataStorage))
            dataStorage.push(data);
            // console.log(dataStorage.length);

            localStorage.setItem('data', JSON.stringify(dataStorage));
            const linha = `<tr id="${dataStorage.length}">
            <th class="text-center" scope="row">${dataStorage.length}</th>
            <td class="text-center">${data.title}</td>
            <td class="text-center">${data.author}</td>
            <td class="text-center">${data.pages}</td>
            <td class="text-center">${data.status}</td>
            <td class="text-center"><i id="${dataStorage.length}" class="fa fa-trash" style="cursor: pointer" aria-hidden="true"></i></td>
          </tr>`;
            $('#livros').append(linha);
            showModal(data);
            clearFilds();
        } else {
            alert('Preencha todos os campos');
        }

    });

    // Evento para apagar um livro
    $('.fa-trash').click((e) => {
        console.log("Apagando livro " + e.target.id);
        $(`#${e.target.id}`).remove();
        const id = e.target.id;
        let bookList = JSON.parse(localStorage.getItem('data'));
        bookList = bookList.filter((elm, i) => { return i != id }).map(elm => {
            return elm;
        });
        // console.log(bookList);
        localStorage.setItem('data', JSON.stringify(bookList));
        // onInit();

    });
    $('#teste').click(() => {
        console.log('Recarregar')
        window.reload();
    });

    // Clear fields
    function clearFilds() {
        $('#title').val() = '';
        $('#author').val() = '';
        $('#pages').val() = '';
        $('#status').val() = '';
    }
    function verify() {
        if ($('#title').val() == ''){
             return false};
        if ($('#author').val() == ''){
             return false};
        if ($('#pages').val() == ''){
             return false};
        if ($('#status').val() == ''){
             return false};
        return true;
    }

});

// derivadas 
// construções de graficos secantes
// Minimos e maximos