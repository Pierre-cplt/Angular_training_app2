import { Component, inject } from '@angular/core';
import { AnnualInvestsService } from './annual-invests.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitInvest: number = 0;
  enteredAnnualInvest: number = 0;
  enteredExpectedReturn: number = 0;
  enteredDuration: number = 0;

  private annualInvestsService = inject(AnnualInvestsService);

  onSubmit() {
    // console.log('enteredInitInvest' + ' : ' + this.enteredInitInvest);
    // console.log('enteredAnnualInvest' + ' : ' + this.enteredAnnualInvest);
    // console.log('enteredExpectedReturn' + ' : ' + this.enteredExpectedReturn);
    // console.log('enteredDuration' + ' : ' + this.enteredDuration);
    this.annualInvestsService.removeAllAnnualInvest();
    this.calculateInvestmentResults();
  }

  calculateInvestmentResults() {
    let investmentValue = this.enteredInitInvest;
    for (let i = 0; i < this.enteredDuration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.enteredExpectedReturn / 100);
      investmentValue += interestEarnedInYear + this.enteredAnnualInvest;
      const totalInterest =
        investmentValue - this.enteredAnnualInvest * year - this.enteredInitInvest;
      this.annualInvestsService.addAnnualInvest({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.enteredAnnualInvest,
        totalInterest: totalInterest,
        totalAmountInvested: this.enteredInitInvest + this.enteredAnnualInvest * year,
      });
    }
  }
}
