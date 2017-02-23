import test from 'ava';
import format from '.';

test('fail when string is missing', t => {
	t.throws(() => format(), 'Expected an input string, got undefined');
});

test('fail when params are missing', t => {
	t.throws(() => format('a'), 'Expected a params object, got undefined');
});

test('format string', t => {
	const input = 'Hey :name :surname';
	const params = {
		name: 'Steve',
		surname: 'Angello'
	};

	t.is(format(input, params), 'Hey Steve Angello');
});
