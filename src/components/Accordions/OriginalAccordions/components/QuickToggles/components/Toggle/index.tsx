import { ReactElement, useContext } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import { AccordionsContext } from '../../../..';
import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import IconButton from '../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/data/defaultPropValues';
import {
	accordions as defaultAccordions,
	isDisabled as defaultIsDisabled,
	opened as defaultOpened,
	setOpened as defaultSetOpened
} from '../../../../common/data/defaultPropValues';
import { toggleAllAccordions } from '../../../../common/utils';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { size as defaultSize } from '../../common/data/defaultPropValues';
import { useTheme } from '../../../../../../../common/hooks';

import { ToggleProps } from './types';

const Toggle = <D,>(props: ToggleProps<D>): ReactElement => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const {
		accordions = defaultAccordions,
		colorMode = defaultColorMode,
		opened = defaultOpened,
		setOpened = defaultSetOpened
	} = useContext<AccordionsContextType<D>>(AccordionsContext);

	const { color = defaultColor, isDisabled = defaultIsDisabled, size = defaultSize } = props;

	const hasOpened = accordions.length === opened.length;

	const handleClick = () => {
		setOpened(toggleAllAccordions({ accordions, opened: opened.length }));
	};

	return isSm ? (
		<IconButton
			aria-label={hasOpened ? 'Hide all' : 'Show all'}
			color={color}
			colorMode={colorMode}
			isDisabled={isDisabled}
			onClick={handleClick}
			size={size}
			variant='icon'
		>
			<IconButtonIcon icon={hasOpened ? 'playlist_remove' : 'playlist_add_check'} />
		</IconButton>
	) : (
		<Button
			color={color}
			colorMode={colorMode}
			isDisabled={isDisabled}
			onClick={handleClick}
			size={size}
			variant='text'
		>
			{hasOpened ? 'Hide all' : 'Show all'}
		</Button>
	);
};

export default Toggle;
