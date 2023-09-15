/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollOverlayArrowIconButton } from '../HorizontalScrollOverlayArrowIconButton';

import { __DEFAULT_HORIZONTAL_SCROLL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_SCROLL_AMOUNT__ } from './common/constants';
import { __KEYS_HORIZONTAL_SCROLL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	HorizontalScrollOverlayRightArrowIconButtonDefaultElement,
	HorizontalScrollOverlayRightArrowIconButtonElement,
	HorizontalScrollOverlayRightArrowIconButtonProps,
	HorizontalScrollOverlayRightArrowIconButtonRef
} from './common/types';

const HorizontalScrollOverlayRightArrowIconButton = forwardRef(function HorizontalScrollOverlayRightArrowIconButton<
	Element extends HorizontalScrollOverlayRightArrowIconButtonElement = HorizontalScrollOverlayRightArrowIconButtonDefaultElement
>(
	props: HorizontalScrollOverlayRightArrowIconButtonProps<Element>,
	ref: HorizontalScrollOverlayRightArrowIconButtonRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		scrollAmount = __DEFAULT_HORIZONTAL_SCROLL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_SCROLL_AMOUNT__,
		...rest
	} = props;

	const scroll = useGetHorizontalScrollAPIContext();
	const { getNextItem, scrollToItem, scrollNext } = scroll;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	const handleScrollNext = (): void => {
		switch (scrollAmount) {
			case 'single': {
				const nextItem = getNextItem();
				scrollToItem(nextItem?.entry?.target, 'smooth', 'nearest', 'nearest');
				break;
			}
			case 'multiple': {
				scrollNext();
				break;
			}
		}
	};

	return (
		<HorizontalScrollOverlayArrowIconButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='right'
			isVisible={isVisible}
			onClick={handleScrollNext}
		/>
	);
});

export default HorizontalScrollOverlayRightArrowIconButton;
