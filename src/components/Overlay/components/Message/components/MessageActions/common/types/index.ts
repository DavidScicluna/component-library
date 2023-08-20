import type { ElementType, ReactNode } from 'react';

import type { StackProps, StackRef } from '@components/Layout';

// export type MessageActionsChildrenProps = Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;
export type MessageActionsChildrenProps = any;

export type MessageActionsProps<Element extends ElementType> = Omit<StackProps<Element>, 'children'> & {
	children: (props: MessageActionsChildrenProps) => ReactNode;
};

export type MessageActionsRef<Element extends ElementType> = StackRef<Element>;
