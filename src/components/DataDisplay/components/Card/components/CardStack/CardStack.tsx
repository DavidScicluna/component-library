import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType, PolymorphicMouseEvent } from '@common/types';

import { Transition } from '@components/Animation';
import { VStack } from '@components/Layout';

import { useCardContext } from '../../common/hooks';
import { CardDivider } from '../CardDivider';

import { KEYS_CARD_STACK_CLASS } from './common/keys';
import type { CardStackProps, CardStackRef } from './common/types';

const CardStack = forwardRef(function CardStack<Element extends PolymorphicElementType>(
	props: CardStackProps<Element>,
	ref: CardStackRef<Element>
): JSX.Element {
	const { isCollapsable, isDivisible, isOpen, onHover, spacing: DEFAULT_CARD_STACK_SPACING } = useCardContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		divider = <CardDivider />,
		onMouseEnter,
		onMouseLeave,
		spacing = DEFAULT_CARD_STACK_SPACING,
		...rest
	} = props;

	const handleMouseEnter = (event: PolymorphicMouseEvent): void => {
		if (typeof onHover.on === 'function') {
			onHover.on();
		}

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: PolymorphicMouseEvent): void => {
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
				{...rest}
				ref={ref}
				className={classNames(KEYS_CARD_STACK_CLASS, { [className]: !!className })}
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
