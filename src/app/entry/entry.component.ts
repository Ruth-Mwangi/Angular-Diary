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

  toggleThoughts(index){
    this.entries[index].showThoughts=!this.entries[index].showThoughts;
  }

  entryDelete(isDeleted,index){
    if (isDeleted){
      let del=confirm(`Are you sure you want to delete ${this.entries[index].title}?`)

      if (del){
        this.entries.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
