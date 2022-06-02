type QuestionTypes = 'choose right' | 'choose wrong' | 'true false';

type QuestionResult = {
    itemId: number;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    question: string;
    questionType: QuestionTypes;
};

type Answer = {
    text: string;
    isCorrect: boolean;
};

export type { QuestionTypes, QuestionResult, Answer };
