// src/components/CardPizza.jsx
import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
            <p className="card-text"><small className="text-muted">Precio: ${price.toLocaleString()}</small></p>
            <button className="btn btn-primary">Ver más</button>
            <button className="btn btn-success">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
