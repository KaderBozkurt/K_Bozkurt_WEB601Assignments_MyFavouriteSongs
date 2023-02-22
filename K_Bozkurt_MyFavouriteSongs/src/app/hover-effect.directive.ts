import { Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { style} from '@angular/animations';
import{NgClass} from '@angular/common';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective implements OnInit{
@Input() styling?:string;

  constructor(public eRaf:ElementRef) {
    eRaf.nativeElement.style.cursor="pointer";
   }
  ngOnInit(): void {
      }

      @HostListener('mouseover') OnMouseover(){
        if(this.styling=="weight"){
          this.eRaf.nativeElement.style.fontWeight="bold";
        }
        else if(this.styling=="line"){
          this.eRaf.nativeElement.style.textDecoration="underline";
        }
        else if(this.styling=="border"){
        
             this.eRaf.nativeElement.style.borderStyle="dotted";
           }
          
       }
       @HostListener('mouseleave') OnMouseleave(){
         this.eRaf.nativeElement.style.textDecoration="none";
         this.eRaf.nativeElement.style.fontWeight="normal";
         this.eRaf.nativeElement.style.borderStyle="dotted";
       }



}
