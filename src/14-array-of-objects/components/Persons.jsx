import persons from "./../data/persons.js";
import Person from "./Person.jsx";

function Persons () {
            return  <div className="d-flex flex-wrap flex-row justify-content-between">
                {persons.map((person) => (
                    <Person key={person.id} {...person} />
                ))}
            </div>
}

export default Persons