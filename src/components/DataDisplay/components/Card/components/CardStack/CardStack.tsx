import { type ElementType, forwardRef, type ReactElement } from 'react';

import type { Transition } from 'framer-motion';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useConst } from '@common/hooks';
import type { AnimationConfig, PolymorphicDefaultElement } from '@common/types';
import { getAnimationConfig, getAnimationDuration } from '@common/utils';

import { Collapse } from '@components/Animation';
import { VStack } from '@components/Layout';

import { useCardContext } from '../../common/hooks';
import type { CardMouseEvent } from '../../common/types';
import { CardDivider } from '../CardDivider';

import { __KEYS_CARD_STACK_CLASS__ } from './common/keys';
import type { CardStackProps, CardStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardStack = forwardRef(function CardStack<Element extends ElementType = PolymorphicDefaultElement>(
	props: CardStackProps<Element>,
	ref: CardStackRef<Element>
): ReactElement {
	const { isCollapsable, isDivisible, isOpen, onHover, spacing: __DEFAULT_CARD_STACK_SPACING__ } = useCardContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		divider = <CardDivider />,
		onMouseEnter,
		onMouseLeave,
		spacing = __DEFAULT_CARD_STACK_SPACING__,
		...rest
	} = props;

	const duration = useConst<number>(getAnimationDuration('slow'));
	const config = useConst<AnimationConfig>(getAnimationConfig());
	const transition = useConst<Transition>({ enter: { ...config, duration }, exit: { ...config, duration } });

	const handleMouseEnter = (event: CardMouseEvent<Element>): void => {
		if (typeof onHover.on === 'function') {
			onHover.on();
		}

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: CardMouseEvent<Element>): void => {
		if (typeof onHover.off === 'function') {
			onHover.off();
		}

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Collapse w='100%' h='100%' in={isCollapsable ? isOpen : true} transition={transition}>
			<VStack<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_CARD_STACK_CLASS__, { [className]: !!className })}
				w='100%'
				h='100%'
				alignItems={alignItems}
				justifyContent={justifyContent}
				divider={isDivisible ? divider : undefined}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				spacing={spacing}
			>
				{children}
			</VStack>
		</Collapse>
	);
});

export default CardStack;
