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
  prevVal = "";

  calculate(value: string) {

    if (value == "=") {
      try {
        this.result = eval(this.result);
      }
      catch (x) {
        console.log("Virhe");
      }
    } else if (value == "C") {
      this.result = "";
    } else if (
      (this.prevVal == "+" ||
        this.prevVal == "-" ||
        this.prevVal == "/" ||
        this.prevVal == "*") &&
      (value == "+" ||
        value == "-" ||
        value == "/" ||
        value == "*"
      )) {
      this.result = this.result;
      console.log("Kahta operaattoria ei voi syöttää peräkkäin");
    }

    else {
      this.result = this.result + value;
    }

    this.prevVal = value;

  }
}
