import UserInput from "./UserInput";

export default function UserInputs({ investmentDetails, onAmountChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          id="initialInvestment"
          label="Initial Investment"
          investmentDetails={investmentDetails}
          onAmountChange={onAmountChange}
        />
        <UserInput
          id="annualInvestment"
          label="Annual Investment"
          investmentDetails={investmentDetails}
          onAmountChange={onAmountChange}
        />
      </div>
      <div className="input-group">
        <UserInput
          id="expectedReturn"
          label="Expected Return"
          investmentDetails={investmentDetails}
          onAmountChange={onAmountChange}
        />
        <UserInput
          id="duration"
          label="Duration"
          investmentDetails={investmentDetails}
          onAmountChange={onAmountChange}
        />
      </div>
    </section>
  );
}
