import React from "react";
import '../styles/list.css'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, firstName, lastName, age, image } = person;
        return(
        <article className="person" key={id}>
          <img src={image} alt={firstName} />
          <div>
            <h5>
             {firstName}
            </h5>
            <h5 className="last">{lastName}</h5>
            <p>{age} years</p>
          </div>
        </article>
        )
      })}
    </>
  );
};

export default List;
