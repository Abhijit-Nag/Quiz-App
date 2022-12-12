import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
import tw_th from "../assets/tw_th.mp3";
import h_th from "../assets/h_th.mp3";
import Main_Theme from "../assets/Main_Theme.mp3";
import sixty_four from "../assets/sixty_four.mp3";
import lets_play from "../assets/lets_play.mp3";




export default function Trivia({ data, setStop, setQuestionNumber, questionNumber, setChamp}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState(null);
    const [letsPlay] = useSound(lets_play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const [oneOne] = useSound(h_th);
    const [twoThree] = useSound(tw_th);
    const [sixFour] = useSound(sixty_four);


    useEffect(() => {
        letsPlay();
        
        
    }, [letsPlay]);

    


    // useEffect(()=>{
        
    //     question.id <6 && oneOne();
        
    // },[oneOne, twoThree, question]);


    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);

    }

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);



    const handleClick = (a, question) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(1000, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
            if(a.correct) {
                if(question.id<5) oneOne();
                else{
                    if(question.id>5 && question.id <11)twoThree();
                    else{
                        sixFour();
                    }
                }
            }
        });

        delay(4000, () => {
            if (a.correct) {
                correctAnswer();
                if(question.id === 15) {
                    setChamp(true);
                    setStop(true);
                }
                else{
                   delay(2000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                }); 
                }
                

            }
            else {
                wrongAnswer();
                delay(2000, () => {
                    setStop(true);
                });

            }
        });
    };



    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
           
            <div className="answers">
                {question?.answers.map((a) => (
                    <div
                        className={selectedAnswer === a ? className : "answer"}
                        onClick={() => handleClick(a, question)}
                    >
                        {a.text}
                    </div>
                ))}


            </div>
        </div>
    )
}
