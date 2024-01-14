import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import type { IconButtonGroupItemChildrenProps } from '@components/Buttons';
import { IconButtonGroup, IconButtonGroupItem } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import { __KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type { CarouselArrowIconButtonGroupProps, CarouselArrowIconButtonGroupRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselArrowIconButtonGroup: PolymorphicComponentWithRef = forwardRef(function CarouselArrowIconButtonGroup<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: CarouselArrowIconButtonGroupProps<Element>, ref: CarouselArrowIconButtonGroupRef<Element>): ReactElement {
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
				{(props: IconButtonGroupItemChildrenProps) => renderLeftAction(variant, props)}
			</IconButtonGroupItem>
			<IconButtonGroupItem index={1} total={2}>
				{(props: IconButtonGroupItemChildrenProps) => renderRightAction(variant, props)}
			</IconButtonGroupItem>
		</IconButtonGroup>
	);
});

CarouselArrowIconButtonGroup.displayName = 'CarouselArrowIconButtonGroup';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselArrowIconButtonGroup<Element> {...props} />;
