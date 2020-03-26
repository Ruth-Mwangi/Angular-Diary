import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries:Entry[]=[];

  addNewEntry(entry){
    let entriesLength=this.entries.length;
    entry.id=entriesLength+1;
    entry.entryDate=new Date(entry.entryDate)
    this.entries.push(entry);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
