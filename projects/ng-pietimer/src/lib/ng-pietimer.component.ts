import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


const π = Math.PI;

@Component({
  selector: 'ng-pietimer',
  templateUrl: './ng-pietimer.component.html',
  styleUrls: ['./ng-pietimer.component.scss'],
})
export class NgPietimerComponent implements OnInit, AfterViewInit {

  size = 10;
  α = 0;
  t = 1000;
  cc = 0;
  @ViewChild('loader') loader: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.draw();
  }

  draw() {
    this.α += 6;
    this.cc += 6;
    this.α %= 360;
    const r = (this.α * π / 180);
    const x = Math.sin(r) * (this.size / 2);
    const y = Math.cos(r) * - (this.size / 2);
    const mid = (this.α > 180) ? 1 : 0;
    const anim = 'M 0 0 v -' + (this.size / 2) + ' A ' + (this.size / 2) + ' ' + (this.size / 2) + ' 1 '
      + mid + ' 1 '
      + x + ' '
      + y + ' z';
    //console.log(anim);
    this.loader.nativeElement.setAttribute('d', anim);
    //border.setAttribute( 'd', anim );

    if (this.cc < 360) {
      setTimeout(()=>{this.draw();}, this.t); // Redraw
    }
  }

}
