import { calculateInvestmentResults, formatter } from "../util/investment";

export default function InvestmentResults({ investmentDetails }) {
  const investmentResults = calculateInvestmentResults(investmentDetails);

  let interest = 0;
  let investedCapital = investmentDetails.initialInvestment;

  const resultRows = investmentResults.map((investment) => {
    interest += investment.interest;
    investedCapital += investment.annualInvestment;
    return (
      <tr key={investment.year}>
        <td>{investment.year}</td>
        <td>{formatter.format(investment.valueEndOfYear)}</td>
        <td>{formatter.format(investment.interest)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    );
  });

  return (
    <>
      {investmentDetails.duration ? (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>{resultRows}</tbody>
        </table>
      ) : (
        <p className="center">Invalid Duration!</p>
      )}
    </>
  );
}
