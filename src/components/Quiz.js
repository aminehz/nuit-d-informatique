import React from "react";
import { useGlobalContext } from "../components/context";
import { useState, useEffect } from "react"
import SetupForm from "../components/SetupForm";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

function Quiz() {

    const [answered,setAnswered] = useState(false)
    const [answers,setAnswers] = useState([])

    const {
      waiting,
      loading,
      questions,
      index,
      correct,
      nextQuestion,
      checkAnswer,
    } = useGlobalContext();

    const { question, incorrect_answers, correct_answer } = questions[index];

    useEffect(() => {

    let temp = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 3);
    console.log(tempIndex);
    if (tempIndex === 2) {
      temp.push(correct_answer);
    } else {
      temp.push(temp[tempIndex]);
      temp[tempIndex] = correct_answer;
    }
      setAnswers(temp)
    }, [index])
    

    if (waiting) {
      return <SetupForm />;
    }

    if (loading) {
      return <Loading />;
    }


    


  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers:{correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className={!answered ? "answer-btn" : correct_answer === answer ? "answer-btn correct-deco": "answer-btn incorrect-deco"}
                  onClick={() => {
                    checkAnswer(correct_answer === answer);
                    setAnswered(true)
                  }}
                >{answer}
                {answered && <div>
                  {correct_answer === answer ? "✓" : "❌"}
                </div>}
                </button>
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={ e => {
          setAnswered(false)
          nextQuestion()
        }}>
          next question
        </button>
      </section>
    </main>
  );
}

export default Quiz;
