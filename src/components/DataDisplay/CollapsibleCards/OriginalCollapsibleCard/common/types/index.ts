import { MouseEvent as ME, ReactNode } from 'react';

import { UseBooleanToggles } from '../../../../../../common/hooks/useBoolean';
import { Nullable } from '../../../../../../common/types';
import { CommonCollapsibleCardProps } from '../../../common/types';

export type CollapsibleCardMouseEvent = ME<HTMLDivElement, globalThis.MouseEvent>;

export type CollapsibleCardProps = CommonCollapsibleCardProps & {
	children: ReactNode;
	isOpen: boolean;
	onOpen: () => void;
};

export type CollapsibleCardRef = Nullable<HTMLDivElement>;

type Picked = 'color' | 'colorMode' | 'isOpen' | 'isDivisible' | 'spacing' | 'variant';

export type CollapsibleCardContext = Pick<CollapsibleCardProps, Picked> & {
	onHover: UseBooleanToggles;
};
