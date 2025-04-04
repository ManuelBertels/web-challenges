console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

// ['as often as you like.', ...]
const lowerCaseAnswers = cards.map((elements) => {
  return elements.answer;
});
console.log(lowerCaseAnswers);

// ["How often can I use <header>? - As often as you like.", ...]
const questionsAndAnswersTogether = cards.map((elements) => {
  const question_answer = [elements.question, elements.answer];
  return question_answer;
});
console.log(questionsAndAnswersTogether);

const questionAndAnswer = null; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
