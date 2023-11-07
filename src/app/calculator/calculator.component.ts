import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  result = "";

  calculate(value: string) {

    if (value == "=") {
      try {
        this.result = eval(this.result);
        console.log(this.result);
      }
      catch (x) {
        console.log("Error");
      }
    } else if (value == "C") {
      this.result = "";
      console.log(this.result);
    } /*else if (
      (this.result.endsWith("+") ||
        this.result.endsWith("-") ||
        this.result.endsWith("*") ||
        this.result.endsWith("/")) &&
      (value == "+" ||
        value == "-" ||
        value == "/" ||
        value == "*"
      )) {
      this.result = this.result;
      console.log("double operator not allwed");
    }*/

    else {
      this.result = this.result + value;
      console.log(this.result);
    }



  }
}
