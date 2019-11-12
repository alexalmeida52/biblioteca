import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
@Component({
  selector: 'app-store-book',
  templateUrl: './store-book.component.html',
  styleUrls: ['./store-book.component.css']
})

export class StoreBookComponent implements OnInit {
  data: any = {};
  books: any = [];

  constructor(private api: ApiService) { }

  async ngOnInit() {
     
    this.data.status = 'Not Read';
    this.books = await this.api.index();
    console.log(this.books);

  }
  verify(data) {
    if (data.title == undefined) {
      return false
    };
    if (data.author == undefined) {
      return false
    };
    if (data.pages == undefined) {
      return false
    };
    if (data.status == undefined) {
      return false
    };
    return true;
  }
  async delete(id) {
    console.log("deletando " + id);
    
    this.api.delete(id);
    this.books = await this.api.index();

  }

  async submit() {
    console.log(this.data);

    if (this.verify(this.data)) {

      console.log('Salvando ' + this.data.title);
      console.log(JSON.parse(localStorage.getItem('data')));

      this.api.store(this.data);

      showModal(this.data);
      this.books = await this.api.index();
      this.data = {};
      
    } else {
      
      alert('Preencha todos os campos');
    }


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
      let documento = document.getElementById("container");
      let div = document.createElement("div");
      div.innerHTML = modal;
      documento.appendChild(div);

    }
  }
}
