import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconButtonGroupItemChildrenProps, IconButtonGroupProps } from '@components/Buttons';
import { IconButtonGroup, IconButtonGroupItem } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';

import {
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_AS,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED
} from './common/constants';
import { KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS } from './common/keys';
import type {
	CarouselArrowIconButtonGroupElement,
	CarouselArrowIconButtonGroupProps,
	CarouselArrowIconButtonGroupRef
} from './common/types';

const CarouselArrowIconButtonGroup = forwardRef(function CarouselArrowIconButtonGroup<
	Element extends CarouselArrowIconButtonGroupElement
>(props: CarouselArrowIconButtonGroupProps<Element>, ref: CarouselArrowIconButtonGroupRef<Element>): JSX.Element {
	const { spacing: DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_SPACING, variant } = useCarouselContext();

	const {
		as = DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_AS,
		className = DEFAULT_CLASSNAME,
		renderLeftAction,
		renderRightAction,
		isAttached = DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED,
		spacing = DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_SPACING,
		...rest
	} = props;

	return (
		<IconButtonGroup
			{...(rest as IconButtonGroupProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS, { [className]: !!className })}
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
