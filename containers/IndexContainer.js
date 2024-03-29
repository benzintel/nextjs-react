import React from 'react';
import { connect } from 'react-redux';
import { addSometing, addAbout } from './../actions/AccountActions';

import ReactFullpage from '@fullpage/react-fullpage';
import MainButton from './../components/button/MainButton';


const mystyle = {
	color: "white",
	backgroundColor: "DodgerBlue",
	padding: "10px",
	fontFamily: "Arial"
};


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
			<ReactFullpage
				//fullpage options
				licenseKey = {'XXXXXXXXX'}
				scrollingSpeed = {1000} /* Options here */
				autoScrolling = {true}
				navigation = {true}
				showActiveTooltip = {true}

				render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section" style={mystyle}>
							<p>Section 1 (welcome to fullpage.js) {this.props.someting}</p>
							<MainButton primary onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</MainButton>
							<MainButton onClick={this.changeProps.bind(this)}>Change Store something</MainButton>
						</div>
						<div className="section">
							<p>Section 2</p>
						</div>
						<div className="section">
							<p>Section 3</p>
						</div>
						<div className="section">
							<p>Section 4</p>
						</div>
						<div className="section">
							<p>Section 5</p>
						</div>
					</ReactFullpage.Wrapper>
				);
				}}
			/>
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