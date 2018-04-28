// Dependecies
import { Component } from 'react';

// Css
import './styles.css';

class Starts extends Component {
  render() {
    return (
	    <div className="Amenities">
	    	<img src={`icons/amenities/${this.props.amenities}.svg`} />
	    </div>
    );
  }
}

export default Starts;