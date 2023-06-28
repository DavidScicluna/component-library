import memoize from 'micro-memoize';

import { PickFrom } from '../../../../../common/types';
import { Color } from '../../../../../theme/types';
import { Strength } from '../types';

export const checkPasswordHasLowercase = memoize((password: string): boolean => !!password.match(/[a-z]+/));

export const checkPasswordHasUppercase = memoize((password: string): boolean => !!password.match(/[A-Z]+/));

export const checkPasswordHasNumbers = memoize((password: string): boolean => !!password.match(/[0-9]+/));

export const checkPasswordHasSpecial = memoize((password: string): boolean => !!password.match(/[$@#&!]+/));

export const getPasswordStrength = memoize((password: string): Strength => {
	let strength = 0;

	// Checking if password has lowercase characters
	if (checkPasswordHasLowercase(password)) {
		strength += 1;
	}

	// Checking if password has uppercase characters
	if (checkPasswordHasUppercase(password)) {
		strength += 1;
	}

	// Checking if password has numbers characters
	if (checkPasswordHasNumbers(password)) {
		strength += 1;
	}

	// Checking if password has special characters
	if (checkPasswordHasSpecial(password)) {
		strength += 1;
	}

	if (password.length < 8) {
		return 'weak';
	}
	switch (strength) {
		case 2:
			return 'average';
		case 3:
			return 'strong';
		case 4:
			return 'excellent';
		default:
			return 'weak';
	}
});

type GetPasswordStrengthColorReturn = PickFrom<Color, 'red' | 'yellow' | 'blue' | 'green'>;

export const getPasswordStrengthColor = memoize((strength: Strength): GetPasswordStrengthColorReturn => {
	switch (strength) {
		case 'weak':
			return 'red';
		case 'average':
			return 'yellow';
		case 'strong':
			return 'blue';
		case 'excellent':
			return 'green';
	}
});
