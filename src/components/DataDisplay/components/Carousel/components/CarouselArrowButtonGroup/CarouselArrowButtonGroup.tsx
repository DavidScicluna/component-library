import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { ButtonGroup, ButtonGroupItem } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH__ } from './common/constants';
import { __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants/props';
import { __KEYS_CAROUSEL_ARROW_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { CarouselArrowButtonGroupProps, CarouselArrowButtonGroupRef } from './common/types';

const CarouselArrowButtonGroup = forwardRef(function CarouselArrowButtonGroup<Element extends ElementType>(
	props: CarouselArrowButtonGroupProps<Element>,
	ref: CarouselArrowButtonGroupRef<Element>
): ReactElement {
	const { spacing: __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_SPACING__, variant } = useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderLeftAction,
		renderRightAction,
		isAttached = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED__,
		isFullWidth = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH__,
		spacing = __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_SPACING__,
		...rest
	} = props;

	return (
		<ButtonGroup<Element>
			{...rest}
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
				{(props) => renderLeftAction(variant, props)}
			</ButtonGroupItem>
			<ButtonGroupItem index={1} total={2}>
				{(props) => renderRightAction(variant, props)}
			</ButtonGroupItem>
		</ButtonGroup>
	);
});

CarouselArrowButtonGroup.displayName = 'CarouselArrowButtonGroup';

export default CarouselArrowButtonGroup;
