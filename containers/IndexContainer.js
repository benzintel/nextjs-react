import React from 'react';
import { connect } from 'react-redux';
import { addSometing } from './../actions/AccountActions';


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
		// Changes props in store  "C" -> "2"
		this.props.addSometing(2);
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
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	someting: state.AccountReducer.someting
})

const mapDispatchToProps = (dispatch) => ({
	addSometing: value => {
		dispatch(addSometing(value));
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexContainer);