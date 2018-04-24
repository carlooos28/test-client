// Dependencies
import React from 'react';

// Css
import './search.css';

function Search(props) {
  return (
    <div className="Search">
    	<h4>Nombre de hotel</h4>
    	<input placeholder="Ingrese el nombre del hotel"/>
    	<button>Aceptar</button>
    </div>
  )
}

export default Search;
