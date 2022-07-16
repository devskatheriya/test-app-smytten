export const Dropdown = ({
  options = [],
  dropdownName,
  onChange,
  defaultValue,
}) => {
  return (
    <div className="dropdown">
      <select
        value={defaultValue}
        name={dropdownName}
        onChange={(e) => onChange(dropdownName, e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};
