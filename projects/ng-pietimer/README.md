# NgPietimer

Angular pie timer for visual countdowns

# Install

      npm i ng-pietimer --save
      
      import { NgPietimerModule } from 'ng-pietimer';
      
      @NgModule({
        imports:      [ ... NgPietimerModule ],

# Usage

      <ng-pietimer [size]="10" [resetKey]="uniqueKey" [durationMs]="timeInSeconds*1000" ></ng-pietimer>
      
      
# Multiple instance

Is possible to instanciate multiple instances of the countdown, but you have to avoid to have them in a single component (simply encapsulate them into another component like in the demo)
     

# Demo
  
https://stackblitz.com/edit/angular-9-starter-fbwfbq?file=src/app/app.component.html

