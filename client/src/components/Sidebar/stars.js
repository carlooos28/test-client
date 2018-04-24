// Dependencies
import React from 'react';

// Css
import './stars.css';

function Stars(props) {
  return (
    <div className="Stars">
    	<h4>Estrellas</h4>
    	
    		<input type="checkbox" />
    		Todas las estrellas
    		<br/>
    		<input type="checkbox" />
    		<br/>
    		<input type="checkbox" />
    		<br/>
    		<input type="checkbox" />
    		<br/>
    		<input type="checkbox" />

    </div>
  )
}

export default Stars;
