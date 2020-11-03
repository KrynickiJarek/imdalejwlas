import React, {useState, useEffect} from 'react';
import "./_newquestionadd.scss"


const NewQuestionAdd = () => {

    const [newQuestionContent, setNewQuestionContent] = useState("")
    const [newQuestionCode, setNewQuestionCode] = useState("")
    const [newAnswerContent, setNewAnswerContent] = useState("")
    const [newAnswerCode, setNewAnswerCode] = useState("")
    const [newTags, setNewTags] = useState("")//zmień na tablicę
    const [newNumber, setNewNumber] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const dataNewQuestion = {
            questionContent: newQuestionContent,
            questionCode: newQuestionCode,
            answerContent: newAnswerContent,
            answerCode: newAnswerCode,
            tags: newTags,
            number: newNumber,
        };

        const fetchNewQuestion = () => {
            fetch("http://localhost:3000/questions", {
                method: "POST",
                body: JSON.stringify(dataNewQuestion),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((r) => r.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
        };
        fetchNewQuestion()
        // useEffect(() => { ///useEffect był zakomentowany
        //     fetchNewCars();
        // }, []);
    }

// const handleEngineChange = (e) => {
//     const {name, value} = e.target;
//     setNewEngine(prevState => {
//         return {
//             ...prevState,
//             [name]: value
//         }
//     })
// }


    return (
        <form onSubmit={handleSubmit}>
            <label>Treść pytania<input type="text" value={newQuestionContent}
                                       onChange={(e) => setNewQuestionContent(e.target.value)}/>
            </label>
            <label>Kod pytania<input type="text" value={newQuestionCode}
                                     onChange={(e) => setNewQuestionCode(e.target.value)}/>
            </label>
            <label>Treść odpowiedzi<input type="text" value={newAnswerContent}
                                          onChange={(e) => setNewAnswerContent(e.target.value)}/>
            </label>
            <label>Kod odpowiedzi<input type="text" value={newAnswerCode}
                                        onChange={(e) => setNewAnswerCode(e.target.value)}/>
            </label>
            <label>Tagi<input type="text" value={newTags}
                              onChange={(e) => setNewTags(e.target.value)}/>
            </label>
            <label>Numer pytania<input type="number" value={newNumber}
                                       onChange={(e) => setNewNumber(e.target.value)}/>
            </label>
            <div><input type="submit" value="Dodaj"/></div>
        </form>

    )
}

export default NewQuestionAdd;
