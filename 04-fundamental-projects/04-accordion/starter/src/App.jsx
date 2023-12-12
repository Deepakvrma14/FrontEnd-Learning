import {useState} from "react";
import question from "./data";
import SingleQuestion from "./SingleQuestion";
const App = () => {
    const [questions, setQuestions] = useState(question);
    return(
        <main>
            <div className="container">
                <section className="info">
                    {questions.map((question) => {
                        return(
                            <SingleQuestion key={question.id} {...question} />
                        );
                    })}
                </section>
                
            </div>
        </main>
    
    );
};
export default App;
