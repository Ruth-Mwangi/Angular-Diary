import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-thoughts',
  templateUrl: './entry-thoughts.component.html',
  styleUrls: ['./entry-thoughts.component.css']
})
export class EntryThoughtsComponent implements OnInit {

  @Input() entry:Entry;


  @Output() isDeleted = new EventEmitter<boolean>();

  deleteEntry(remove:boolean){
    this.isDeleted.emit(remove);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
