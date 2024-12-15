import { Component } from '@angular/core';
import { AnnualInvestsService } from '../annual-invests.service';
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
  enteredExpectedReturn: number = 5;
  enteredDuration: number = 10;

  constructor(private annualInvestsService: AnnualInvestsService) { }


  onSubmit() {
    // console.log('enteredInitInvest' + ' : ' + this.enteredInitInvest);
    // console.log('enteredAnnualInvest' + ' : ' + this.enteredAnnualInvest);
    // console.log('enteredExpectedReturn' + ' : ' + this.enteredExpectedReturn);
    // console.log('enteredDuration' + ' : ' + this.enteredDuration);
    this.annualInvestsService.removeAllAnnualInvest();
    this.annualInvestsService.calculateInvestmentResults({
      initInvest: this.enteredInitInvest,
      annualInvest: this.enteredAnnualInvest,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    });
  }

  // maybe not a good idea to put this code here because it's not related to "user inputs"
  //so we can moove it in app.component.ts  --> if we don't use services (nothing stored in cookies)
  // OR in the services
  //   calculateInvestmentResults() {
  //     let investmentValue = this.enteredInitInvest;
  //     for (let i = 0; i < this.enteredDuration; i++) {
  //       const year = i + 1;
  //       const interestEarnedInYear = investmentValue * (this.enteredExpectedReturn / 100);
  //       investmentValue += interestEarnedInYear + this.enteredAnnualInvest;
  //       const totalInterest =
  //         investmentValue - this.enteredAnnualInvest * year - this.enteredInitInvest;
  //       this.annualInvestsService.addAnnualInvest({
  //         year: year,
  //         interest: interestEarnedInYear,
  //         valueEndOfYear: investmentValue,
  //         annualInvestment: this.enteredAnnualInvest,
  //         totalInterest: totalInterest,
  //         totalAmountInvested: this.enteredInitInvest + this.enteredAnnualInvest * year,
  //       });
  //     }
  //   }
}
