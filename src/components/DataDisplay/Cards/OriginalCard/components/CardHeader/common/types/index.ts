import { ReactNode } from 'react';

import { Space } from '../../../../../../../../theme/types';
import { CommonCardProps } from '../../../../../common/types';

export type CardHeaderRenderProps = Pick<CommonCardProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type CardHeaderProps = {
	renderLeft?: (props: CardHeaderRenderProps) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps) => ReactNode;
	renderTitle?: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	actions?: ReactNode;
	spacing?: Space;
};
