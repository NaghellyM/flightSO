import { Component } from '@angular/core';

//Evalua expresiones matematicas complejas
import { evaluate } from 'mathjs';
import { TemplateComponent } from '../../components/template/template.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  display: string = '';

  appendToInput(value: string) {
    if (this.display.length < 30) {
      this.display += value;
    }
  }

  clear() {
    this.display = '';
  }

  delete() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      let openParenthesesCount = (this.display.match(/\(/g) || []).length;
      let closeParenthesesCount = (this.display.match(/\)/g) || []).length;
      if (openParenthesesCount !== closeParenthesesCount) {
        console.error('Parentesis sin cerrar');
      }
      let santizedExpressions = this.processSpecialOperations(this.display);
      this.display = evaluate(santizedExpressions).toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

  processSpecialOperations(expression: string): string {
    expression = expression.replace(/pi/g, 'pi');
    expression = expression.replace(/e/g, 'e');
    expression = expression.replace(/sqtr\(/g, 'e');
    expression = expression.replace(/sin\(/g, 'sin(');
    expression = expression.replace(/cos\(/g, 'cos(');
    expression = expression.replace(/tan\(/g, 'tan(');
    expression = expression.replace(/log\(/g, 'log10(');
    expression = expression.replace(/ln\(/g, 'log(');
    expression = expression.replace(/exp\(/g, 'exp(');
    expression = expression.replace(
      /(\d+)\^(\d+)/g,
      (_, base, exp) => `(${base} ^ ${exp})`
    );
    return expression;
  }
}
