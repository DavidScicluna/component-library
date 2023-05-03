import { ReactNode } from 'react';

import { Space } from '../../../../../../../../theme/types';
import { CommonCardProps } from '../../../../../common/types';

export type DummyCardHeaderRenderProps = Pick<CommonCardProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type DummyCardHeaderProps = {
	renderLeft?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderRight?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderTitle?: () => ReactNode;
	renderSubtitle?: () => ReactNode;
	actions?: ReactNode;
	spacing?: Space;
};
