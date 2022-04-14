import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import 'tw-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { SeemorelessComponent } from './widgets/seemoreless/seemoreless.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './books/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    SeemorelessComponent,
    FilterPipe,
    SearchComponent,
    HeaderComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
