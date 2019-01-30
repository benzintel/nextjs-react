import React from 'react';
import { connect } from 'react-redux';
import { addAbout } from './../actions/AccountActions';


class AboutContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false
		};
	}

	componentDidMount() {
	}

	changeProps() {
		// Changes props in store  "About" -> "About Click"
		this.props.addAbout('About Click');
	}

	render() {
		return (
			<div>
				<button onClick={this.changeProps.bind(this)}>Click</button>
				{ /* Show data in store */}
				{this.props.about}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	about: state.AccountReducer.about
})

const mapDispatchToProps = (dispatch) => ({
	addAbout: value => {
		dispatch(addAbout(value));
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AboutContainer);