export interface UserInput {
    initInvest: number;
    annualInvest: number;
    expectedReturn: number;
    duration: number;
}

export interface AnnualInvest {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}