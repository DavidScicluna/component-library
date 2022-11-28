import { FC, useContext } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import DummyButton from '../../../../../../Clickable/Buttons/DummyButton';
import DummyIconButton from '../../../../../../Clickable/IconButtons/DummyIconButton';
import Icon from '../../../../../../Icon';
import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { size as defaultSize } from '../../../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { useTheme } from '../../../../../../../common/hooks';
import { useDummyAccordionsContext } from '../../../../common/hooks';

import { DummyToggleProps } from './types';

const DummyToggle: FC<DummyToggleProps> = (props) => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { colorMode } = useDummyAccordionsContext();

	const { color = defaultColor, size = defaultSize } = props;

	return isSm ? (
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
