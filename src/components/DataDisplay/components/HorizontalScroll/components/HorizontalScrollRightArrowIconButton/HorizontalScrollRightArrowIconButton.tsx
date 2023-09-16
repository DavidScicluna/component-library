import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollArrowIconButton } from '../HorizontalScrollArrowIconButton';

import { __DEFAULT_HORIZONTAL_SCROLL_RIGHT_ARROW_ICON_BUTTON_SCROLL_AMOUNT__ } from './common/constants';
import { __KEYS_HORIZONTAL_SCROLL_RIGHT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	HorizontalScrollRightArrowIconButtonDefaultElement,
	HorizontalScrollRightArrowIconButtonElement,
	HorizontalScrollRightArrowIconButtonProps,
	HorizontalScrollRightArrowIconButtonRef
} from './common/types';

const HorizontalScrollRightArrowIconButton = forwardRef(function HorizontalScrollRightArrowIconButton<
	Element extends HorizontalScrollRightArrowIconButtonElement = HorizontalScrollRightArrowIconButtonDefaultElement
>(
	props: HorizontalScrollRightArrowIconButtonProps<Element>,
	ref: HorizontalScrollRightArrowIconButtonRef<Element>
): ReactElement {
	const __DEFAULT_HORIZONTAL_SCROLL_RIGHT_ARROW_ICON_BUTTON_SCROLL__ = useGetHorizontalScrollAPIContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		scroll = __DEFAULT_HORIZONTAL_SCROLL_RIGHT_ARROW_ICON_BUTTON_SCROLL__,
		scrollAmount = __DEFAULT_HORIZONTAL_SCROLL_RIGHT_ARROW_ICON_BUTTON_SCROLL_AMOUNT__,
		...rest
	} = props;
	const { getNextItem, scrollToItem, scrollNext } = scroll || {};

	const { isDisabled } = useHorizontalScrollArrowState({ direction: 'right', scroll });

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
		<HorizontalScrollArrowIconButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_RIGHT_ARROW_ICON_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='right'
			isDisabled={isDisabled}
			onClick={handleScrollNext}
		/>
	);
});

export default HorizontalScrollRightArrowIconButton;
