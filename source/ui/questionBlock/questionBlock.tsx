import React from 'react';
import { ColoredBox, CloseButton, AnswerPopup } from '~source/ui';
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
    const [answerData, setAnswerData] = React.useState<QuestionResult | null>(
        null,
    );
    const [isAswered, setIsAswered] = React.useState<boolean>(false);

    const isTrueFalse = questionType === 'true false';

    const handleNextQuestion = (
        answer: Answer,
        userQuestion: string,
        userQuestionType: QuestionTypes,
    ) => {
        const correctAnswer = questionAnswers?.find((obj) => obj.isCorrect);
        const correctAnswerText = !isTrueFalse
            ? correctAnswer?.text || 'N/A'
            : correctAnswer?.text
            ? 'True'
            : 'False';
        const userInput = !isTrueFalse
            ? answer.text
            : answer.text
            ? 'True'
            : 'False';
        const userAnswer: QuestionResult = {
            itemId: topicId,
            userAnswer: userInput,
            correctAnswer: correctAnswerText,
            isCorrect: answer.isCorrect,
            question: userQuestion,
            questionType: userQuestionType,
        };

        setAnswerData(userAnswer);
        setIsAswered(true);
        setTimeout(() => next(userAnswer), answer.isCorrect ? 3000 : 5000);
    };

    React.useEffect(() => {
        const type: QuestionTypes = getQuestionType();
        const itemData = getItemData(topicId);
        const questionData = getQuestionAnswers(type, itemData);
        const questionString = getQuestion(type, questionData);

        setIsAswered(false);
        setTopic(itemData);
        setQuestionType(type);
        setQuestionAnswers(questionData || null);
        setQuestion(questionString || null);
    }, [topicId]);

    if (!topic || !questionType || !questionAnswers || !question)
        return <h1>Sorry, something went wrong</h1>;
    return (
        <section className={$.container}>
            <ColoredBox className={$.head}>
                <p
                    className={cx(
                        $.icon,
                        topic.iconType === 'text' && $.iconText,
                    )}
                >
                    {topic.icon}
                </p>
                <h1 className={$.question}>{question}</h1>
            </ColoredBox>

            <div className={cx($.answers)}>
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
                            isTrueFalse && answer.text && $.answerTrue,
                            isTrueFalse && !answer.text && $.answerFalse,
                        )}
                        key={answer.text}
                    >
                        {!isTrueFalse
                            ? answer.text
                            : answer.text
                            ? 'true'
                            : 'false'}
                    </button>
                ))}
            </div>
            {isAswered && answerData && <AnswerPopup data={answerData} />}
            <CloseButton />
        </section>
    );
};

export default QuestionBlock;
