import { transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';

import { ArrowLightStyleProps } from './types';

export default ({ theme, direction }: ArrowLightStyleProps): Style => ({
	// backgroundColor: theme.colors.gray[50],
	background: `linear-gradient(${direction === 'left' ? 90 : 270}deg, ${transparentize(
		theme.colors.gray[50],
		0
	)} 0%, ${transparentize(theme.colors.gray[50], 1)} 100%)`

	// background: [
	// 	toRgba(theme.colors.gray[50]),
	// 	`-moz-linear-gradient(${direction === 'left' ? 0 : 180}deg, ${transparentize(
	// 		theme.colors.gray[50],
	// 		0
	// 	)} 25%, ${transparentize(theme.colors.gray[50], 1)} 100%)`,
	// 	`-webkit-linear-gradient(${direction === 'left' ? 0 : 180}deg, ${transparentize(
	// 		theme.colors.gray[50],
	// 		0
	// 	)} 25%, ${transparentize(theme.colors.gray[50], 1)} 100%)`,
	// 	`linear-gradient(${direction === 'left' ? 90 : 270}deg, ${transparentize(
	// 		theme.colors.gray[50],
	// 		0
	// 	)} 25%, ${transparentize(theme.colors.gray[50], 1)} 100%)`
	// ],
	// filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="${theme.colors.gray[50]}"
	// ,endColorstr="${theme.colors.gray[50]}",GradientType=1)`
});
