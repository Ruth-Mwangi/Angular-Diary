export class Entry {

    showThoughts:boolean;
    constructor(public id:number,public entryDate: Date,public title:string,public thoughts:string){
        this.showThoughts=false;
    }
}
