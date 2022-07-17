export const Dropdown = ({
  options = [],
  dropdownName,
  onChange,
  defaultValue,
  labelKeyName = "",
  valueKeyName = "",
}) => {
  return (
    <div className="dropdown">
      <select
        value={defaultValue}
        name={dropdownName}
        onChange={(e) => onChange(dropdownName, e.target.value)}
      >
        {options.map((option) => (
          <option value={option[valueKeyName] || option}>
            {option[labelKeyName] || option}
          </option>
        ))}
      </select>
    </div>
  );
};
