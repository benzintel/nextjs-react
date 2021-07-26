import React from 'react';
import { connect } from 'react-redux';
import { addSometing, addAbout } from './../actions/AccountActions';


class IndexContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false
		};
	}

	componentDidMount() {
	}

	changeProps() {
		// Changes props in store  "C"
		let dateNow = new Date
		this.props.addSometing(dateNow.toLocaleString());
	}

	changePropsAbout() {
		// Changes props in store  "About"
		let dataChange = "BenzIntel"
		this.props.addAbout(dataChange);
	}

	// Fetchdata
	curlData() {
		fetch("URL", {
			method: 'POST',
			body: '',
			credentials: 'same-origin',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			}
		}).then(response => {
			if (response.status == 200) {

			}
		}, error => {
			console.error(error);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.changeProps.bind(this)}>Click</button>
				{ /* Show data in store */}
				{this.props.someting}
				<br/>
				<button onClick={this.changePropsAbout.bind(this)}>Click</button>
				{ /* Show data in store */}
				{this.props.about}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	someting: state.AccountReducer.someting,
	about: state.AccountReducer.about
})

const mapDispatchToProps = (dispatch) => ({
	addSometing: value => {
		dispatch(addSometing(value));
	},
	addAbout: value => {
		dispatch(addAbout(value))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexContainer);