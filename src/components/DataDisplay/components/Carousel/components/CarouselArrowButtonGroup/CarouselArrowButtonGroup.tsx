import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { ButtonGroupItemChildrenProps, ButtonGroupProps } from '@components/Buttons';
import { ButtonGroup, ButtonGroupItem } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';

import {
	DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_AS,
	DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED,
	DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH
} from './common/constants';
import { KEYS_CAROUSEL_ARROW_BUTTON_GROUP_CLASS } from './common/keys';
import type {
	CarouselArrowButtonGroupElement,
	CarouselArrowButtonGroupProps,
	CarouselArrowButtonGroupRef
} from './common/types';

const CarouselArrowButtonGroup = forwardRef(function CarouselArrowButtonGroup<
	Element extends CarouselArrowButtonGroupElement
>(props: CarouselArrowButtonGroupProps<Element>, ref: CarouselArrowButtonGroupRef<Element>): JSX.Element {
	const { spacing: DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_SPACING, variant } = useCarouselContext();

	const {
		as = DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_AS,
		className = DEFAULT_CLASSNAME,
		renderLeftAction,
		renderRightAction,
		isAttached = DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED,
		isFullWidth = DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH,
		spacing = DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_SPACING,
		...rest
	} = props;

	return (
		<ButtonGroup
			{...(rest as ButtonGroupProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_ARROW_BUTTON_GROUP_CLASS, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems='center'
			justifyContent='center'
			isAttached={isAttached}
			isFullWidth={isFullWidth}
			spacing={spacing}
		>
			<ButtonGroupItem index={0} total={2}>
				{(props: ButtonGroupItemChildrenProps) => renderLeftAction(variant, props)}
			</ButtonGroupItem>
			<ButtonGroupItem index={1} total={2}>
				{(props: ButtonGroupItemChildrenProps) => renderRightAction(variant, props)}
			</ButtonGroupItem>
		</ButtonGroup>
	);
});

// CarouselArrowButtonGroup.displayName = 'CarouselArrowButtonGroup';

export default CarouselArrowButtonGroup;
