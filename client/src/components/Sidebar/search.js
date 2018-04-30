// Dependencies
import React from 'react';
import { Button } from 'reactstrap';

// Icon
import IconSearch from '../Icons/search'; 

function Search(props) {
  return (
    <div className="Search Hotel-title">
    	<IconSearch size={16} color="#157ab0" />
    	<label>Nombre de hotel</label>
		<div className="input-group mb-3">
		  <input type="text" className="form-control" placeholder="Ingrese el nombre del hotel" />		  
		  <Button className="btn-sm Btn-hotel">Aceptar</Button>		  
		</div>
    </div>
  )
}

export default Search;
