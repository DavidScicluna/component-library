import { forwardRef, ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import { capitalize, startCase } from 'lodash-es';

import { useBoolean, useGetColor } from '../../../../../../../common/hooks';
import Tooltip from '../../../../../../Overlay/Tooltip';
import ScaleFade from '../../../../../../Transitions/ScaleFade';
import Icon from '../../../../../Icon';
import { useColorSwitcherContext } from '../../../../common/hooks';

import {
	ColorSwitcherScrollItemMouseEvent,
	ColorSwitcherScrollItemProps,
	ColorSwitcherScrollItemRef
} from './common/types';

const ColorSwitcherScrollItem = forwardRef<ColorSwitcherScrollItemRef, ColorSwitcherScrollItemProps>(
	function ColorSwitcherScrollItem(props, ref): ReactElement {
		const { color: defaultColor, colorMode: defaultColorMode } = useColorSwitcherContext();

		const {
			color = defaultColor,
			colorMode = defaultColorMode,
			hasTooltip = true,
			placement = 'top',
			isActive = false,
			onChange,
			onClick,
			onMouseEnter,
			onMouseLeave,
			...rest
		} = props;

		const [isHovering, setIsHovering] = useBoolean();

		const background = useGetColor({ color, colorMode, type: 'color' });

		const handleClick = (event: ColorSwitcherScrollItemMouseEvent): void => {
			onChange({ color });

			if (onClick) {
				onClick(event);
			}
		};

		const handleMouseEnter = (event: ColorSwitcherScrollItemMouseEvent): void => {
			if (hasTooltip) {
				setIsHovering.on();
			}

			if (onMouseEnter) {
				onMouseEnter(event);
			}
		};

		const handleMouseLeave = (event: ColorSwitcherScrollItemMouseEvent): void => {
			if (hasTooltip) {
				setIsHovering.off();
			}

			if (onMouseLeave) {
				onMouseLeave(event);
			}
		};

		return (
			<Tooltip
				aria-label={`${color} (tooltip)`}
				colorMode={colorMode}
				label={startCase(capitalize(color))}
				placement={placement}
				isOpen={hasTooltip && isHovering}
				isDisabled={!hasTooltip}
			>
				<Center
					{...rest}
					ref={ref}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					background={background}
				>
					<ScaleFade in={isActive} unmountOnExit={false}>
						<Icon
							color={colorMode === 'light' ? 'white' : 'black'}
							colorMode={colorMode}
							icon='check'
							category='filled'
							variant='transparent'
						/>
					</ScaleFade>
				</Center>
			</Tooltip>
		);
	}
);

export default ColorSwitcherScrollItem;
