import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
import play from "./assets/play.mp3";
import useSound from "use-sound";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [userName, setUserName]= useState(null);
  const [champ, setChamp]=useState(false);
  const [Play]=useSound(play);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "A: Phone",
          correct: false,
        },
        {
          text: "B:    Watches",
          correct: true,
        },
        {
          text: "C:    Luxurious Cars",
          correct: false,
        },
        {
          text: "D:    Sunglasses",
          correct: false,
        }
      ]
    },

    {
      id: 2,
      question: "When facebook was launched?",
      answers: [
        {
          text: "1990",
          correct: false,
        },
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2003",
          correct: false,
        },
        {
          text: "2000",
          correct: false,
        }
      ]
    },

    {
      id: 3,
      question: "During World War II, US soldiers used the first commercial aerosol cans to hold what?",
      answers: [
        {
          text: "Cleaning fluid",
          correct: false,
        },
        {
          text: "Antiseptic",
          correct: false,
        },
        {
          text: "Insecticide",
          correct: true,
        },
        {
          text: "Shaving cream",
          correct: false,
        }
      ]
    },

    {
      id: 4,
      question: "In the children's book series, where is Paddington Bear orinially from?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Peru",
          correct: true,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "Iceland",
          correct: false,
        }
      ]
    },

    {
      id: 5,
      question: "The earth is approximately how many miles away from the Sun?",
      answers: [
        {
          text: "9.3 million",
          correct: false,
        },
        {
          text: "39 million",
          correct: false,
        },
        {
          text: "93 million",
          correct: true,
        },
        {
          text: "193 million",
          correct: false,
        }
      ]
    },

    {
      id: 6,
      question: "What scientist first determined that human sight results from images projected onto retina?",
      answers: [
        {
          text: "Gaileo",
          correct: false,
        },
        {
          text: "Copernicus",
          correct: false,
        },
        {
          text: "Johannes Kepler",
          correct: true,
        },
        {
          text: "Issac Newton",
          correct: false,
        }
      ]
    },

    {
      id: 7,
      question: `Which insect shorted out an early supercomputer and inspired the term "computer bug"?`,
      answers: [
        {
          text: "Moth",
          correct: true,
        },
        {
          text: "Roach",
          correct: false,
        },
        {
          text: "Fly",
          correct: false,
        },
        {
          text: "Japanese beetle",
          correct: false,
        }
      ]
    },

    {
      id: 8,
      question: "Which of the following men does not have a chemical element named for him?",
      answers: [
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Niels Bohr",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: true,
        },
        {
          text: "Enrico Fermi",
          correct: false,
        }
      ]
    },

    {
      id: 9,
      question: "Which of the following landlocked countries is entirely contained within another country?",
      answers: [
        {
          text: "Lesotho",
          correct: true,
        },
        {
          text: "Burkina Faso",
          correct: false,
        },
        {
          text: "Mongolia",
          correct: false,
        },
        {
          text: "Luxembourg",
          correct: false,
        }
      ]
    },

    {
      id: 10,
      question: "Who is credited with inventing the first mass-produced helicopter?",
      answers: [
        {
          text: "Igor Sikorsky",
          correct: true,
        },
        {
          text: "Elmer Sperry",
          correct: false,
        },
        {
          text: "Ferdinand von Zeppelin",
          correct: false,
        },
        {
          text: "Gottlieb Daimler",
          correct: false,
        }
      ]
    },

    {
      id: 11,
      question: "What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?",
      answers: [
        {
          text: "N",
          correct: true,
        },
        {
          text: "A",
          correct: false,
        },
        {
          text: "U",
          correct: false,
        },
        {
          text: "L",
          correct: false,
        }
      ]
    },

    {
      id: 12,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Luxurious Cars",
          correct: false,
        },
        {
          text: "Sunglasses",
          correct: false,
        }
      ]
    },

    {
      id: 13,
      question: `Which of these U.S. Presidents appeared on the television series "Laugh-In"?`,
      answers: [
        {
          text: "Lyndon Johnson",
          correct: false,
        },
        {
          text: "Richard Nixon",
          correct: true,
        },
        {
          text: "Jimmy Carter",
          correct: false,
        },
        {
          text: "Gerald Ford",
          correct: false,
        }
      ]
    },

    {
      id: 14,
      question: `The song "God Bless America" was originally written for what 1918 musical?`,
      answers: [
        {
          text: `"Oh Lady! Lady!!`,
          correct: false,
        },
        {
          text: `"Yip, Yip, Yaphank"`,
          correct: true,
        },
        {
          text: `"Blossom Time"`,
          correct: false,
        },
        {
          text: `"Watch Your Step"`,
          correct: false,
        }
      ]
    },

    {
      id: 15,
      question: "Number of participants of this game approximately?",
      answers: [
        {
          text: "One Hundred",
          correct: false,
        },
        {
          text: "Zero",
          correct: false,
        },
        {
          text: "One Thousand",
          correct: false,
        },
        {
          text: "Ten Thousand",
          correct: false,
        }
      ]
    },


  ]

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    []);

  useEffect(() => {
    if(!champ){
      questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);

    }
    else 
    setEarned(moneyPyramid.find(m => m.id === 15).amount);

  }, [moneyPyramid, questionNumber,champ]);

  

  

  return (
    <div className="App">
      {userName ? (
        <>
          <div className={stop? "main active" : "main"} >
            {stop ? <h1 className="endText">You earned: {earned} </h1> : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setChamp={setChamp}
                  />
                </div>
              </>
            )}

          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((d) => (
                <li className={questionNumber === d.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{d.id}</span>
                  <span className="moneyListItemAmount">{d.amount}</span>
                </li>
              ))}



            </ul>
          </div>
        </>

      ) : <Start setUserName={setUserName} />}

    </div>
  );
}

export default App;
