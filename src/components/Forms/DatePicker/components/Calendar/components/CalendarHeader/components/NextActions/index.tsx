import { FC } from 'react';

import { HStack,useBoolean } from '@chakra-ui/react';

import IconButton from '../../../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import Tooltip from '../../../../../../../../Overlay/Tooltip';
import { colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { useDatePickerContext } from '../../../../../../common/hooks';

const NextActions: FC = () => {
	const { colorMode = defaultColorMode, dayzed } = useDatePickerContext();
	const { getForwardProps, calendars = [] } = dayzed || {};

	const [isHoveringYear, setIsHoveringYear] = useBoolean();
	const [isHoveringMonth, setIsHoveringMonth] = useBoolean();

	return (
		<HStack spacing={0}>
			<Tooltip
				aria-label='Go to next month (tooltip)'
				colorMode={colorMode}
				isOpen={isHoveringMonth}
				placement='top'
				label='Go to next month'
			>
				<IconButton
					{...(getForwardProps ? getForwardProps({ calendars }) : {})}
					aria-label='Go to next month'
					colorMode={colorMode}
					onMouseEnter={() => setIsHoveringMonth.on()}
					onMouseLeave={() => setIsHoveringMonth.off()}
					variant='icon'
				>
					<IconButtonIcon icon='keyboard_arrow_right' category='outlined' />
				</IconButton>
			</Tooltip>
			<Tooltip
				aria-label='Go to next year (tooltip)'
				colorMode={colorMode}
				isOpen={isHoveringYear}
				placement='top'
				label='Go to next year'
			>
				<IconButton
					{...(getForwardProps ? getForwardProps({ calendars, offset: 12 }) : {})}
					aria-label='Go to next year'
					colorMode={colorMode}
					onMouseEnter={() => setIsHoveringYear.on()}
					onMouseLeave={() => setIsHoveringYear.off()}
					variant='icon'
				>
					<IconButtonIcon icon='keyboard_double_arrow_right' category='outlined' />
				</IconButton>
			</Tooltip>
		</HStack>
	);
};

export default NextActions;
