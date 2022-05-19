type QuestionTypes = 'choose right' | 'choose wrong';

type QuestionResult = {
    itemId: number;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
};

type Answer = {
    text: string;
    isCorrect: boolean;
};

export type { QuestionTypes, QuestionResult, Answer };
