import type { ReactNode } from 'react';

import type { PolymorphicElementType } from '@common/types';

import type { ButtonDefaultElement, ButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

export type MessageActionsChildrenProps = Pick<
	ButtonProps<ButtonDefaultElement>,
	'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'
>;

export type MessageActionsProps<Element extends PolymorphicElementType> = Omit<StackProps<Element>, 'children'> & {
	children: (props: MessageActionsChildrenProps) => ReactNode;
};

export type MessageActionsRef<Element extends PolymorphicElementType> = StackRef<Element>;
