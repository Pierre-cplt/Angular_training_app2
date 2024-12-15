import { Injectable } from "@angular/core";
import type { AnnualInvest, UserInput } from "./invest-input.model";

@Injectable({ providedIn: 'root' })
export class AnnualInvestsService {
  annualInvests?: AnnualInvest[];

  // constructor() {
  //   const localAnnualInvests = localStorage.getItem('AnnualInvests'); //--> get from browser tasks
  //   if (localAnnualInvests) {
  //     this.annualInvests = JSON.parse(localAnnualInvests);
  //   }


  // }

  calculateInvestmentResults(data: UserInput) {
    const annualData: AnnualInvest[] = [];
    let investmentValue = data.initInvest;
    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvest;
      const totalInterest =
        investmentValue - data.annualInvest * year - data.initInvest;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvest,
        totalInterest: totalInterest,
        totalAmountInvested: data.initInvest + data.annualInvest * year,
      });
    }
    this.annualInvests = annualData;
  }

  getAnnualInvests() {
    return this.annualInvests;
  }

  /*addAnnualInvest(annualInvest: AnnualInvest) {
    this.annualInvests.push({
      year: annualInvest.year,
      interest: annualInvest.interest,
      valueEndOfYear: annualInvest.valueEndOfYear,
      annualInvestment: annualInvest.annualInvestment,
      totalInterest: annualInvest.totalInterest,
      totalAmountInvested: annualInvest.totalAmountInvested,
    });

    // this.saveAllAnnualInvest();
  }*/

  removeAllAnnualInvest() {
    this.annualInvests = [];
    // this.saveAllAnnualInvest();
  }

  // private saveAllAnnualInvest() {
  //   localStorage.setItem('AnnualInvests', JSON.stringify(this.annualInvests));
  // }

}