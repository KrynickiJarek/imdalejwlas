import React, {useState, useEffect} from 'react';
import "./_newquestionadd.scss"


const NewQuestionAdd = () => {


    const [allCurrTags, setAllCurrTags] = useState([]);
    const [filteredTags, setFilteredTags] = useState([]);

    const [newQuestionContent, setNewQuestionContent] = useState("")
    const [newQuestionCode, setNewQuestionCode] = useState("")
    const [newAnswerContent, setNewAnswerContent] = useState("")
    const [newAnswerCode, setNewAnswerCode] = useState("")
    const [newTagOne, setNewTagOne] = useState("(wybierz)")
    const [newTagTwo, setNewTagTwo] = useState("(wybierz)")
    const [newTagThree, setNewTagThree] = useState("(wybierz)")

    const [tagLabel, setTagLabel] = useState("Tagi")
    const [firstTagSelected, setFirstTagSelected] = useState("")
    const [secondTagSelected, setSecondTagSelected] = useState("")
    const [secondTag, setSecondTag] = useState(false);
    const [thirdTagSelected, setThirdTagSelected] = useState("")
    const [thirdTag, setThirdTag] = useState(false);

    useEffect(() => {
        fetchTags();
    }, []);


    const fetchTags = () => {
        // fetch("http://localhost:3000/questions")
        fetch("https://my-json-server.typicode.com/KrynickiJarek/FakeJsonRestAPI/questions")
            .then((r) => r.json())
            .then((data) => {
                data.forEach(el => {
                    setAllCurrTags(prev => [...prev, ...el.tags])
                });
            })
            .catch((err) => console.log(err));
    };

    const filtrTags = () => {
        allCurrTags.forEach(tag => {
            if (!filteredTags.includes(tag)) {
                setFilteredTags(prev => [...prev, tag])
            }
        })
    }
    filtrTags();
    // console.log(filteredTags);

    const fetchNewQuestion = (dataNewQuestion) => {
        // fetch("http://localhost:3000/questions", {
        fetch("https://my-json-server.typicode.com/KrynickiJarek/FakeJsonRestAPI/questions", {
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


    const handleSubmit = (e) => {
        e.preventDefault()

        let dataNewQuestion;


        if ((newTagTwo === "" || newTagTwo === "(wybierz)") && (newTagThree === "" || newTagThree === "(wybierz)")) {
            dataNewQuestion = {
                difficulty: 1,
                questionContent: newQuestionContent,
                questionCode: newQuestionCode,
                answerContent: newAnswerContent,
                answerCode: newAnswerCode,
                tags: [newTagOne]
            }
        } else if (newTagThree === "" || newTagThree === "(wybierz)") {
            dataNewQuestion = {
                difficulty: 1,
                questionContent: newQuestionContent,
                questionCode: newQuestionCode,
                answerContent: newAnswerContent,
                answerCode: newAnswerCode,
                tags: [newTagOne, newTagTwo]
            }
        } else {
            dataNewQuestion = {
                difficulty: 1,
                questionContent: newQuestionContent,
                questionCode: newQuestionCode,
                answerContent: newAnswerContent,
                answerCode: newAnswerCode,
                tags: [newTagOne, newTagTwo, newTagThree]
            }
        }


        fetchNewQuestion(dataNewQuestion);

        setNewQuestionContent("")
        setNewQuestionCode("")
        setNewAnswerContent("")
        setNewAnswerCode("")
        setNewTagOne("")
        setNewTagTwo("")
        setNewTagThree("")
        setFirstTagSelected("(wybierz)")
        setSecondTagSelected("(wybierz)")
        setThirdTagSelected("(wybierz)")
        setSecondTag(false)
        setThirdTag(false)

        fetchTags();
        filtrTags();
    }

    const [addRemoveTagSelectTwo, setAddRemoveTagSelectTwo] = useState("fas fa-plus-circle")
    const [addRemoveTagSelectThree, setAddRemoveTagSelectThree] = useState("fas fa-plus-circle")

    const handleAddSecondTag = () => {
        setSecondTag(prev => !prev);
        setTagLabel("Pierwszy tag")
        window.scrollTo(0, document.body.scrollHeight)
        addRemoveTagSelectTwo==="fas fa-plus-circle"?
            setAddRemoveTagSelectTwo("fas fa-minus-circle")
            :setAddRemoveTagSelectTwo("fas fa-plus-circle")
    }

    const handleAddThirdTag = () => {
        setThirdTag(prev => !prev);
        window.scrollTo(0, document.body.scrollHeight)
        addRemoveTagSelectThree==="fas fa-plus-circle"?
            setAddRemoveTagSelectThree("fas fa-minus-circle")
            :setAddRemoveTagSelectThree("fas fa-plus-circle")
    }
    const handleSelectedTagOne = e => {
        setFirstTagSelected(e.target.value);
        setNewTagOne(e.target.value);
    }
    const handleSelectedTagTwo = e => {
        setSecondTagSelected(e.target.value);
        setNewTagTwo(e.target.value);
    }
    const handleSelectedTagThree = e => {
        setThirdTagSelected(e.target.value);
        setNewTagThree(e.target.value);
    }





    return (
        <form onSubmit={handleSubmit} className="newQuestion_form">
            <h2 className="header_form">Dodaj nowe pytanie</h2>
            <label className="textareaLabels">Treść pytania<textarea value={newQuestionContent}
               placeholder="Pole obowiązkowe. Maksymalnie 4 linie po 60 znaków!" wrap="hard"  cols="57" rows="4" maxLength="240" required

                                          onChange={(e) => setNewQuestionContent(e.target.value)}/>
            </label>
            <label className="textareaLabels">Kod pytania<textarea value={newQuestionCode}
               placeholder="Pole nieobowiązkowe. Maksymalnie 6 linii po 60 znaków!" wrap="hard"  cols="57" rows="6" maxLength="360"
                                     onChange={(e) => setNewQuestionCode(e.target.value)}/>
            </label>
            <label className="textareaLabels">Treść odpowiedzi<textarea value={newAnswerContent}
               placeholder="Pole obowiązkowe. Maksymalnie 4 linie po 60 znaków!" wrap="hard"  cols="57" rows="4" maxLength="240" required
                                          onChange={(e) => setNewAnswerContent(e.target.value)}/>
            </label>
            <label className="textareaLabels">Kod odpowiedzi<textarea value={newAnswerCode}
               placeholder="Pole nieobowiązkowe. Maksymalnie 6 linii po 60 znaków!" wrap="hard"  cols="57" rows="6" maxLength="360"
                                        onChange={(e) => setNewAnswerCode(e.target.value)}/>
            </label>

            <label className="selectLabels"><p className="tagLabel">{tagLabel}</p>
                <select value={firstTagSelected} onChange={handleSelectedTagOne}>
                    <option>(wybierz)</option>
                    {filteredTags.sort().map((tag, i) => (
                        <option key={i}>{tag}</option>
                    ))}
                    <option>>Nowy Tag</option>
                </select>
                {firstTagSelected === ">Nowy Tag" && (
                    <input
                        type="text"
                        placeholder="wpisz tag"
                        maxLength="15"
                        value={newTagOne}
                        onChange={(e) => setNewTagOne(e.target.value)}
                    />
                )}
                <button type="button" onClick={handleAddSecondTag}><i className={addRemoveTagSelectTwo}/></button>

            </label>
            {secondTag && (
                <>
                    <label className="selectLabels"><p className="tagLabel">Drugi tag</p>
                        <select value={secondTagSelected} onChange={handleSelectedTagTwo}>
                            <option>(wybierz)</option>
                            {filteredTags.sort().map((tag, i) => (
                                <option key={i}>{tag}</option>
                            ))}
                            <option>>Nowy Tag</option>
                        </select>
                        {secondTagSelected === ">Nowy Tag" && (
                            <input
                                type="text"
                                placeholder="wpisz tag"
                                maxLength="15"
                                value={newTagTwo}
                                onChange={(e) => setNewTagTwo(e.target.value)}
                            />
                        )}
                        <button type="button" onClick={handleAddThirdTag}><i className={addRemoveTagSelectThree}/></button>
                        {/*<button type="button" onClick={handleAddSecondTag}>-</button>*/}
                    </label>
                </>
            )}
            {thirdTag && (
                <>
                    <label className="selectLabels"><p className="tagLabel">Trzeci tag</p>
                        <select value={thirdTagSelected} onChange={handleSelectedTagThree}>
                            <option>(wybierz)</option>
                            {filteredTags.sort().map((tag, i) => (
                                <option key={i}>{tag}</option>
                            ))}
                            <option>>Nowy Tag</option>
                        </select>
                        {thirdTagSelected === ">Nowy Tag" && (
                            <input
                                type="text"
                                placeholder="wpisz tag"
                                maxLength="15"
                                value={newTagThree}
                                onChange={(e) => setNewTagThree(e.target.value)}
                            />
                        )}
                        {/*<button type="button" onClick={handleAddThirdTag}><i className="fas fa-minus-circle"/></button>*/}
                        {/*<button type="button" onClick={handleAddThirdTag}><i className="fas fa-plus-circle"/></button>*/}
                    </label>
                </>
            )}
            <div><input className="addButtonStyle" type="submit" value="Dodaj"/></div>
        </form>

    )
}

export default NewQuestionAdd;

