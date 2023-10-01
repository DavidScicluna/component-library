import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { IconButtonGroup, IconButtonGroupItem } from '@components/Buttons/components/IconButtonGroup';

import { useCarouselContext } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { CarouselArrowIconButtonGroupProps, CarouselArrowIconButtonGroupRef } from './common/types';

const CarouselArrowIconButtonGroup = forwardRef(function CarouselArrowIconButtonGroup<Element extends ElementType>(
	props: CarouselArrowIconButtonGroupProps<Element>,
	ref: CarouselArrowIconButtonGroupRef<Element>
): ReactElement {
	const { spacing: __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_SPACING__, variant } = useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderLeftAction,
		renderRightAction,
		isAttached = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED__,
		spacing = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_SPACING__,
		...rest
	} = props;

	return (
		<IconButtonGroup<Element>
			{...rest}
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
				{(props) => renderLeftAction(variant, props)}
			</IconButtonGroupItem>
			<IconButtonGroupItem index={1} total={2}>
				{(props) => renderRightAction(variant, props)}
			</IconButtonGroupItem>
		</IconButtonGroup>
	);
});

CarouselArrowIconButtonGroup.displayName = 'CarouselArrowIconButtonGroup';

export default CarouselArrowIconButtonGroup;
