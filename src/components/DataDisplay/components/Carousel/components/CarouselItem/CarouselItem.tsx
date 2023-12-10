import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';
import { useInView } from 'react-cool-inview';

import { useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Transition } from '@components/Animation';
import { Center } from '@components/Layout';

import { __KEYS_CAROUSEL_ITEM_CLASS__ } from './common/keys';
import type { CarouselItemProps, CarouselItemRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselItem: PolymorphicComponentWithRef = forwardRef(function CarouselItem<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CarouselItemProps<Element>, ref: CarouselItemRef<Element>): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, id, onToggleVisibility, ...rest } = props;

	const { observe, inView } = useInView({
		unobserveOnEnter: false,
		onChange: ({ inView }) => onToggleVisibility(inView)
	});

	const refs = useMergeRefs(ref, observe);

	return (
		<Center<Element>
			{...rest}
			ref={refs}
			id={id}
			className={classNames(__KEYS_CAROUSEL_ITEM_CLASS__, { [className]: !!className })}
			// w='100%'
			// h='100%'
			spacing={0}
		>
			<Transition w='100%' h='100%' transition='fade' in={inView} unmountOnExit={false}>
				{children}
			</Transition>
		</Center>
	);
});

CarouselItem.displayName = 'CarouselItem';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselItem<Element> {...props} />;
