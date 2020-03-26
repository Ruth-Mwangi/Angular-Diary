import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryComponent } from './entry/entry.component';
import { EntryThoughtsComponent } from './entry-thoughts/entry-thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    EntryFormComponent,
    EntryComponent,
    EntryThoughtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
