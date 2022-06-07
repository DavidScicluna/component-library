import { transparentize } from 'color2k';

import { ArrowDarkStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme }: ArrowDarkStyleProps): Style => ({
	backgroundColor: theme.colors.gray[900],

	background: [
		transparentize(theme.colors.gray[900], 1),
		`-moz-linear-gradient(90deg, ${transparentize(theme.colors.gray[50], 1)} 50%, ${transparentize(
			theme.colors.gray[900],
			0
		)} 100%)`,
		`-webkit-linear-gradient(90deg, ${transparentize(theme.colors.gray[50], 1)} 50%, ${transparentize(
			theme.colors.gray[900],
			0
		)} 100%)`,
		`linear-gradient(90deg, ${transparentize(theme.colors.gray[50], 1)} 50%, ${transparentize(
			theme.colors.gray[900],
			0
		)} 100%)`
	],
	filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="${theme.colors.gray[50]}",endColorstr="${theme.colors.gray[900]}",GradientType=1)`
});
