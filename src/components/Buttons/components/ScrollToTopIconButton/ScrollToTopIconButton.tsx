import { forwardRef } from 'react';

import classNames from 'classnames';
import { debounce } from 'lodash-es';
import { useEventListener, useWindowSize } from 'usehooks-ts';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicMouseEvent } from '@common/types';

import { Transition } from '@components/Animation';
import { Tooltip } from '@components/Overlay';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_AS,
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL,
	DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT
} from './common/constants';
import { useScrollToTopIconButtonResponsiveValues } from './common/hooks';
import { KEYS_SCROLL_TO_TOP_ICON_BUTTON_CLASS } from './common/keys';
import type {
	ScrollToTopIconButtonElement,
	ScrollToTopIconButtonProps,
	ScrollToTopIconButtonRef
} from './common/types';

const ScrollToTopIconButton = forwardRef(function ScrollToTopIconButton<Element extends ScrollToTopIconButtonElement>(
	props: ScrollToTopIconButtonProps<Element>,
	ref: ScrollToTopIconButtonRef<Element>
): JSX.Element {
	const { height: windowHeight = 0 } = useWindowSize();

	const {
		as = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		hasTooltip: hasTooltipProp = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT,
		onClick,
		...rest
	} = props;

	const {
		hasTooltip = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP,
		label = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL,
		placement = DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT
	} = useScrollToTopIconButtonResponsiveValues({
		hasTooltip: hasTooltipProp,
		label: labelProp,
		placement: placementProp
	});

	const [isVisible, setIsVisible] = useBoolean();

	const handleClick = (event: PolymorphicMouseEvent): void => {
		if (typeof window !== 'undefined') {
			setIsVisible.off();

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
					{...{ rest }}
					as={as}
					ref={ref}
					className={classNames(KEYS_SCROLL_TO_TOP_ICON_BUTTON_CLASS, {
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
