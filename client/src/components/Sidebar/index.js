// Dependecies
import { Component } from 'react';

// Components
import Search from './search';
import Stars from './stars';

// Css
import './styles.css';

class Sidebar extends Component {
  render() {
    return (
	    <div className="Sidebar col">
	    	<h4 className="Filters">Filtros</h4>
	    	<Search />
	    	<Stars />
	    </div>
    );
  }
}

export default Sidebar;