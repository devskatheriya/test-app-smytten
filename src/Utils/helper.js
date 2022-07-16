import { get } from "lodash";
import { comparison, questions } from "../data";

export const getNextQuestion = (nextQuestionId, setNextQuestionId) => {
  const question =
    questions.find((item) => item.id === nextQuestionId) || questions[0];
  setNextQuestionId(question.next_question_id);
  return {
    question: question.id,
    question_text: question.question_text,
    comparison: comparison[question.question_type][0],
    value: question.options[0],
  };
};

export const getNestedObject = (object, path) => {
  if (!path) return object;
  const pathKeys = path.split(".");
  pathKeys.pop();
  if (!pathKeys.length) return object;

  return get(object, pathKeys.join("."));
};

export const getKeyFromPath = (path) => {
  const pathKeys = path.split(".");
  return pathKeys.pop();
};

export const getDefaultExpression = () => {
  return {
    type: "DEFAULT_TRUE",
    expression: "None",
  };
};
