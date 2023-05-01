import { ReactNode } from 'react';

import { ButtonProps } from '../../../../Clickable/Buttons/OriginalButton/common/types';
import { IconButtonProps } from '../../../../Clickable/IconButtons/OriginalIconButton/common/types';
import { IconButtonIconProps } from '../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon/common/types';
import { InputProps } from '../../../Input/common/types';

type SearchBarRenderClearPickedProps = 'colorMode' | 'onClick' | 'variant';
type SearchBarRenderSubmitPickedProps =
	| 'children'
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isRound'
	| 'type'
	| 'variant';

export type SearchBarRenderClearProps = Pick<IconButtonIconProps, 'icon' | 'category'> &
	Pick<IconButtonProps, SearchBarRenderClearPickedProps>;
export type SearchBarRenderSubmitProps = Pick<ButtonProps, SearchBarRenderSubmitPickedProps>;

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
