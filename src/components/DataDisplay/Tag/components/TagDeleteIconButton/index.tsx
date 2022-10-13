import { FC, useContext } from 'react';

import { TagContext } from '../..';
import IconButton from '../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import {
	colorMode as defaultColorMode,
	size as defaultSize,
	variant as defaultVariant
} from '../../common/data/defaultPropValues';
import { TagContext as TagContextType } from '../../types';

import { TagDeleteIconButtonProps, TagEvent } from './types';

const TagDeleteIconButton: FC<TagDeleteIconButtonProps> = (props) => {
	const {
		colorMode = defaultColorMode,
		isDisabled: isDisabledContext,
		size = defaultSize,
		variant = defaultVariant
	} = useContext<TagContextType>(TagContext);

	const { isDisabled: isDisabledProp = false, onDelete, ...rest } = props;

	return (
		<IconButton
			{...rest}
			aria-label='Delete Tag'
			color={variant === 'contained' ? (colorMode === 'light' ? 'white' : 'black') : 'gray'}
			colorMode={colorMode}
			isDisabled={isDisabledContext || isDisabledProp}
			onClick={(event: TagEvent) => {
				event.preventDefault();
				event.stopPropagation();

				onDelete(event);
			}}
			size={size}
			variant='icon'
			sx={{ p: 0.5 }}
		>
			<IconButtonIcon icon='clear' />
		</IconButton>
	);
};

export default TagDeleteIconButton;
