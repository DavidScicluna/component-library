import { FC, useContext } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import { DummyToggleProps } from './types';

import { DummyAccordionsContext } from '../../../..';
import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import IconButton from '../../../../../../Clickable/IconButton';
import Icon from '../../../../../../Icon';
import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../OriginalAccordions/common/data/defaultPropValues';
import { size as defaultSize } from '../../../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../../../types';

const DummyToggle: FC<DummyToggleProps> = (props) => {
	const [isXs] = useMediaQuery('(max-width: 600px)');

	const { colorMode = defaultColorMode } = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	const { color = defaultColor, size = defaultSize } = props;

	return isXs ? (
		<IconButton
			aria-label='Dummy Show all'
			color={color}
			colorMode={colorMode}
			isDisabled
			size={size}
			variant='icon'
		>
			<Icon icon='playlist_add_check' />
		</IconButton>
	) : (
		<Button color={color} colorMode={colorMode} isDisabled size={size} variant='text'>
			Dummy Show all
		</Button>
	);
};

export default DummyToggle;
