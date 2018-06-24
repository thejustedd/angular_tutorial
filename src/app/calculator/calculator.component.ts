import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  buttons: any[] = [1, 2, 3, '/', 4, 5, 6, '*', 7, 8, 9, '-', '00', 0, '=', '+'];
  result: string = '0';
  mem: number = 0;
  operator: string = '';

  constructor() { }

  ngOnInit() {
  }

  onButton(button): void {
    if (button === '=') {
      if (this.result && this.operator) {
        this.result = eval(this.mem + this.operator + this.result);
        this.mem = 0;
        this.operator = '';
      }
    }
    else if (typeof button === 'number' || button === '00') {
      (parseFloat(this.result) && isFinite(parseFloat(this.result))) ?
        this.result += button.toString() : this.result = (+button).toString();
    }
    else {
      this.mem = parseFloat(this.result);
      this.operator = button;
      this.result = '0';
    }
  }

}
