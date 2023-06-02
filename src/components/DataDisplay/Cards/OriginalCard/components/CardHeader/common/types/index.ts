import { ReactNode } from 'react';

import { Space } from '../../../../../../../../theme/types';
import { CommonCardProps } from '../../../../../common/types';

export type CardHeaderCommonRenderProps = Pick<CommonCardProps, 'color' | 'colorMode'>;

export type CardHeaderRenderProps = CardHeaderCommonRenderProps & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type CardHeaderProps = {
	renderLeft?: (props: CardHeaderRenderProps) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps) => ReactNode;
	renderTitle?: (props: CardHeaderCommonRenderProps) => ReactNode;
	renderSubtitle?: (props: CardHeaderCommonRenderProps) => ReactNode;
	actions?: ReactNode;
	spacing?: Space;
};
