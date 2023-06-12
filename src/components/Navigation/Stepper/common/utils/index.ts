import { FontSize, Space } from '../../../../../theme/types';
import { size as defaultSize } from '../default/props';
import { StepperSize } from '../types';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = { size: StepperSize };
export type GetSizeConfigReturn = {
	// minWidth: number; // In Pixels
	// maxWidth: number; // In Pixels
	titleFontSize: number; // In Pixels
	subtitleFontSize: number; // In Pixels
	statusFontSize: number; // In Pixels
	icon: {
		width: number; // In Pixels
		height: number; // In Pixels
		fontSize: FontSize; // In FontSize (Theme) Values;
	};
	padding: Padding;
	spacing: Space; // In Space (Theme) Values;
};

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				// minWidth: 336,
				// maxWidth: 441,
				titleFontSize: 14,
				subtitleFontSize: 10,
				statusFontSize: 6,
				icon: { width: 32, height: 32, fontSize: 'md' },
				padding: { x: 2, y: 1 },
				spacing: 1
			};
		case 'sm':
			return {
				// minWidth: 340,
				// maxWidth: 445,
				titleFontSize: 16,
				subtitleFontSize: 12,
				statusFontSize: 8,
				icon: { width: 40, height: 40, fontSize: 'xl' },
				padding: { x: 2.5, y: 1.25 },
				spacing: 1.5
			};
		case 'lg':
			return {
				// minWidth: 348,
				// maxWidth: 453,
				titleFontSize: 20,
				subtitleFontSize: 16,
				statusFontSize: 12,
				icon: { width: 52, height: 52, fontSize: '2xl' },
				padding: { x: 3.5, y: 1.75 },
				spacing: 2
			};
		case 'xl':
			return {
				// minWidth: 352,
				// maxWidth: 457,
				titleFontSize: 22,
				subtitleFontSize: 18,
				statusFontSize: 14,
				icon: { width: 56, height: 56, fontSize: '3xl' },
				padding: { x: 4, y: 2 },
				spacing: 2
			};
		default:
			return {
				// minWidth: 344,
				// maxWidth: 449,
				titleFontSize: 18,
				subtitleFontSize: 14,
				statusFontSize: 10,
				icon: { width: 46, height: 46, fontSize: '2xl' },
				padding: { x: 3, y: 1.5 },
				spacing: 1.5
			};
	}
};
