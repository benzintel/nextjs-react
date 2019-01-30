import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { connect } from 'react-redux';

import $ from 'jquery';

import stylesheet from './../../styles/index.scss';

class MainLayout extends React.Component {

	componentWillMount() {

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}


	render() {
		const { children } = this.props;
		return (
			<div>
				<Head>
					<title>Hi</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				{children}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLayout);
