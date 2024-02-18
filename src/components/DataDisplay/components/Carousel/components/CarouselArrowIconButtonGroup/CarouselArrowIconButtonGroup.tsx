import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconButtonGroupItemChildrenProps, IconButtonGroupProps } from '@components/Buttons';
import { IconButtonGroup, IconButtonGroupItem } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';

import {
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_AS__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED__
} from './common/constants';
import { __KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	CarouselArrowIconButtonGroupElement,
	CarouselArrowIconButtonGroupProps,
	CarouselArrowIconButtonGroupRef
} from './common/types';

const CarouselArrowIconButtonGroup = forwardRef(function CarouselArrowIconButtonGroup<
	Element extends CarouselArrowIconButtonGroupElement
>(props: CarouselArrowIconButtonGroupProps<Element>, ref: CarouselArrowIconButtonGroupRef<Element>): JSX.Element {
	const { spacing: __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_SPACING__, variant } = useCarouselContext();

	const {
		as = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_AS__,
		className = __DEFAULT_CLASSNAME__,
		renderLeftAction,
		renderRightAction,
		isAttached = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED__,
		spacing = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_SPACING__,
		...rest
	} = props;

	return (
		<IconButtonGroup
			{...(rest as IconButtonGroupProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems='center'
			justifyContent='center'
			isAttached={isAttached}
			spacing={spacing}
		>
			<IconButtonGroupItem index={0} total={2}>
				{(props: IconButtonGroupItemChildrenProps) => renderLeftAction(variant, props)}
			</IconButtonGroupItem>
			<IconButtonGroupItem index={1} total={2}>
				{(props: IconButtonGroupItemChildrenProps) => renderRightAction(variant, props)}
			</IconButtonGroupItem>
		</IconButtonGroup>
	);
});

// CarouselArrowIconButtonGroup.displayName = 'CarouselArrowIconButtonGroup';

export default CarouselArrowIconButtonGroup;
