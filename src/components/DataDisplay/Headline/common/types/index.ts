import type { ElementType, ReactNode } from 'react';

import type { CommonAppThemeProps, Space } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { TextProps } from '@components/Typography/components/Text/common/types';

export type HeadlineRenderProps = { w: string; h: string };

type HeadlineOtherProps = CommonAppThemeProps & {
	renderLeft?: (props: HeadlineRenderProps) => ReactNode;
	renderRight?: (props: HeadlineRenderProps) => ReactNode;
	renderCaption?: (props: TextProps) => ReactNode;
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	spacing?: Space;
};

export type HeadlineProps<Element extends ElementType> = BoxProps<Element, HeadlineOtherProps>;

export type HeadlineRef<Element extends ElementType> = BoxRef<Element>;
