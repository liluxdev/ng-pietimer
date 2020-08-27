import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';


const π = Math.PI;

@Component({
  selector: 'ng-pietimer',
  templateUrl: './ng-pietimer.component.html',
  styleUrls: ['./ng-pietimer.component.scss'],
})
export class NgPietimerComponent implements OnInit, AfterViewInit, OnChanges {

  size = 10;
  α = 0;
  @Input() durationMs = 4000;
  remaningTimeMs = this.durationMs;
  lastFrameMs = 0;
  @Input() resetKey: any;
  @ViewChild('loader') loader: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.draw();
  }



  ngOnChanges(changes: SimpleChanges) {
   /* for (let propName in changes) {
      if (propName === 'durationMs') {*/
        this.remaningTimeMs = this.durationMs;
        this.lastFrameMs = 0;
        this.α = 0;
        this.draw();
    /*  }
      if (propName === 'tick') {
        this.remaningTimeMs = this.durationMs;
        this.α = 0;
        this.draw();
      }
    }*/
  }

  draw() {
    let elapsed = 0;
    if (this.lastFrameMs) {
      elapsed = Date.now() - this.lastFrameMs;
    }

    this.lastFrameMs = Date.now();

    this.remaningTimeMs -= elapsed;
    // elapsed: duration = x : 360
    const degreeIncrement = elapsed * 360 / this.durationMs;
    console.log(elapsed, degreeIncrement);
    this.α += degreeIncrement;
    //this.cc += degreeIncrement;
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

    if (this.remaningTimeMs > 0) {
      requestAnimationFrame(() => { this.draw(); }); // Redraw
    }
  }

}
