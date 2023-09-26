export const calculations = {
    monthlyPayments: (loan, interest, term) => {
        const months = term * 12;
        const mRate = interest / (12 * 100);
        return (
            (loan * mRate * Math.pow(1.0 + mRate, months)) /
            (Math.pow(1.0 + mRate, months) - 1.0)
        );
    },
    totalInterest: (fixedMonthly, loan, interest, term) => {
        const months = term * 12;
        const mRate = interest / (12 * 100);
        let paymentTowards = 0.0,
            totalInterest = 0.0;

        for (let i = 0; i <= months; i++) {
            totalInterest += loan * mRate;
            paymentTowards = fixedMonthly - loan * mRate;
            loan -= paymentTowards;
        }
        return totalInterest;
    },
    totalAmountPaid: (loan, totalInterest) => {
        return Number(loan) + Number(totalInterest);
    },
};
