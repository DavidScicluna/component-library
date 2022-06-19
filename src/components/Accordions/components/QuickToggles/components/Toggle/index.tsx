import { FC, useContext } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import { ToggleProps } from './types';

import { AccordionsContext } from '../../../..';
import Button from '../../../../../Clickable/Button';
import IconButton from '../../../../../Clickable/IconButton';
import Icon from '../../../../../Icon';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { size as defaultSize } from '../../common/data/defaultPropValues';

const Toggle: FC<ToggleProps> = (props) => {
	const [isXs] = useMediaQuery('(max-width: 600px)');

	const { colorMode = defaultColorMode } = useContext<AccordionsContextType>(AccordionsContext);

	const {
		color = defaultColor,
		hasOpened = false,
		isDisabled = defaultIsDisabled,
		onToggle,
		size = defaultSize
	} = props;

	return isXs ? (
		<IconButton
			aria-label={hasOpened ? 'Hide all' : 'Show all'}
			color={color}
			colorMode={colorMode}
			isDisabled={isDisabled}
			onClick={() => onToggle()}
			size={size}
			variant='icon'
		>
			<Icon icon={hasOpened ? 'playlist_remove' : 'playlist_add_check'} />
		</IconButton>
	) : (
		<Button
			color={color}
			colorMode={colorMode}
			isDisabled={isDisabled}
			onClick={() => onToggle()}
			size={size}
			variant='text'
		>
			{hasOpened ? 'Hide all' : 'Show all'}
		</Button>
	);
};

export default Toggle;
