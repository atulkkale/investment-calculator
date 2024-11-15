import headerLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={headerLogo} alt="Header Logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
