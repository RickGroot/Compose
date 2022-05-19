import React from 'react';
import { ColoredBox, CloseButton } from '~source/ui';
import {
    getItemData,
    getQuestion,
    getQuestionAnswers,
    getQuestionType,
} from '~source/core/getQuestion';
import { Topic } from '~source/types/data';
import { Answer, QuestionResult, QuestionTypes } from '~source/types/questions';
import cx from 'classnames';

import $ from './questionBlock.module.scss';

interface Props {
    topicId: number;
    next: (result: any) => void;
}

const QuestionBlock = ({ topicId, next }: Props) => {
    const [topic, setTopic] = React.useState<Topic | null>(null);
    const [questionType, setQuestionType] =
        React.useState<QuestionTypes | null>(null);
    const [questionAnswers, setQuestionAnswers] = React.useState<
        Answer[] | null
    >(null);
    const [question, setQuestion] = React.useState<string | null>(null);

    const handleNextQuestion = (
        answer: Answer,
        userQuestion: string,
        userQuestionType: QuestionTypes,
    ) => {
        const correctAnswer =
            questionAnswers?.find((obj) => obj.isCorrect)?.text || 'N/A';
        const userAnswer: QuestionResult = {
            itemId: topicId,
            userAnswer: answer.text,
            correctAnswer: correctAnswer,
            isCorrect: answer.isCorrect,
            question: userQuestion,
            questionType: userQuestionType,
        };

        next(userAnswer);
    };

    React.useEffect(() => {
        const type = getQuestionType();
        const itemData = getItemData(topicId);
        const questionData = getQuestionAnswers(type, itemData);
        const questionString = getQuestion(type, itemData);

        setTopic(itemData);
        setQuestionType(type);
        setQuestionAnswers(questionData || null);
        setQuestion(questionString || null);
    }, [topicId]);

    if (!topic || !questionType || !questionAnswers || !question)
        return <h1>Whoops</h1>;
    return (
        <section className={$.container}>
            <ColoredBox className={$.head}>
                <h1 className={$.question}>{question}</h1>
                <p
                    className={cx(
                        $.icon,
                        topic.iconType === 'text' && $.iconText,
                    )}
                >
                    {topic.icon}
                </p>
            </ColoredBox>

            <div className={$.answers}>
                {questionAnswers.map((answer, i) => (
                    <button
                        onClick={() =>
                            handleNextQuestion(answer, question, questionType)
                        }
                        className={cx(
                            $.answer,
                            i === 0 && $.answerBlue,
                            i === 1 && $.answerGreen,
                            i === 2 && $.answerRed,
                            i === 3 && $.answerYellow,
                        )}
                        key={answer.text}
                    >
                        {answer.text}
                        {answer.isCorrect && ' this one is good yes'}
                    </button>
                ))}
            </div>
            <CloseButton />
        </section>
    );
};

export default QuestionBlock;
