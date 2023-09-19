import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollArrowIconButton } from '../HorizontalScrollArrowIconButton';

import { __DEFAULT_HORIZONTAL_SCROLL_LEFT_ARROW_ICON_BUTTON_SCROLL_AMOUNT__ } from './common/constants';
import { __KEYS_HORIZONTAL_SCROLL_LEFT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	HorizontalScrollLeftArrowIconButtonDefaultElement,
	HorizontalScrollLeftArrowIconButtonElement,
	HorizontalScrollLeftArrowIconButtonProps,
	HorizontalScrollLeftArrowIconButtonRef
} from './common/types';

const HorizontalScrollLeftArrowIconButton = forwardRef(function HorizontalScrollLeftArrowIconButton<
	Element extends HorizontalScrollLeftArrowIconButtonElement = HorizontalScrollLeftArrowIconButtonDefaultElement
>(
	props: HorizontalScrollLeftArrowIconButtonProps<Element>,
	ref: HorizontalScrollLeftArrowIconButtonRef<Element>
): ReactElement {
	const __DEFAULT_HORIZONTAL_SCROLL_LEFT_ARROW_ICON_BUTTON_SCROLL__ = useGetHorizontalScrollAPIContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		scroll = __DEFAULT_HORIZONTAL_SCROLL_LEFT_ARROW_ICON_BUTTON_SCROLL__,
		scrollAmount = __DEFAULT_HORIZONTAL_SCROLL_LEFT_ARROW_ICON_BUTTON_SCROLL_AMOUNT__,
		...rest
	} = props;
	const { getPrevItem, scrollToItem, scrollPrev } = scroll || {};

	const { isDisabled } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	const handleScrollPrev = (): void => {
		switch (scrollAmount) {
			case 'single': {
				const prevItem = getPrevItem();
				scrollToItem(prevItem?.entry?.target, 'smooth', 'nearest', 'nearest');
				break;
			}
			case 'multiple': {
				scrollPrev();
				break;
			}
		}
	};

	return (
		<HorizontalScrollArrowIconButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_LEFT_ARROW_ICON_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

HorizontalScrollLeftArrowIconButton.displayName = 'HorizontalScrollLeftArrowIconButton';

export default HorizontalScrollLeftArrowIconButton;
