import { FontSize } from '../../theme/types';

export type SpinnerMode = 'sync' | 'pulse';

export type SpinnerProps = {
	color?: string;
	speed?: number;
	mode?: SpinnerMode;
	size?: FontSize;
};
