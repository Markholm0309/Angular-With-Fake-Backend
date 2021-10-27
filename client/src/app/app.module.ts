import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './_components/post-list/post-list.component';
import { PostItemComponent } from './_components/post-item/post-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from 'ngx-bootstrap/buttons'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
