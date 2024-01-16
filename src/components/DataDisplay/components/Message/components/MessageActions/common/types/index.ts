import type { ReactNode } from 'react';

import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { ButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

export type MessageActionsChildrenProps = Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;

export type MessageActionsProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	StackProps<Element>,
	'children'
> & {
	children: (props: MessageActionsChildrenProps) => ReactNode;
};

export type MessageActionsRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = StackRef<Element>;
