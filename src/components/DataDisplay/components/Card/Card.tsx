import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { useFocus } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__, __DEFAULT_USE_BOOLEAN_TOGGLES__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius, ThemeSpacing } from '@common/types';

import { PushableOverlay } from '@components/Overlay/components/PushableOverlay';
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
import { __KEYS_CARD_CLASS__ } from './common/keys';
import type { CardContext as CardContextType, CardMouseEvent, CardProps, CardRef, CardVariant } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CardContext = createContext<CardContextType<any>>({
	isCollapsable: __DEFAULT_CARD_IS_COLLAPSABLE__,
	isDivisible: __DEFAULT_CARD_IS_DIVISIBLE__,
	isHovering: __DEFAULT_CARD_IS_HOVERING__,
	isOpen: __DEFAULT_CARD_IS_OPEN__,
	onHover: __DEFAULT_USE_BOOLEAN_TOGGLES__,
	spacing: __DEFAULT_SPACING__,
	variant: __DEFAULT_CARD_VARIANT__
});

const Card = forwardRef(function Card<Element extends ElementType>(
	props: CardProps<Element>,
	ref: CardRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		id = __DEFAULT_CARD_ID__,
		isActive: active = __DEFAULT_CARD_IS_ACTIVE__,
		isClickable: clickable = __DEFAULT_CARD_IS_CLICKABLE__,
		isCollapsable: collapsable = __DEFAULT_CARD_IS_COLLAPSABLE__,
		isDisabled: disabled = __DEFAULT_CARD_IS_DISABLED__,
		isDivisible: divisible = __DEFAULT_CARD_IS_DIVISIBLE__,
		isFixed: fixed = __DEFAULT_CARD_IS_FIXED__,
		isOpen: open = __DEFAULT_CARD_IS_OPEN__,
		isOutlined: outlined = __DEFAULT_CARD_IS_OUTLINED__,
		onToggle,
		onClick,
		radius: r = __DEFAULT_CARD_RADIUS__,
		spacing: s = __DEFAULT_SPACING__,
		variant: v = __DEFAULT_CARD_VARIANT__,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();
	const [isFocused, setIsFocused] = useBoolean();

	const isActive = useGetResponsiveValue<boolean>(active);
	const isClickable = useGetResponsiveValue<boolean>(clickable);
	const isCollapsable = useGetResponsiveValue<boolean>(collapsable);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isDivisible = useGetResponsiveValue<boolean>(divisible);
	const isFixed = useGetResponsiveValue<boolean>(fixed);
	const isOpen = useGetResponsiveValue<boolean>(open);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);

	const radius = useGetResponsiveValue<ThemeRadius>(r);
	const spacing = useGetResponsiveValue<ThemeSpacing>(s);
	const variant = useGetResponsiveValue<CardVariant>(v);

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
					<span id={id.toLowerCase()} />
				</VisuallyHidden>

				{children}
			</PushableOverlay>
		</CardContext.Provider>
	);
});

Card.displayName = 'Card';

export default Card;
