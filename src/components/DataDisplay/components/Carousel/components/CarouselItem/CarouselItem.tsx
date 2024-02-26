import { forwardRef } from 'react';
import { useInView } from 'react-cool-inview';

import classNames from 'classnames';
import { useMergeRefs } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { KEYS_CAROUSEL_ITEM_CLASS } from './common/keys';
import type { CarouselItemProps, CarouselItemRef } from './common/types';

const CarouselItem = forwardRef(function CarouselItem<Element extends PolymorphicElementType>(
	props: CarouselItemProps<Element>,
	ref: CarouselItemRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, id, onToggleVisibility, ...rest } = props;

	const { observe, inView } = useInView({
		unobserveOnEnter: false,
		onChange: ({ inView }) => onToggleVisibility(inView)
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const refs = useMergeRefs(ref, observe as any);

	return (
		<Center
			{...(rest as CenterProps<Element>)}
			ref={refs}
			id={id}
			className={classNames(KEYS_CAROUSEL_ITEM_CLASS, { [className]: !!className })}
			spacing={0}
		>
			<Transition w='100%' h='100%' transition='fade' in={inView} unmountOnExit={false}>
				{children}
			</Transition>
		</Center>
	);
});

// CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
