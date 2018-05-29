export const addSometing = (value) => {
	return {
		type: 'SOMETHING',
		value: value
	}
}

export const addAbout = (value) => {
	return {
		type: 'CHANGE_ABOUT',
		value: value
	}
}