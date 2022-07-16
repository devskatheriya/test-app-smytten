import React from "react";
import { comparison, questions, textForKeys } from "../data";
import { Dropdown } from "../Dropdown";
import "../style.css";

const questionsOptions = questions.map((question) => ({
  value: question.id,
  label: question.question_text,
}));

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
        options={questionsOptions}
        onChange={onChangeQuestion}
        dropdownName={questionKey}
        defaultValue={id}
      />

      {comparisonOptions?.length && (
        <Dropdown
          key={comparisonKey}
          options={comparisonOptions}
          onChange={onChange}
          dropdownName={comparisonKey}
        />
      )}

      {valueOptions?.length && (
        <Dropdown
          key={valueKey}
          options={valueOptions}
          onChange={onChange}
          dropdownName={valueKey}
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
