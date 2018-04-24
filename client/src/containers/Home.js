// Dependencies
import { Component } from 'react';

// Components
import Layout from '../components/Layout';
import Header from '../components/Header';
import Content from '../components/Content';

class Home extends Component {

	render() { 

		return (
			<Layout>
				<Header />
					<Content />
			</Layout>

		)
	}
}

export default Home;