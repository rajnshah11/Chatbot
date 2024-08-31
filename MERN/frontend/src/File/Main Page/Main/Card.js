import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col mb-6 ">
        <div className="card h-100 border-0">
          <div className="view overlay">
            <img
              src={require(`../../images/${props.imageurl}.jpg`)}
              className="img-fluid text-center h-100 w-100 "
              alt="image1"
            />
            <Link to="#">
              <div class="mask rgba-white-slight"></div>
            </Link>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.content}</p>
            <button type="submit" className="btn btn-primary ">
              <Link
                to={props.link}
                className=" text-white align-content-center text-decoration-none"
              >
                {props.button1}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
