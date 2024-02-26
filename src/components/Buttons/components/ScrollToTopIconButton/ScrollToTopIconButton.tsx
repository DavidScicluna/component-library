import { forwardRef } from 'react';

import classNames from 'classnames';
import { debounce } from 'lodash-es';
import { useEventListener, useWindowSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';

import { Transition } from '@components/Animation';
import { Tooltip } from '@components/Overlay';

import type { IconButtonProps } from '../IconButton';
import { IconButton, IconButtonIcon } from '../IconButton';

import {
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_AS__,
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL__,
	__DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT__
} from './common/constants';
import { __KEYS_SCROLL_TO_TOP_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	ScrollToTopIconButtonElement,
	ScrollToTopIconButtonMouseEvent,
	ScrollToTopIconButtonProps,
	ScrollToTopIconButtonRef
} from './common/types';

const ScrollToTopIconButton = forwardRef(function ScrollToTopIconButton<Element extends ScrollToTopIconButtonElement>(
	props: ScrollToTopIconButtonProps<Element>,
	ref: ScrollToTopIconButtonRef<Element>
): JSX.Element {
	const { height: windowHeight = 0 } = useWindowSize();

	const {
		as = __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_AS__,
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
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);

			if (onClick) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onClick(event as any);
			}
		}
	};

	const handleScroll = debounce(() => {
		if (typeof window !== 'undefined') {
			const scroll = window.scrollY;

			if (scroll < windowHeight) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, 1000);

	useEventListener('scroll', () => handleScroll());

	return (
		<Transition transition='pop' in={isVisible}>
			<Tooltip
				colorMode={colorMode}
				aria-label={`${label} (tooltip)`}
				label={label}
				placement={placement}
				isDisabled={!hasTooltip}
			>
				<IconButton
					{...(rest as IconButtonProps<Element>)}
					as={as}
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
		</Transition>
	);
});

// ScrollToTopIconButton.displayName = 'ScrollToTopIconButton';

export default ScrollToTopIconButton;
