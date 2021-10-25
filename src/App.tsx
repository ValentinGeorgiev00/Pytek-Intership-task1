import "./App.css";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface CreateQuestionBoxProps {
  element: { key: string; value: string; index: number };
  idAnother: string;
  setIdAnother: Dispatch<SetStateAction<string>>;
}

const CreateQuestionBox: FC<CreateQuestionBoxProps> = ({
  element,
  idAnother,
  setIdAnother,
}) => {
  const [currentExtended, setCurrentExtended] = useState<string>("");
  const [isExtended, setIsExtended] = useState<boolean>(false);

  useEffect(() => {
    if (isExtended) {
      setIdAnother(`${element.index}`);
    }
  }, [isExtended, element.index, element.key, setIdAnother]);

  return (
    <section>
      <div className="container">
        <div className="box">
          <div className="box-item" id="question1">
            <div
              className="box-link"
              onClick={() => {
                setCurrentExtended(`${element.index}`);
                setIsExtended(!isExtended);
              }}
            >
              <div> {element.key}</div>
              <div className="box-icon-wrapper">
                <div className="icon">
                  {currentExtended === idAnother
                    ? isExtended
                      ? "▲"
                      : "▼"
                    : "▼"}
                </div>
              </div>
            </div>
            <div
              className={
                currentExtended === idAnother
                  ? isExtended
                    ? "answer-expanded"
                    : "answer"
                  : "answer"
              }
            >
              <p>{element.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: FC = () => {
  const [idAnother, setIdAnother] = useState<string>("");

  const quest = [
    { key: "question1", value: "answer1" },
    { key: "question2", value: "answer2" },
    { key: "question3", value: "answer3" },
  ];

  return (
    <div>
      <div className="title">
        <h1>Frequently asked questions</h1>
        <h3>Hello! Didn't find what you are looking for? Please contact us.</h3>
      </div>
      {quest.map((element, index) => (
        <CreateQuestionBox
          element={{ index, ...element }}
          idAnother={idAnother}
          setIdAnother={setIdAnother}
        />
      ))}
    </div>
  );
};

export default App;
