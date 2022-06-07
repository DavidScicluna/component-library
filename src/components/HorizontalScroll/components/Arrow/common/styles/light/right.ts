import { transparentize } from 'color2k';

import { ArrowLightStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme }: ArrowLightStyleProps): Style => ({
	backgroundColor: theme.colors.gray[50],

	background: [
		transparentize(theme.colors.gray[50], 1),
		`-moz-linear-gradient(90deg, ${transparentize(theme.colors.gray[900], 1)} 50%, ${transparentize(
			theme.colors.gray[50],
			0
		)} 100%)`,
		`-webkit-linear-gradient(90deg, ${transparentize(theme.colors.gray[900], 1)} 50%, ${transparentize(
			theme.colors.gray[50],
			0
		)} 100%)`,
		`linear-gradient(90deg, ${transparentize(theme.colors.gray[900], 1)} 50%, ${transparentize(
			theme.colors.gray[50],
			0
		)} 100%)`
	],
	filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="${theme.colors.gray[900]}",endColorstr="${theme.colors.gray[50]}",GradientType=1)`
});
