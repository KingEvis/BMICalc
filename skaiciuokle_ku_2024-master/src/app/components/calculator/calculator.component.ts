import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public height: number = 0; // Height in centimeters
  public weight: number = 0; // Weight in kilograms
  public bmi: number = 0;
  public result: string = "";

  public calculateBMI() {
    if (this.height > 0 && this.weight > 0) {
      // Convert height to meters
      const heightInMeters = this.height / 100;

      // Calculate BMI
      this.bmi = this.weight / (heightInMeters * heightInMeters);

      // Display the result
      this.result = `Your BMI is: ${this.bmi.toFixed(2)}`;
    } else {
      this.result = "Please enter valid height and weight.";
    }
  }
}