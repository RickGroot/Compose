import { QuestionResult, QuestionTypes } from '~source/types/questions';

const getScore = (results: QuestionResult[]) => {
    const correctArray = results.map((result) => result.isCorrect);
    const correctCount = correctArray.filter(Boolean).length;
    const percentage = Math.round((correctCount / correctArray.length) * 100);
    return percentage;
};

const getXpByQuestionType = (type: QuestionTypes) => {
    if (type === 'choose right') return 10;
    if (type === 'choose wrong') return 12;
    if (type === 'true false') return 6;
    return 0;
};

const getXp = (results: QuestionResult[]) => {
    const correctAnswers = results.filter((result) => result.isCorrect);
    const sum = correctAnswers.reduce(
        (prev, answer) => prev + getXpByQuestionType(answer.questionType),
        0,
    );
    return sum;
};

export { getScore, getXp };
