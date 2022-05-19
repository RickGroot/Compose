import data from '~source/data/data';
import { Topic } from '~source/types/data';
import { Answer, QuestionTypes } from '~source/types/questions';

const getRandomFromArray = (arr: any[]) =>
    arr[Math.floor(Math.random() * arr.length)];
const shuffleArray = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

const getItemData = (id: number) => {
    return data[id];
};

const getQuestionType = () => {
    const questionTypes: QuestionTypes[] = ['choose right', 'choose wrong'];
    const randomType = getRandomFromArray(questionTypes);
    return randomType;
};

const getQuestionAnswers = (questionType: QuestionTypes, topic: Topic) => {
    const { is, isNot } = topic;

    if (questionType === 'choose right') {
        const rightAnswer = { text: getRandomFromArray(is), isCorrect: true };
        const wrongAnswers = shuffleArray(isNot)
            .slice(0, 3)
            .map((topic) => ({ text: topic, isCorrect: false }));
        const answers: Answer[] = shuffleArray([rightAnswer, ...wrongAnswers]);

        return answers;
    }
    if (questionType === 'choose wrong') {
        const wrongAnswer = {
            text: getRandomFromArray(isNot),
            isCorrect: true,
        };
        const rightAnswers = shuffleArray(is)
            .slice(0, 3)
            .map((topic) => ({ text: topic, isCorrect: false }));
        const answers: Answer[] = shuffleArray([wrongAnswer, ...rightAnswers]);

        return answers;
    }
    return [];
};

const getQuestion = (questionType: QuestionTypes, topic: Topic) => {
    if (questionType === 'choose right') return 'Which is true?';
    if (questionType === 'choose wrong') return 'Which is NOT correct?';
    return '';
};

export { getItemData, getQuestionType, getQuestionAnswers, getQuestion };
