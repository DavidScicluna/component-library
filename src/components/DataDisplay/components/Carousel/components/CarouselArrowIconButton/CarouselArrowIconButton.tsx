import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { IconButton, IconButtonIcon } from '@components/Buttons';
import { Tooltip } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';
import type { CarouselArrowDirection } from '../../common/types';

import {
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL__
} from './common/constants';
import { __KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselArrowIconButtonDefaultElement,
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselArrowIconButton: PolymorphicComponentWithRef = forwardRef(function CarouselArrowIconButton<
	Element extends CarouselArrowIconButtonElement = CarouselArrowIconButtonDefaultElement
>(props: CarouselArrowIconButtonProps<Element>, ref: CarouselArrowIconButtonRef<Element>): ReactElement {
	const {
		color: __DEFAULT_ARROW_ICON_BUTTON_COLOR__,
		colorMode: __DEFAULT_ARROW_ICON_BUTTON_COLORMODE__,
		orientation
	} = useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_ARROW_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_ARROW_ICON_BUTTON_COLORMODE__,
		direction: d,
		hasTooltip: t = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
		label: l,
		placement = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT__,
		...rest
	} = props;

	const direction = useGetResponsiveValue<CarouselArrowDirection>(d);
	const hasTooltip = useGetResponsiveValue<boolean>(t);

	const label = useMemo<string>(() => {
		return l
			? l
			: orientation === 'horizontal'
			  ? direction === 'left'
					? __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL__
					: __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL__
			  : direction === 'left'
			    ? __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL__
			    : __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL__;
	}, [direction, l, orientation]);

	return (
		<Tooltip
			// color='gray'
			colorMode={colorMode}
			aria-label={`${label} (tooltip)`}
			label={label}
			placement={placement}
			isDisabled={!hasTooltip}
		>
			<IconButton<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS__, { [className]: !!className })}
				aria-label={label}
				color={color}
				colorMode={colorMode}
			>
				<IconButtonIcon
					icon={
						orientation === 'horizontal'
							? direction === 'left'
								? 'chevron_left'
								: 'chevron_right'
							: direction === 'left'
							  ? 'expand_less'
							  : 'expand_more'
					}
					category='filled'
				/>
			</IconButton>
		</Tooltip>
	);
});

CarouselArrowIconButton.displayName = 'CarouselArrowIconButton';

export default <
	Element extends CarouselArrowIconButtonElement = CarouselArrowIconButtonDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselArrowIconButton<Element> {...props} />;
