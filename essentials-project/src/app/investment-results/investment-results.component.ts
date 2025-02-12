import { Component, computed, inject, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  // with signals
  // results = input<
  //   | {
  //       year: number;
  //       interest: number;
  //       valueEndOfYear: number;
  //       annualInvestment: number;
  //       totalInterest: number;
  //       totalAmountInvested: number;
  //     }[]
  //   | undefined
  // >(undefined);

  investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData();
  // }

  // can also deal like this with computed for dealing with signals
  // this is read only
  results = computed(() => this.investmentService.resultsData());

  // can also do like this
  // results = this.investmentService.resultsData.asReadonly();
}
