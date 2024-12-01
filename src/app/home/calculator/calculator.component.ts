import { Component } from '@angular/core'; // Necesario para declarar el componente
import { evaluate } from 'mathjs'; // Usado para calcular expresiones matemáticas
import { TemplateComponent } from '../../components/template/template.component'; // Usado en el template HTML

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [TemplateComponent], // Aquí se importa TemplateComponent porque se usa en el HTML
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'], // Asegúrate de que esta ruta sea correcta
})
export class CalculatorComponent {
  display: string = '';
  label: string = 'Calculator'; // Etiqueta para el componente TemplateComponent
  style = {
    display: 'block',
  };

  // Métodos para TemplateComponent
  removeApp(event: any) {
    console.log('Aplicación cerrada:', event);
    this.style.display = 'none';
  }

  putInFront(event: any) {
    console.log('Aplicación al frente:', event);
  }

  // Métodos de la calculadora
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
      const openParenthesesCount = (this.display.match(/\(/g) || []).length;
      const closeParenthesesCount = (this.display.match(/\)/g) || []).length;

      if (openParenthesesCount !== closeParenthesesCount) {
        console.error('Paréntesis sin cerrar');
        return;
      }

      const sanitizedExpression = this.processSpecialOperations(this.display);
      this.display = evaluate(sanitizedExpression).toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

  processSpecialOperations(expression: string): string {
    expression = expression.replace(/pi/g, 'pi');
    expression = expression.replace(/e/g, 'e');
    expression = expression.replace(/sqrt\(/g, 'sqrt(');
    expression = expression.replace(/sin\(/g, 'sin(');
    expression = expression.replace(/cos\(/g, 'cos(');
    expression = expression.replace(/tan\(/g, 'tan(');
    expression = expression.replace(/log\(/g, 'log10(');
    expression = expression.replace(/ln\(/g, 'log(');
    expression = expression.replace(/exp\(/g, 'exp(');
    expression = expression.replace(/(\d+)\^(\d+)/g, (_, base, exp) => `(${base} ^ ${exp})`);
    return expression;
  }
}
