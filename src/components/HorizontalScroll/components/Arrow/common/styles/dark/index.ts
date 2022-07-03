import { transparentize } from 'color2k';

import { ArrowDarkStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme, direction }: ArrowDarkStyleProps): Style => ({
	// backgroundColor: theme.colors.gray[900],
	background: `linear-gradient(${direction === 'left' ? 90 : 270}deg, ${transparentize(
		theme.colors.gray[900],
		0
	)} 25%, ${transparentize(theme.colors.gray[900], 1)} 100%)`

	// background: [
	// 	toRgba(theme.colors.gray[900]),
	// 	`-moz-linear-gradient(${direction === 'left' ? 0 : 180}deg, ${transparentize(
	// 		theme.colors.gray[900],
	// 		0
	// 	)} 25%, ${transparentize(theme.colors.gray[900], 1)} 100%)`,
	// 	`-webkit-linear-gradient(${direction === 'left' ? 0 : 180}deg, ${transparentize(
	// 		theme.colors.gray[900],
	// 		0
	// 	)} 25%, ${transparentize(theme.colors.gray[900], 1)} 100%)`,
	// 	`linear-gradient(${direction === 'left' ? 90 : 270}deg, ${transparentize(
	// 		theme.colors.gray[900],
	// 		0
	// 	)} 25%, ${transparentize(theme.colors.gray[900], 1)} 100%)`
	// ],
	// filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="${theme.colors.gray[900]}",
	// endColorstr="${theme.colors.gray[900]}",GradientType=1)`
});
