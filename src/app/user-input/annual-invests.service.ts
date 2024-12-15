import { Injectable } from "@angular/core";
import { AnnualInvest } from "./user-input.model";

@Injectable({ providedIn: 'root' })
export class AnnualInvestsService {
  private annualInvests: AnnualInvest[] = [];

  constructor() {
    const localAnnualInvests = localStorage.getItem('AnnualInvests'); //--> get from browser tasks
    if (localAnnualInvests) {
      this.annualInvests = JSON.parse(localAnnualInvests);
    }


  }

  getAnnualInvests() {
    return this.annualInvests;
  }

  addAnnualInvest(annualInvest: AnnualInvest) {
    this.annualInvests.push({
      year: annualInvest.year,
      interest: annualInvest.interest,
      valueEndOfYear: annualInvest.valueEndOfYear,
      annualInvestment: annualInvest.annualInvestment,
      totalInterest: annualInvest.totalInterest,
      totalAmountInvested: annualInvest.totalAmountInvested,
    });
    this.saveAllAnnualInvest();
  }

  removeAllAnnualInvest() {
    this.annualInvests = [];
    this.saveAllAnnualInvest();
  }

  private saveAllAnnualInvest() {
    localStorage.setItem('AnnualInvests', JSON.stringify(this.annualInvests));
  }

}