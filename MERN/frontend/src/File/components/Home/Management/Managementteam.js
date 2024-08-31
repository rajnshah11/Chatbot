import React from "react";
const Management_team = (props) => {
  return (
    <>
      <div className="col-12 col-md-4 text-center">
        <img
          src={require(`../../../images/${props.imageurl}.jpg`)}
          className="img-fluid  "
          alt="Image1"
        />
        <h5 className=" p-3  text-center">{props.name}</h5>
        <p className="mb-3 text-center ">{props.content}</p>
      </div>
    </>
  );
};
export default Management_team;
