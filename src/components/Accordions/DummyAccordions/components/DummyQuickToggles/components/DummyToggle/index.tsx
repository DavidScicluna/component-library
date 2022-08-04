import { FC, useContext } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import { DummyAccordionsContext } from '../../../..';
import DummyButton from '../../../../../../Clickable/Buttons/DummyButton';
import DummyIconButton from '../../../../../../Clickable/IconButtons/DummyIconButton';
import Icon from '../../../../../../Icon';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/data/defaultPropValues';
import { size as defaultSize } from '../../../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../../../types';

import { DummyToggleProps } from './types';

const DummyToggle: FC<DummyToggleProps> = (props) => {
	const [isXs] = useMediaQuery('(max-width: 600px)');

	const { colorMode = defaultColorMode } = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	const { color = defaultColor, size = defaultSize } = props;

	return isXs ? (
		<DummyIconButton aria-label='Dummy Show all' color={color} colorMode={colorMode} size={size} variant='icon'>
			<Icon icon='playlist_add_check' />
		</DummyIconButton>
	) : (
		<DummyButton color={color} colorMode={colorMode} size={size} variant='text'>
			Dummy Show all
		</DummyButton>
	);
};

export default DummyToggle;
