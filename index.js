'use strict';

module.exports = (input, params) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected an input string, got ${typeof input}`);
	}

	if (typeof params !== 'object') {
		throw new TypeError(`Expected a params object, got ${typeof params}`);
	}

	const keys = Object.keys(params);

	keys.forEach(key => {
		const value = params[key];

		input = input.replace(`:${key}`, value);
	});

	return input;
};
