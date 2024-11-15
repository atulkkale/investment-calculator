export default function UserInput({
  id,
  label,
  investmentDetails,
  onAmountChange,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        required
        id={id}
        value={investmentDetails[id]}
        onChange={(e) => onAmountChange(id, e.target.value)}
      />
    </div>
  );
}
