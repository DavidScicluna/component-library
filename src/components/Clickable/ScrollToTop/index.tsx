import { FC, useCallback } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { capitalize, debounce } from 'lodash';
import { useWindowSize, useEventListener } from 'usehooks-ts';

import Tooltip from '../../Overlay/Tooltip';
import ScaleFade from '../../Transitions/ScaleFade';
import IconButton from '../IconButtons/OriginalIconButton';
import IconButtonIcon from '../IconButtons/OriginalIconButton/components/IconButtonIcon';
import { IconButtonMouseEvent } from '../IconButtons/OriginalIconButton/types';

import { ScrollToTopProps } from './types';

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
	const { height: windowHeight = 0 } = useWindowSize();

	const { color, colorMode, label = 'Scroll to the top', onClick, onMouseEnter, onMouseLeave, ...rest } = props;

	const [isVisible, setIsVisible] = useBoolean();
	const [isHovering, setIsHovering] = useBoolean();

	const handleClick = (event: IconButtonMouseEvent): void => {
		window.scrollTo(0, 0);

		if (onClick) {
			onClick(event);
		}
	};

	const handleMouseEnter = (event: IconButtonMouseEvent): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: IconButtonMouseEvent): void => {
		setIsHovering.off();

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
				aria-label={label}
				label={capitalize(label)}
				placement='left'
				isOpen={isHovering}
			>
				<IconButton
					{...rest}
					aria-label={label}
					color={color}
					colorMode={colorMode}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<IconButtonIcon icon='keyboard_double_arrow_up' category='outlined' />
				</IconButton>
			</Tooltip>
		</ScaleFade>
	);
};

export default ScrollToTop;
