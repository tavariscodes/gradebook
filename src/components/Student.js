import Score from "./Score";

const Student = ({ student }) => {
    const scoreComponents = student.scores.map(score => <Score score={score.score} date={score.date}/>);    // renders store components
    return(
        <div>
            <span>Name: {student.name}</span>
            <br/>
            <span>Bio: {student.bio}</span>
            {scoreComponents}
        </div>
    )
}

export default Student;