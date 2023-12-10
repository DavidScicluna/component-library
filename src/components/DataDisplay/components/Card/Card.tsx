import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { useFocus } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__, __DEFAULT_USE_BOOLEAN_TOGGLES__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { PushableOverlay } from '@components/Overlay';
import { VisuallyHidden } from '@components/VisuallyHidden';

import {
	__DEFAULT_CARD_ID__,
	__DEFAULT_CARD_IS_ACTIVE__,
	__DEFAULT_CARD_IS_CLICKABLE__,
	__DEFAULT_CARD_IS_COLLAPSABLE__,
	__DEFAULT_CARD_IS_DISABLED__,
	__DEFAULT_CARD_IS_DIVISIBLE__,
	__DEFAULT_CARD_IS_FIXED__,
	__DEFAULT_CARD_IS_HOVERING__,
	__DEFAULT_CARD_IS_OPEN__,
	__DEFAULT_CARD_IS_OUTLINED__,
	__DEFAULT_CARD_RADIUS__,
	__DEFAULT_CARD_VARIANT__
} from './common/constants';
import { useCardResponsiveValues } from './common/hooks';
import { __KEYS_CARD_CLASS__ } from './common/keys';
import type { CardContext as CardContextType, CardMouseEvent, CardProps, CardRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const CardContext = createContext<CardContextType>({
	isCollapsable: __DEFAULT_CARD_IS_COLLAPSABLE__,
	isDivisible: __DEFAULT_CARD_IS_DIVISIBLE__,
	isHovering: __DEFAULT_CARD_IS_HOVERING__,
	isOpen: __DEFAULT_CARD_IS_OPEN__,
	onHover: __DEFAULT_USE_BOOLEAN_TOGGLES__,
	spacing: __DEFAULT_SPACING__,
	variant: __DEFAULT_CARD_VARIANT__
});

const Card: PolymorphicComponentWithRef = forwardRef(function Card<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CardProps<Element>, ref: CardRef<Element>): ReactElement {
	const {
		children,
		id = __DEFAULT_CARD_ID__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isActive: isActiveProp = __DEFAULT_CARD_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_CARD_IS_CLICKABLE__,
		isCollapsable: isCollapsableProp = __DEFAULT_CARD_IS_COLLAPSABLE__,
		isDisabled: isDisabledProp = __DEFAULT_CARD_IS_DISABLED__,
		isDivisible: isDivisibleProp = __DEFAULT_CARD_IS_DIVISIBLE__,
		isFixed: isFixedProp = __DEFAULT_CARD_IS_FIXED__,
		isOpen: isOpenProp = __DEFAULT_CARD_IS_OPEN__,
		isOutlined: isOutlinedProp = __DEFAULT_CARD_IS_OUTLINED__,
		onToggle,
		onClick,
		radius: radiusProp = __DEFAULT_CARD_RADIUS__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_CARD_VARIANT__,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();
	const [isFocused, setIsFocused] = useBoolean();

	const {
		isActive,
		isClickable,
		isCollapsable,
		isDisabled,
		isDivisible,
		isFixed,
		isOpen,
		isOutlined,
		radius,
		spacing,
		variant
	} = useCardResponsiveValues({
		isActive: isActiveProp,
		isClickable: isClickableProp,
		isCollapsable: isCollapsableProp,
		isDisabled: isDisabledProp,
		isDivisible: isDivisibleProp,
		isFixed: isFixedProp,
		isOpen: isOpenProp,
		isOutlined: isOutlinedProp,
		radius: radiusProp,
		spacing: spacingProp,
		variant: variantProp
	});

	const { focusProps } = useFocus({ onFocus: () => setIsFocused.on(), onBlur: () => setIsFocused.off() });

	const handleToggle = (event: CardMouseEvent<Element>) => {
		if (isCollapsable && !isHovering && onToggle) {
			onToggle(!isOpen);
		}

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CardContext.Provider
			value={{
				color,
				colorMode,
				isCollapsable,
				isDivisible,
				isHovering,
				isOpen,
				// onOpen,
				// onClose,
				onHover: setIsHovering,
				spacing,
				variant
			}}
		>
			<PushableOverlay<Element>
				{...focusProps}
				{...rest}
				ref={ref}
				className={classNames(__KEYS_CARD_CLASS__, { [className]: !!className })}
				color={color}
				colorMode={colorMode}
				radius={radius}
				isActive={(isClickable || isCollapsable) && isActive}
				isDisabled={(isClickable || isCollapsable) && isDisabled}
				isFixed={isFixed}
				isFocused={(isClickable || isCollapsable) && isFocused}
				isOutlined={isOutlined}
				isPushable={isClickable || isCollapsable}
				onClick={handleToggle}
				variant={variant}
			>
				<VisuallyHidden sx={{ position: 'absolute', top: 0 }}>
					<span id={String(id).toLowerCase()} />
				</VisuallyHidden>

				{children}
			</PushableOverlay>
		</CardContext.Provider>
	);
});

Card.displayName = 'Card';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Card<Element> {...props} />;
