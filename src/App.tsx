import "./App.css";

import { FC, useState } from "react";

type question = { key: string; value: string; isOpen: boolean };
const App: FC = () => {
  const [questions, setQuestions] = useState<question[]>([
    { key: "Question number 0", value: "answer0", isOpen: false },
    { key: "Question number 1", value: "answer1", isOpen: false },
    { key: "Question number 2", value: "answer2", isOpen: false },
    { key: "Question number 3", value: "answer3", isOpen: false },
    { key: "Question number 4", value: "answer4", isOpen: false },
    { key: "Question number 5", value: "answer5", isOpen: false },
    { key: "Question number 6", value: "answer6", isOpen: false },
    { key: "Question number 7", value: "answer7", isOpen: false },
    { key: "Question number 8", value: "answer8", isOpen: false },
    { key: "Question number 9", value: "answer9", isOpen: false },
  ]);

  return (
    <div>
      <div className="title">
        <h1>Frequently asked questions</h1>
        <h3>Hello! Didn't find what you are looking for? Please contact us.</h3>
      </div>
      {questions.map((element) => (
        <section>
          <div className="container">
            <div className="box">
              <div className="box-item" id="question1">
                <div
                  className="box-link"
                  onClick={() => {
                    setQuestions((prevState) =>
                      prevState.map((item) => {
                        if (item.key === element.key) {
                          return { ...element, isOpen: !item.isOpen };
                        }
                        return { ...item, isOpen: false };
                      })
                    );
                  }}
                >
                  <div> {element.key}</div>
                  <div className="box-icon-wrapper">
                    <div className="icon">{element.isOpen ? "▲" : "▼"}</div>
                  </div>
                </div>
                <div className={element.isOpen ? "answer-expanded" : "answer"}>
                  <p>{element.value}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;
