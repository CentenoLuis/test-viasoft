import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OrderListModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
