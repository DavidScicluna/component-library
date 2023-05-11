import { FontSize } from '../../../../../theme/types';

export type SpinnerMode = 'puff' | 'sync' | 'pulse';

export type SpinnerProps = {
	color?: string;
	speed?: number;
	mode?: SpinnerMode;
	size?: FontSize | number;
};
