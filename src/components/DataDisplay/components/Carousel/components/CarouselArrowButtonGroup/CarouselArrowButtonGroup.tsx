import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { ButtonGroupItemChildrenProps, ButtonGroupProps } from '@components/Buttons';
import { ButtonGroup, ButtonGroupItem } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';

import {
	__DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_AS__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH__
} from './common/constants';
import { __KEYS_CAROUSEL_ARROW_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	CarouselArrowButtonGroupElement,
	CarouselArrowButtonGroupProps,
	CarouselArrowButtonGroupRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselArrowButtonGroup = forwardRef(function CarouselArrowButtonGroup<
	Element extends CarouselArrowButtonGroupElement
>(props: CarouselArrowButtonGroupProps<Element>, ref: CarouselArrowButtonGroupRef<Element>): ReactElement {
	const { spacing: __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_SPACING__, variant } = useCarouselContext();

	const {
		as = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_AS__,
		className = __DEFAULT_CLASSNAME__,
		renderLeftAction,
		renderRightAction,
		isAttached = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED__,
		isFullWidth = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH__,
		spacing = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_SPACING__,
		...rest
	} = props;

	return (
		<ButtonGroup
			{...(rest as ButtonGroupProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_ARROW_BUTTON_GROUP_CLASS__, { [className]: !!className })}
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
