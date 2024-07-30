import { useParams } from "react-router-dom"
import '../styles/quizz_page.scss'
import { useState } from "react"

export function QuizzPage () {

    const {id} = useParams()

    const QUIZZ = [
        { question : 'Quel est le personnage principal de Doom Eternal ?', choices : ['Doom Slayer', 'Bob'], answer : 'Doom Slayer' },
        { question : 'Dans quel chapitre de Celeste atteint on le sommet ?', choices : ['6', '7', '8', '9'], answer : '7' },
        { question : 'Quel personnage de Isaac n\'as pas de vie ?', choices : ['The Forgotten', 'The Lost', 'Apollyon'], answer : 'The Lost' }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [nextButton, setNextButton] = useState('none')

    const [response, setResponse] = useState({
        response: 'En attente...'
    })

    const answerGiven = (e) => {
        setResponse({...response, response: e.target.innerHTML})
        checkResponse(e.target.innerHTML, QUIZZ[currentQuestion].answer, score)
        setNextButton('block')
    }

    const nextQuestion = () => {
        if (currentQuestion === QUIZZ.length-1) {
            return
        } else {
            setCurrentQuestion(currentQuestion+1)
            setNextButton('none')
        }
    }

    const [score, setScore] = useState(0)

    const checkResponse = (givenResponse, goodResponse, score) => {
        if (givenResponse === goodResponse) {
            setScore(score+1)
        }
    }


    return <div>
        <h1>Quizz {id}</h1>
        <div className="container">
            <div className="quizz_interface">
                <div className="quizz_question">
                    {QUIZZ[currentQuestion].question}
                </div>
                <div className="quizz_response">
                    <AnswerMapping answers={QUIZZ[currentQuestion].choices} onChange={answerGiven} />
                </div>
                <button className="next_button" style={{display:nextButton}} onClick={nextQuestion}>Question suivante</button>
            </div>
        </div>

        Vous avez répondu : {response.response} <br />
        Votre score : {score}

    </div>
}

function AnswerMapping ({answers, onChange}) {

    const answerButton = []

    for (let answer of answers) {
        answerButton.push(<button className="response_option" onClick={onChange}>{answer}</button>)
    }

    return <>{answerButton}</>
}