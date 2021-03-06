import React from "react";
import { comparison, questions, textForKeys } from "../data";
import { Dropdown } from "../Dropdown";
import "../style.css";

export default function Comparison({
  data,
  keyName,
  onChange,
  isEditable,
  onClickEdit,
  onChangeQuestion,
}) {
  const valueKey = `${keyName}.value`;
  const questionKey = `${keyName}.question`;
  const comparisonKey = `${keyName}.comparison`;

  const question =
    questions?.find((question) => question.id === data.question) ||
    questions[0];

  if (!question) return null;

  const { question_type, options: valueOptions, id } = question;
  const comparisonOptions = comparison[question_type];
  return isEditable ? (
    <div>
      <Dropdown
        key={questionKey}
        options={questions}
        onChange={onChangeQuestion}
        dropdownName={questionKey}
        defaultValue={id}
        labelKeyName="question_text"
        valueKeyName="id"
      />

      {comparisonOptions?.length && (
        <Dropdown
          key={comparisonKey}
          options={comparisonOptions}
          onChange={onChange}
          dropdownName={comparisonKey}
          defaultValue={data.comparison}
        />
      )}

      {valueOptions?.length && (
        <Dropdown
          key={valueKey}
          options={valueOptions}
          onChange={onChange}
          dropdownName={valueKey}
          defaultValue={data.value}
        />
      )}
    </div>
  ) : (
    <div className="answer">
      Answer to "{data.question_text}"{" "}
      {textForKeys[data.comparison] || data.comparison} "{data.value}"
      <button className="edit-btn" onClick={() => onClickEdit(true)}>
        EDIT
      </button>
    </div>
  );
}
