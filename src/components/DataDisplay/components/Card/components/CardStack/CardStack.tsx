import { type ElementType, forwardRef, type ReactElement } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Transition } from '@components/Animation';
import { VStack } from '@components/Layout';

import { useCardContext } from '../../common/hooks';
import type { CardMouseEvent } from '../../common/types';
import { CardDivider } from '../CardDivider';

import { __KEYS_CARD_STACK_CLASS__ } from './common/keys';
import type { CardStackProps, CardStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CardStack: PolymorphicComponentWithRef = forwardRef(function CardStack<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CardStackProps<Element>, ref: CardStackRef<Element>): ReactElement {
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
		<Transition w='100%' h='100%' duration='slow' transition='collapse' in={isCollapsable ? isOpen : true}>
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
		</Transition>
	);
});

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CardStack<Element> {...props} />;
