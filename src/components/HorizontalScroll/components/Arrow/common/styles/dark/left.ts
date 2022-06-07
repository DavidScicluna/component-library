import { transparentize } from 'color2k';

import { ArrowDarkStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme }: ArrowDarkStyleProps): Style => ({
	backgroundColor: theme.colors.gray[900],

	background: [
		transparentize(theme.colors.gray[900], 1),
		`-moz-linear-gradient(90deg, ${transparentize(theme.colors.gray[900], 0)} 0%, ${transparentize(
			theme.colors.gray[50],
			1
		)} 50%)`,
		`-webkit-linear-gradient(90deg, ${transparentize(theme.colors.gray[900], 0)} 0%, ${transparentize(
			theme.colors.gray[50],
			1
		)} 50%)`,
		`linear-gradient(90deg, ${transparentize(theme.colors.gray[900], 0)} 0%, ${transparentize(
			theme.colors.gray[50],
			1
		)} 50%)`
	],
	filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="${theme.colors.gray[900]}",endColorstr="${theme.colors.gray[50]}",GradientType=1)`
});
