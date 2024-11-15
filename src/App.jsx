import { useState } from "react";
import Header from "./components/Header";
import InvestmentResults from "./components/InvestmentResults";
import UserInputs from "./components/UserInputs";

function App() {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleAmountChange(id, value) {
    setInvestmentDetails((prevInvestments) => {
      return { ...prevInvestments, [id]: Number(value) };
    });
  }

  return (
    <>
      <Header />
      <main>
        <UserInputs
          investmentDetails={investmentDetails}
          onAmountChange={handleAmountChange}
        />
        <InvestmentResults investmentDetails={investmentDetails} />
      </main>
    </>
  );
}

export default App;
