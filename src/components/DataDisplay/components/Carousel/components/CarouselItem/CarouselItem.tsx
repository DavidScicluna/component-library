import type { ElementType, ReactElement } from 'react';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-cool-inview';

import classNames from 'classnames';
import { debounce } from 'lodash-es';
import { useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Fade } from '@components/Animation';
import { Center } from '@components/Layout';

import { useCarouselContext } from '../../common/hooks';

import { __KEYS_CAROUSEL_ITEM_CLASS__ } from './common/keys';
import type { CarouselItemProps, CarouselItemRef } from './common/types';

const CarouselItem = forwardRef(function CarouselItem<Element extends ElementType>(
	props: CarouselItemProps<Element>,
	ref: CarouselItemRef<Element>
): ReactElement {
	const { variant } = useCarouselContext();

	const { observe, inView } = useInView({
		unobserveOnEnter: false,
		rootMargin: variant === 'overlay' ? '-20px' : '0px',
		threshold: [0.05, 0.5, 0.75, 0.95]
	});

	const refs = useMergeRefs(ref, observe);

	const { children, className = __DEFAULT_CLASSNAME__, id, onToggleIsVisible, ...rest } = props;

	const handleInView = debounce((): void => {
		onToggleIsVisible(inView);
	}, 250);

	useEffect(() => handleInView(), [inView]);

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
			<Fade w='100%' h='100%' in={inView} unmountOnExit={false}>
				{children}
			</Fade>
		</Center>
	);
});

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
