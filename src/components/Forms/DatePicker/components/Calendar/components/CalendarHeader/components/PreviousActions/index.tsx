import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../../../../../common/default/props';
import { useBoolean } from '../../../../../../../../../common/hooks';
import IconButton from '../../../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import Tooltip from '../../../../../../../../Overlay/Tooltip';
import { useDatePickerContext } from '../../../../../../common/hooks';

const PreviousActions: FC = () => {
	const { colorMode = defaultColorMode, dayzed } = useDatePickerContext();
	const { getBackProps, calendars = [] } = dayzed || {};

	const [isHoveringYear, setIsHoveringYear] = useBoolean();
	const [isHoveringMonth, setIsHoveringMonth] = useBoolean();

	return (
		<HStack spacing={0}>
			<Tooltip
				aria-label='Go to previous year (tooltip)'
				colorMode={colorMode}
				isOpen={isHoveringYear}
				placement='top'
				label='Go to previous year'
			>
				<IconButton
					{...(getBackProps ? getBackProps({ calendars, offset: 12 }) : {})}
					aria-label='Go to previous year'
					colorMode={colorMode}
					onMouseEnter={() => setIsHoveringYear.on()}
					onMouseLeave={() => setIsHoveringYear.off()}
					variant='icon'
				>
					<IconButtonIcon icon='keyboard_double_arrow_left' category='outlined' />
				</IconButton>
			</Tooltip>
			<Tooltip
				aria-label='Go to previous month (tooltip)'
				colorMode={colorMode}
				isOpen={isHoveringMonth}
				placement='top'
				label='Go to previous month'
			>
				<IconButton
					{...(getBackProps ? getBackProps({ calendars }) : {})}
					aria-label='Go to previous month'
					colorMode={colorMode}
					onMouseEnter={() => setIsHoveringMonth.on()}
					onMouseLeave={() => setIsHoveringMonth.off()}
					variant='icon'
				>
					<IconButtonIcon icon='keyboard_arrow_left' category='outlined' />
				</IconButton>
			</Tooltip>
		</HStack>
	);
};

export default PreviousActions;
