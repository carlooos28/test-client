// Dependencies
import React from 'react';

// Icons
import IconStar from '../Icons/star';

function Stars(props) {

    function listStars(){
        let stars = [1,2,3,4,5],
            data  = [];

        for (let item = 0; item < stars.length; item++) {

            data.push(<div key={item}><input type="checkbox" />{checkStar(item)}</div>);
        }

        return data.reverse();
    }

    function checkStar(item){
        let data  = [];

        for (let element = 0; element <= item; element++) {
            data.push(<IconStar key={element} size={14} color="#ffcb05" />);
        }

        return data;

    }

  return ( 
    <div className="Stars Hotel-title"> 
    	<label>Estrellas</label>
        <div>
            <input type="checkbox" />
            <span className="All-stars">Todas las estrellas</span>
        </div>
        {listStars()}
    </div>
  )
}

export default Stars;
