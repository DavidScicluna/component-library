import { createContext, forwardRef, ReactElement } from 'react';

import { VisuallyHidden, VStack } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultMethod
} from '../../../../common/default/props';
import { useBoolean, useTheme } from '../../../../common/hooks';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	isActive as defaultIsActive,
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled,
	isDivisible as defaultIsDivisible,
	isFixed as defaultIsFixed,
	spacing as defaultSpacing,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';

import {
	CollapsibleCardContext as CollapsibleCardContextType,
	CollapsibleCardMouseEvent,
	CollapsibleCardProps,
	CollapsibleCardRef
} from './common/types';

export const CollapsibleCardContext = createContext<CollapsibleCardContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDivisible: defaultIsDivisible,
	isOpen: false,
	onHover: { on: defaultMethod, off: defaultMethod },
	spacing: defaultSpacing,
	variant: defaultVariant
});

const CollapsibleCard = forwardRef<CollapsibleCardRef, CollapsibleCardProps>(
	function CollapsibleCard(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		id = '',
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isClickable = defaultIsClickable,
		isDivisible = defaultIsDivisible,
		isDisabled = defaultIsDisabled,
		isFixed = defaultIsFixed,
		isOpen,
		onOpen,
		onClick,
		spacing = defaultSpacing,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const style = useStyles({
		theme,
		isClickable,
		isDisabled,
		isFixed
	});

	const handleToggle = (event: CollapsibleCardMouseEvent) => {
		if (isOpen ? isOpen && !isHovering : true) {
			onOpen();
		}

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CollapsibleCardContext.Provider
			value={{
				color,
				colorMode,
				isDivisible,
				isOpen,
				onHover: setIsHovering,
				spacing,
				variant
			}}
		>
			<PushableOverlay
				{...rest}
				ref={ref}
				as={isClickable ? 'button' : 'div'}
				tabIndex={0}
				borderRadius={variant === 'transparent' ? 'none' : 'xl'}
				color={color}
				colorMode={colorMode}
				isActive={isClickable && !isFixed && isActive}
				isDisabled={isClickable && isDisabled}
				isFixed={isClickable && isFixed}
				isPushable={isClickable}
				onClick={handleToggle}
				variant={variant}
				sx={merge(style.card, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<VisuallyHidden sx={{ position: 'absolute', top: 0 }}>
					<span id={id.toLowerCase()} />
				</VisuallyHidden>

				<VStack width='100%' height='100%' spacing={0}>
					{children}
				</VStack>
			</PushableOverlay>
		</CollapsibleCardContext.Provider>
	);
});

export default CollapsibleCard;
