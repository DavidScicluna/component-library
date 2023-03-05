import { ReactNode } from 'react';

import { ButtonProps } from '../../Clickable/Buttons/OriginalButton/types';
import { IconButtonIconProps } from '../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon/types';
import { IconButtonProps } from '../../Clickable/IconButtons/OriginalIconButton/types';
import { InputProps } from '../Input/types';

type SearchBarRenderClearPickedProps = 'colorMode' | 'onClick' | 'variant';
type SearchBarRenderSubmitPickedProps =
	| 'children'
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isRound'
	| 'type'
	| 'variant';

type SearchBarRenderClearProps = Pick<IconButtonIconProps, 'icon' | 'category'> &
	Pick<IconButtonProps, SearchBarRenderClearPickedProps>;
type SearchBarRenderSubmitProps = Pick<ButtonProps, SearchBarRenderSubmitPickedProps>;

type Omitted =
	| 'label'
	| 'helper'
	| 'onChange'
	| 'onSubmit'
	| 'isRequired'
	| 'renderLeftPanel'
	| 'renderRightPanel'
	| 'value';

export type SearchBarProps = Omit<InputProps, Omitted> & {
	renderClear?: (props: SearchBarRenderClearProps) => ReactNode;
	renderSubmit?: (props: SearchBarRenderSubmitProps) => ReactNode;
	initialQuery?: string;
	onClear?: () => void;
	onFilter?: (uery: string) => void;
	onSubmit?: (query: string) => void;
};
