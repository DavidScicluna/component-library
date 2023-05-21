import { ReactNode } from 'react';

import { PopoverProps } from '@chakra-ui/react';

import { CommonThemeProps, NoUndefinedField } from '../../../../../common/types';

type PopperRenderActionProps = NoUndefinedField<
	Pick<PopperProps, 'color' | 'colorMode' | 'isOpen' | 'onOpen' | 'onClose'>
>;

type Omitted = 'arrowSize' | 'arrowShadowColor' | 'isOpen' | 'onOpen' | 'onClose';

export type PopperProps = Omit<PopoverProps, Omitted> & {
	children: ReactNode;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	renderAction: (props: PopperRenderActionProps) => ReactNode;
} & CommonThemeProps;
