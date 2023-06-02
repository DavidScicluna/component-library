import { ReactNode } from 'react';

import { Space } from '../../../../../../../../theme/types';
import { CommonCardProps } from '../../../../../common/types';

export type DummyCardHeaderCommonRenderProps = Pick<CommonCardProps, 'color' | 'colorMode'>;

export type DummyCardHeaderRenderProps = DummyCardHeaderCommonRenderProps & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type DummyCardHeaderProps = {
	renderLeft?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderRight?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderTitle?: (props: DummyCardHeaderCommonRenderProps) => ReactNode;
	renderSubtitle?: (props: DummyCardHeaderCommonRenderProps) => ReactNode;
	actions?: ReactNode;
	spacing?: Space;
};
