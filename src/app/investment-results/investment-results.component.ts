import { Component, inject } from '@angular/core';
import { AnnualInvestsService } from '../annual-invests.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private annualInvestsService = inject(AnnualInvestsService);

  get annualInvestsList() {
    return this.annualInvestsService.getAnnualInvests();
  }
}
