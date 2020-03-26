import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {



  constructor(private elem:ElementRef) { }

  @HostListener ('click') onClicks(){
    this.textHighlight("yellow")
  }
  @HostListener ('dblclick') onDoubleClicks(){
    this.textHighlight("white")
  }

  private textHighlight(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
  }

}
