import { forwardRef, type ReactElement } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { useCardContext } from '../../common/hooks';
import { CardDivider } from '../CardDivider';

import { __KEYS_CARD_STACK_CLASS__ } from './common/keys';
import type { CardStackMouseEvent, CardStackProps, CardStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardStack = forwardRef(function CardStack<Element extends PolymorphicElementType>(
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

	const handleMouseEnter = (event: CardStackMouseEvent<Element>): void => {
		if (typeof onHover.on === 'function') {
			onHover.on();
		}

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: CardStackMouseEvent<Element>): void => {
		if (typeof onHover.off === 'function') {
			onHover.off();
		}

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Transition w='100%' h='100%' duration='slow' transition='collapse' in={isCollapsable ? isOpen : true}>
			<VStack
				{...(rest as VStackProps<Element>)}
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
		</Transition>
	);
});

// CardStack.displayName = 'CardStack';

export default CardStack;
