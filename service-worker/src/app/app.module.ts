import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostItemComponent } from './post/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
