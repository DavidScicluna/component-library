import type { ElementType, ReactNode } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { ButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

export type MessageActionsChildrenProps = Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;

export type MessageActionsProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'children'
> & {
	children: (props: MessageActionsChildrenProps) => ReactNode;
};

export type MessageActionsRef<Element extends ElementType = PolymorphicDefaultElement> = StackRef<Element>;
