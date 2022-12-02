import React from "react";
import { useGlobalContext } from "../components/context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>TESTER MES CONNAISSANCES SUR LE VIH </h2>
          {/* {amount} */}
          
          {/* {category} */}
          
          {/* {difficulty} */}
    
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
