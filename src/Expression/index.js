import React from "react";
import { expressions } from "../data";
import { Dropdown } from "../Dropdown";

export default function Expression({
  data,
  keyName,
  onClickAdd,
  isEditable,
  getComparison,
  onChangeExpression,
}) {
  if (!data) return null;

  const comparisonKey = keyName ? `${keyName}.expression` : "expression";
  const typeKey = keyName ? `${keyName}.type` : "type";

  return (
    <div className="input-wrapper" key={keyName}>
      {!isEditable &&
      (data.type === "DEFAULT_TRUE" ||
        data.type === "SIMPLE_EXPRESSION") ? null : (
        <div className="expression-wrapper">
          <Dropdown
            options={expressions}
            onChange={onChangeExpression}
            dropdownName={typeKey}
            defaultValue={data?.type}
          />
          {data.type !== "DEFAULT_TRUE" && data.type !== "SIMPLE_EXPRESSION" && (
            <button
              className="add-btn"
              name={comparisonKey}
              onClick={onClickAdd}
            >
              Add
            </button>
          )}
        </div>
      )}

      {getComparison(data?.expression, comparisonKey)}
    </div>
  );
}
