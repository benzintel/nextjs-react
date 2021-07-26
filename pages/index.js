import withRedux from 'next-redux-wrapper';
import React from 'react';

import MainLayout from './../components/layouts/MainLayout';
import IndexContainer from './../containers/IndexContainer';
import { initStore, wrapper } from './../store';

class Index extends React.Component {

	render() {
		return (
			<MainLayout>
				<IndexContainer />
			</MainLayout>
		);
	}
}

// export default withRedux(initStore)(Index);
export default wrapper.withRedux(Index);