import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-thoughts',
  templateUrl: './entry-thoughts.component.html',
  styleUrls: ['./entry-thoughts.component.css']
})
export class EntryThoughtsComponent implements OnInit {

  @Input() entry:Entry;

  constructor() { }

  ngOnInit(): void {
  }

}
