const defaultState = {
	someting: 'C',
	about: 'About'
};

const AccountReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SOMETHING':
			return Object.assign({}, state, {
				someting: action.value
			});
		case 'CHANGE_ABOUT':
			return Object.assign({}, state, {
				about: action.value
			});
		default:
			return state;
	}
}

export default AccountReducer;