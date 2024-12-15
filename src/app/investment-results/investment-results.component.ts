import { Component } from '@angular/core';
import { AnnualInvestsService } from '../user-input/annual-invests.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private annualInvestsService: AnnualInvestsService) { }

  get annualInvestsList() {
    return this.annualInvestsService.getAnnualInvests();
  }
}
