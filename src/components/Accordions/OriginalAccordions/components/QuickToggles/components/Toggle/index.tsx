import { ReactElement } from 'react';

import { useMediaQuery } from '@chakra-ui/react';

import { useTheme } from '../../../../../../../common/hooks';
import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import IconButton from '../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { isDisabled as defaultIsDisabled } from '../../../../common/data/defaultPropValues';
import { useAccordionsContext } from '../../../../common/hooks';
import { toggleAllAccordions } from '../../../../common/utils';
import { size as defaultSize } from '../../common/data/defaultPropValues';

import { ToggleProps } from './types';

const Toggle = <D,>(props: ToggleProps<D>): ReactElement => {
	const theme = useTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const { accordions, colorMode, opened, onSetOpened } = useAccordionsContext<D>();

	const { color = defaultColor, isDisabled = defaultIsDisabled, size = defaultSize } = props;

	const hasOpened = accordions.length === opened.length;

	const handleClick = () => {
		if (typeof onSetOpened === 'function') {
			onSetOpened(toggleAllAccordions({ accordions, opened: opened.length }));
		}
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
