import { forwardRef, ReactElement, useCallback } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { debounce } from 'lodash-es';
import { useEventListener, useWindowSize } from 'usehooks-ts';

import { useProviderContext } from '../../../common/hooks';
import Tooltip from '../../Overlay/Tooltip';
import ScaleFade from '../../Transitions/ScaleFade';
import IconButton from '../IconButtons/OriginalIconButton';
import { IconButtonMouseEvent } from '../IconButtons/OriginalIconButton/common/types';
import IconButtonIcon from '../IconButtons/OriginalIconButton/components/IconButtonIcon';

import { ScrollToTopProps, ScrollToTopRef } from './common/types';

const ScrollToTop = forwardRef<ScrollToTopRef, ScrollToTopProps>(function ScrollToTop(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { height: windowHeight = 0 } = useWindowSize();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		'aria-label': aria = 'Scroll to the top Button',
		hasTooltip = true,
		label = 'Scroll to the top',
		placement = 'left',
		onClick,
		onMouseEnter,
		onMouseLeave,
		icon = 'keyboard_double_arrow_up',
		category = 'filled',
		...rest
	} = props;

	const [isVisible, setIsVisible] = useBoolean();
	const [isHovering, setIsHovering] = useBoolean();

	const handleClick = (event: IconButtonMouseEvent): void => {
		window.scrollTo(0, 0);

		if (onClick) {
			onClick(event);
		}
	};

	const handleMouseEnter = (event: IconButtonMouseEvent): void => {
		if (hasTooltip) {
			setIsHovering.on();
		}

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: IconButtonMouseEvent): void => {
		if (hasTooltip) {
			setIsHovering.off();
		}

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	const handleScroll = useCallback(
		debounce(() => {
			const scroll = window.scrollY;

			if (scroll < windowHeight) {
				setIsVisible.off();
				setIsHovering.off();
			} else {
				setIsVisible.on();
				setIsHovering.off();
			}
		}, 1000),
		[window.scrollY, windowHeight]
	);

	useEventListener('scroll', () => handleScroll());

	return (
		<ScaleFade in={isVisible}>
			<Tooltip
				colorMode={colorMode}
				aria-label={`${aria} (tooltip)`}
				label={label}
				placement={placement}
				isOpen={hasTooltip && isHovering}
				isDisabled={!hasTooltip}
			>
				<IconButton
					{...rest}
					ref={ref}
					aria-label={aria}
					color={color}
					colorMode={colorMode}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<IconButtonIcon icon={icon} category={category} />
				</IconButton>
			</Tooltip>
		</ScaleFade>
	);
});

export default ScrollToTop;
