import withRedux from 'next-redux-wrapper';
import React from 'react';

import MainLayout from './../components/layouts/MainLayout';
import AboutContainer from './../containers/AboutContainer';
import {initStore} from './../store';

class About extends React.Component {

    render() {
        return (
            <MainLayout>
            	<AboutContainer />
            </MainLayout>
        );
    }
}

export default withRedux(initStore, null, null)(About);