import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { useFocus } from 'rooks';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING, DEFAULT_USE_BOOLEAN_TOGGLES } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicMouseEvent } from '@common/types';

import { PushableOverlay } from '@components/Overlay';
import { VisuallyHidden } from '@components/VisuallyHidden';

import {
	DEFAULT_CARD_AS,
	DEFAULT_CARD_ID,
	DEFAULT_CARD_IS_ACTIVE,
	DEFAULT_CARD_IS_CLICKABLE,
	DEFAULT_CARD_IS_COLLAPSABLE,
	DEFAULT_CARD_IS_DISABLED,
	DEFAULT_CARD_IS_DIVISIBLE,
	DEFAULT_CARD_IS_FIXED,
	DEFAULT_CARD_IS_HOVERING,
	DEFAULT_CARD_IS_OPEN,
	DEFAULT_CARD_IS_OUTLINED,
	DEFAULT_CARD_RADIUS,
	DEFAULT_CARD_VARIANT
} from './common/constants';
import { useCardResponsiveValues } from './common/hooks';
import { KEYS_CARD_CLASS } from './common/keys';
import type {
	CardContext as CardContextType,
	CardDefaultElement,
	CardElement,
	CardProps,
	CardRef
} from './common/types';

export const CardContext = createContext<CardContextType<CardDefaultElement>>({
	isCollapsable: DEFAULT_CARD_IS_COLLAPSABLE,
	isDivisible: DEFAULT_CARD_IS_DIVISIBLE,
	isHovering: DEFAULT_CARD_IS_HOVERING,
	isOpen: DEFAULT_CARD_IS_OPEN,
	onHover: DEFAULT_USE_BOOLEAN_TOGGLES,
	spacing: DEFAULT_SPACING,
	variant: DEFAULT_CARD_VARIANT
});

const Card = forwardRef(function Card<Element extends CardElement>(
	props: CardProps<Element>,
	ref: CardRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_CARD_AS,
		id = DEFAULT_CARD_ID,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isActive: isActiveProp = DEFAULT_CARD_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_CARD_IS_CLICKABLE,
		isCollapsable: isCollapsableProp = DEFAULT_CARD_IS_COLLAPSABLE,
		isDisabled: isDisabledProp = DEFAULT_CARD_IS_DISABLED,
		isDivisible: isDivisibleProp = DEFAULT_CARD_IS_DIVISIBLE,
		isFixed: isFixedProp = DEFAULT_CARD_IS_FIXED,
		isOpen: isOpenProp = DEFAULT_CARD_IS_OPEN,
		isOutlined: isOutlinedProp = DEFAULT_CARD_IS_OUTLINED,
		onToggle,
		onClick,
		radius: radiusProp = DEFAULT_CARD_RADIUS,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_CARD_VARIANT,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();
	const [isFocused, setIsFocused] = useBoolean();

	const {
		isActive = DEFAULT_CARD_IS_ACTIVE,
		isClickable = DEFAULT_CARD_IS_CLICKABLE,
		isCollapsable = DEFAULT_CARD_IS_COLLAPSABLE,
		isDisabled = DEFAULT_CARD_IS_DISABLED,
		isDivisible = DEFAULT_CARD_IS_DIVISIBLE,
		isFixed = DEFAULT_CARD_IS_FIXED,
		isOpen = DEFAULT_CARD_IS_OPEN,
		isOutlined = DEFAULT_CARD_IS_OUTLINED,
		radius = DEFAULT_CARD_RADIUS,
		spacing = DEFAULT_SPACING,
		variant = DEFAULT_CARD_VARIANT
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

	const handleToggle = (event: PolymorphicMouseEvent) => {
		if (isCollapsable && !isHovering && onToggle) {
			onToggle(!isOpen);
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
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
			<PushableOverlay
				{...focusProps}
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_CARD_CLASS, { [className]: !!className })}
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

// Card.displayName = 'Card';

export default Card;
