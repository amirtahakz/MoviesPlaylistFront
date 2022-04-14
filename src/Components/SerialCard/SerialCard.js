import React, { Component } from "react";
import { Link } from "react-router-dom";

function SerialCard(params) {
  const data = params.data;
  const voteAverage = data.vote_average.toString().substr(0, 3);
  return (
    <div className="me-2">
      <Link to={"/"} onClick={() => {window.location.href="/SerialDetails/"+ data.id}} className="link">
        <span className="card movie-card">
          <img
            src={data.poster_path === null ? "../Assets/Images/MoviePosterError.png" : "https://image.tmdb.org/t/p/w500/" + data.poster_path}
            className="img-fluid card-img-top rounded-5 image-movie-card"
            alt={data.name}
            loading="lazy"
          />
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h3 className="card-text title-movie-card text-truncate">
                  {data.name}
                </h3>
              </div>
              <div className="col-12 d-flex flex-row">
                <img
                  src={"../Assets/Images/imdb.png"}
                  className="img-fluid rounded-3 image-imdb-main-movie-card"
                  alt={"imdb" + data.name}
                />
                <small className="main-small-text text-truncate">
                  {voteAverage}
                </small>
                <small className="main-small-text text-truncate">{data.first_air_date? data.first_air_date.substr(0, 4) : data.first_air_date}</small>
              </div>
            </div>
          </div>
        </span>
      </Link>
    </div>
  );
}

export default SerialCard;
