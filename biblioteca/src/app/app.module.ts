import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreBookComponent } from './store-book/store-book.component';
import { IndexBookComponent } from './index-book/index-book.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreBookComponent,
    IndexBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
