import { useState } from "react";
import "./App.css";
import { questions } from "./Data/faqQuestion";

function App() {
  let [showAns, setShowAns] = useState(questions[0].id);


  let [count, setCount] = useState(1);
  let countDisplay = () => {
    setCount(count + 1);
  };

  let [pstatus, pStatus] = useState(false);
  return (
    <div className="App">
      <input
        className="border border-black p-2"
        placeholder="Enter text"
        type={pstatus ? "text" : "password"}
      />
      <button
        className="rounded-sm bg-red-800"
        onClick={() => pStatus(!pstatus)}
      >
        {pstatus ? "hide" : "show"}
      </button>
      <p>hello from aamir hussain</p>
      <div>{count}</div>
      <button className="rounded-md bg-red-500" onClick={countDisplay}>
        click
      </button>

      <div>
        <h1>Frequently Asked Questions(FAQs)</h1>
        <div className="faqouter">
          {questions.map((faqItems, i) => {
            return (
              <div className="faqItems">
                <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
                <p className={showAns === faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
