import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { debounce } from 'lodash-es';
import { useEventListener, useWindowSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';

import { Pop } from '@components/Animation';
import { HoverOverlay } from '@components/Overlay/components/HoverOverlay';
import { Tooltip } from '@components/Overlay/components/Tooltip';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL__,
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT__
} from './common/constants';
import { __KEYS_SCROLL_TO_TOP_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	ScrollToTopIconButtonDefaultElement,
	ScrollToTopIconButtonElement,
	ScrollToTopIconButtonMouseEvent,
	ScrollToTopIconButtonProps,
	ScrollToTopIconButtonRef
} from './common/types';

const ScrollToTopIconButton = forwardRef(function ScrollToTopIconButton<
	Element extends ScrollToTopIconButtonElement = ScrollToTopIconButtonDefaultElement
>(props: ScrollToTopIconButtonProps<Element>, ref: ScrollToTopIconButtonRef<Element>): ReactElement {
	const { height: windowHeight = 0 } = useWindowSize();

	const {
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		hasTooltip = __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP__,
		label = __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL__,
		placement = __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT__,
		onClick,
		...rest
	} = props;

	const [isVisible, setIsVisible] = useBoolean();

	const handleClick = (event: ScrollToTopIconButtonMouseEvent<Element>): void => {
		window.scrollTo(0, 0);

		if (onClick) {
			onClick(event);
		}
	};

	const handleScroll = debounce(() => {
		const scroll = window.scrollY;

		if (scroll < windowHeight) {
			setIsVisible.off();
		} else {
			setIsVisible.on();
		}
	}, 1000);

	useEventListener('scroll', () => handleScroll());

	return (
		<Pop in={isVisible}>
			<HoverOverlay>
				{(isHovering) => (
					<Tooltip
						// color='gray'
						colorMode={colorMode}
						aria-label={`${label} (tooltip)`}
						label={label}
						placement={placement}
						isOpen={hasTooltip && isHovering}
					>
						<IconButton<Element>
							{...rest}
							ref={ref}
							className={classNames(__KEYS_SCROLL_TO_TOP_ICON_BUTTON_CLASS__, {
								[className]: !!className
							})}
							aria-label={label}
							color={color}
							colorMode={colorMode}
							onClick={handleClick}
						>
							<IconButtonIcon icon='keyboard_double_arrow_up' category='filled' />
						</IconButton>
					</Tooltip>
				)}
			</HoverOverlay>
		</Pop>
	);
});

ScrollToTopIconButton.displayName = 'ScrollToTopIconButton';

export default ScrollToTopIconButton;