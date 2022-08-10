import React from "react";
import "../styles/Card.scss";

const Card = () => {
  return (
    <div class="container">
      <div class="card">
        <figure class="card__thumb">
          <img
            src="https://source.unsplash.com/75S9fpDJVdo/300x510"
            class="card__image"
          />
          <figcaption class="card__caption">
            <h3 class="card__title">Nasi Goreng</h3>
            <p class="card__snippet">
              Resep ini adalah resep nasi goreng cita rasa khas jawa
            </p>
            <a href="" class="card__button">
              Read more
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="card">
        <figure class="card__thumb">
          <img
            src="https://source.unsplash.com/75S9fpDJVdo/300x510"
            class="card__image"
          />
          <figcaption class="card__caption">
            <h3 class="card__title">Dimsum Daging Ayam</h3>
            <p class="card__snippet">
              Cocok untuk cemilan, cara masaknya simpel dan mudah
            </p>
            <a href="" class="card__button">
              Read more
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="card">
        <figure class="card__thumb">
          <img
            src="https://source.unsplash.com/75S9fpDJVdo/300x510"
            alt=""
            class="card__image"
          />
          <figcaption class="card__caption">
            <h3 class="card__title">Soto Ayam</h3>
            <p class="card__snippet">
              Resep soto ayam dengan cita rasa khas soto sokaraja
            </p>
            <a href="" class="card__button">
              Read more
            </a>
          </figcaption>
        </figure>
      </div>
      <div class="card">
        <figure class="card__thumb">
          <img
            src="https://source.unsplash.com/75S9fpDJVdo/300x510"
            alt=""
            class="card__image"
          />
          <figcaption class="card__caption">
            <h3 class="card__title">Soto Ayam</h3>
            <p class="card__snippet">
              Resep soto ayam dengan cita rasa khas soto sokaraja
            </p>
            <a href="" class="card__button">
              Read more
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Card;
