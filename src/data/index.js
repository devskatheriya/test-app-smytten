export const questions = [
  {
    id: "62b300d7965ea3e2ee01af3b",
    question_text: "What categories do you buy from online the most?",
    question_type: "SINGLE_SELECT",
    next_question_id: "62b300d1965ea3e2ee01af3a",
    options: [
      "Personal Care",
      "Health and Welness",
      "Beauty and Grooming",
      "Child Care",
      "Electronics",
    ],
  },
  {
    id: "62b300d1965ea3e2ee01af3a",
    question_text: "What Categories that you would consider buying online?",
    question_type: "MULTI_SELECT",
    next_question_id: "62b300c3965ea3e2ee01af39",
    options: [
      "Personal Care",
      "Health and Welness",
      "Beauty and Grooming",
      "Child Care",
      "Electronics",
    ],
  },
  {
    id: "62b300c3965ea3e2ee01af39",
    question_text: "What Categories that you would not consider buying online?",
    question_type: "MULTI_SELECT",
    next_question_id: "62b2df0c965ea3e2ee01af05",
    options: [
      "Personal Care",
      "Health and Welness",
      "Beauty and Grooming",
      "Child Care",
      "Electronics",
    ],
  },
  {
    id: "62b2de94965ea3e2ee01af04",
    question_text: "How would you rate the overall quality of the ptoduct?",
    question_type: "RANGE_SELECTION",
    next_question_id: "62a6ef76f4b287a7cb206e23",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    id: "62a6ef76f4b287a7cb206e23",
    question_text: "Please select your gender?",
    question_type: "SINGLE_SELECT",
    next_question_id: "62a6ef6ef4b287a7cb206e22",
    options: ["MALE", "FEMALE", "OTHER"],
  },
  {
    id: "62a6ef6ef4b287a7cb206e22",
    question_text: "Which city do you live in?",
    question_type: "SINGLE_SELECT",
    next_question_id: "62a6ef65f4b287a7cb206e21",
    options: [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Pune",
      "Chennai",
      "Kolkata",
      "Patna",
    ],
  },
  {
    id: "62a6ef65f4b287a7cb206e21",
    question_text: "Please select your age group",
    question_type: "SINGLE_SELECT",
    next_question_id: null,
    options: [
      "Less than 15 years",
      "15 - 19 Years",
      "20 - 24 Years",
      "25 - 29 Years",
      "30 - 34 Years",
      "35 - 39 Years",
      "40 - 44 Years",
      "45 - 49 Years",
      "50 - 54 Years",
      "55 + Years",
    ],
  },
  {
    id: "62a6f7edbf6f5d81231ced5d",
    question_text:
      "Which of the following categories have you browsed/ searched/ looked up online in the past 12 months?",
    question_type: "MULTI_SELECT",
    next_question_id: "62a6f7d6bf6f5d81231ced5c",
    options: [
      "Personal Care (Skincare, Haircare, Bodycare)",
      "Men's Grooming",
      "Food and Beverages",
      "Health and Wellness",
      "Makeup",
      "Fragrances",
      "Clothes and Accessories",
      "Baby Care",
      "Electronics",
      "Household Decor and Accessories",
      "Others",
    ],
  },
  {
    id: "62a6f7edbf6f5d81231ced51",
    question_text: "Do you buy online?",
    question_type: "SINGLE_SELECT",
    next_question_id: "62a6f7d6bf6f5d81231ced5c",
    options: [
      "Personal Care (Skincare, Haircare, Bodycare)",
      "Men's Grooming",
      "Food and Beverages",
    ],
  },
  {
    id: "62a6f7edbf6f5d81231ced52",
    question_text: "Would you consider buying online?",
    question_type: "SINGLE_SELECT",
    next_question_id: "62a6f7d6bf6f5d81231ced5c",
    options: [
      "Personal Care (Skincare, Haircare, Bodycare)",
      "Men's Grooming",
      "Food and Beverages",
    ],
  },
];

export const expressions = [
  { label: "None", value: "DEFAULT_TRUE" },
  { label: "SIMPLE_EXPRESSION", value: "SIMPLE_EXPRESSION" },
  { label: "AND_EXPRESSION", value: "AND_EXPRESSION" },
  { label: "OR_EXPRESSION", value: "OR_EXPRESSION" },
  { label: "NOT_EXPRESSION", value: "NOT_EXPRESSION" },
];

export const comparison = {
  SINGLE_SELECT: ["EQUAL", "NOT_EQUAL"],
  MULTI_SELECT: ["CAN_HAVE_CONTAINS", "DOES_NOT_CONTAINS", "IS_EXACTLY"],
  RANGE_SELECTION: ["EQUAL"],
};

export const res = {
  type: "AND_EXPRESSION",
  expression: [
    {
      type: "SIMPLE_EXPRESSION",
      expression: {
        question: "62a6ef76f4b287a7cb206e23",
        question_text: "What is your gender",
        comparison: "IS",
        value: "MALE",
      },
    },
    {
      type: "OR_EXPRESSION",
      expression: [
        {
          type: "SIMPLE_EXPRESSION",
          expression: {
            question: "62a6f7edbf6f5d81231ced51",
            question_text: "Do you buy online",
            comparison: "IS",
            value: "YES",
          },
        },
        {
          type: "SIMPLE_EXPRESSION",
          expression: {
            question: "62a6f7edbf6f5d81231ced52",
            question_text: "Would you consider buying online",
            comparison: "IS",
            value: "YES",
          },
        },
      ],
    },
  ],
};

export const textForKeys = {
  EQUAL: "IS",
  CAN_HAVE_CONTAINS: "CONTAINS",
  DOES_NOT_CONTAINS: "NOT CONTAINS",
  IS_EXACTLY: "IS EXACTLY",
};
