import { useState } from "react";
import Comparison from "./Comparison";
import Expression from "./Expression";
import { comparison, questions } from "./data";
import {
  getDefaultExpression,
  getKeyFromPath,
  getNestedObject,
  getNextQuestion,
} from "./Utils/helper";
import "./App.css";

export default function App() {
  const [nextQuestionId, setNextQuestionId] = useState(
    "62a6ef6ef4b287a7cb206e22"
  );
  const [isEditable, setEditable] = useState(true);
  const [state, setState] = useState(getDefaultExpression());

  const onChange = (path, value) => {
    const key = getKeyFromPath(path);
    const newState = { ...state };
    const nestedObj = getNestedObject(newState, path);
    nestedObj[key] = value;
    setState(newState);
  };

  const onChangeExpression = (path, value) => {
    if (!isEditable) setEditable(true);
    let expression;

    switch (value) {
      case "SIMPLE_CONDITION":
        expression = getNextQuestion(nextQuestionId, setNextQuestionId);
        break;

      case "AND_CONDITION":
      case "OR_CONDITION":
      case "NOT_CONDITION":
        expression = [getDefaultExpression()];
        break;

      default:
        expression = "None";
        break;
    }

    const newState = { ...state };
    const nestedObj = getNestedObject(newState, path);
    nestedObj.type = value;
    nestedObj.expression = expression;
    setState(newState);
  };

  const onClickAdd = (event) => {
    if (!isEditable) setEditable(true);
    const path = event.target.name;
    const newState = { ...state };
    const newExpression = {
      type: "DEFAULT_TRUE",
      expression: "None",
    };
    const nestedObj = getNestedObject(newState, path);
    nestedObj.expression.push(newExpression);
    setState(newState);
  };

  const onChangeQuestion = (path, value) => {
    const newState = { ...state };
    const nestedObj = getNestedObject(newState, path);
    const { question_text, options, question_type } =
      questions?.find(({ id }) => id === value) || {};
    nestedObj.question = value;
    nestedObj.value = options[0];
    nestedObj.question_text = question_text;
    nestedObj.comparison = comparison[question_type][0];

    setState(newState);
  };

  const getComparison = (data, key) => {
    if (!data || typeof data === "string") return null;

    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <Expression
          data={item}
          key={`${key}.${index}`}
          onClickAdd={onClickAdd}
          isEditable={isEditable}
          keyName={`${key}.${index}`}
          getComparison={getComparison}
          onChangeExpression={onChangeExpression}
        />
      ));
    }

    return (
      <Comparison
        key={key}
        data={data}
        keyName={key}
        onChange={onChange}
        isEditable={isEditable}
        onClickEdit={setEditable}
        onChangeQuestion={onChangeQuestion}
      />
    );
  };

  return (
    <div className="App">
      <h1 className="heading">Smytten Frontend Task</h1>

      <Expression
        data={state}
        onClickAdd={onClickAdd}
        isEditable={isEditable}
        getComparison={getComparison}
        onChangeExpression={onChangeExpression}
      />

      <button onClick={() => setEditable(false)}>Save</button>
      <div className="json-preview">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}
