import { createContext, forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';
import { useFocus } from 'rooks';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import { useBoolean } from '@common/hooks';

import { Center } from '@components/Layout';
import type { PushableOverlayProps } from '@components/Overlay';
import { PushableOverlay } from '@components/Overlay';

import { useIconButtonGroupContext } from '../IconButtonGroup/common/hooks';

import {
	DEFAULT_ICON_BUTTON_AS,
	DEFAULT_ICON_BUTTON_IS_ACTIVE,
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_FOCUSED,
	DEFAULT_ICON_BUTTON_IS_LOADING,
	DEFAULT_ICON_BUTTON_IS_OUTLINED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from './common/constants';
import {
	useIconButtonClasses,
	useIconButtonResponsiveValues,
	useIconButtonSizeConfig,
	useIconButtonStyles
} from './common/hooks';
import { KEYS_ICON_BUTTON_CLASS } from './common/keys';
import type {
	IconButtonContext as IconButtonContextType,
	IconButtonDefaultElement,
	IconButtonElement,
	IconButtonProps,
	IconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IconButtonContext = createContext<IconButtonContextType<IconButtonDefaultElement>>({
	size: DEFAULT_ICON_BUTTON_SIZE,
	variant: DEFAULT_ICON_BUTTON_VARIANT
});

const IconButton = forwardRef(function IconButton<Element extends IconButtonElement>(
	props: IconButtonProps<Element>,
	ref: IconButtonRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_ICON_BUTTON_GROUP_COLOR,
		colorMode: DEFAULT_ICON_BUTTON_GROUP_COLORMODE,
		isCompact: DEFAULT_ICON_BUTTON_GROUP_IS_COMPACT = DEFAULT_ICON_BUTTON_IS_COMPACT,
		isDisabled: DEFAULT_ICON_BUTTON_GROUP_IS_DISABLED = DEFAULT_ICON_BUTTON_IS_DISABLED,
		isRound: DEFAULT_ICON_BUTTON_GROUP_IS_ROUND = DEFAULT_ICON_BUTTON_IS_ROUND,
		size: DEFAULT_ICON_BUTTON_GROUP_SIZE = DEFAULT_ICON_BUTTON_SIZE,
		variant: DEFAULT_ICON_BUTTON_GROUP_VARIANT = DEFAULT_ICON_BUTTON_VARIANT
	} = useIconButtonGroupContext();

	const {
		children,
		as = DEFAULT_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		renderSpinner,
		color = DEFAULT_ICON_BUTTON_GROUP_COLOR,
		colorMode = DEFAULT_ICON_BUTTON_GROUP_COLORMODE,
		isActive: isActiveProp = DEFAULT_ICON_BUTTON_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_ICON_BUTTON_GROUP_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_ICON_BUTTON_GROUP_IS_DISABLED,
		isFocused: isFocusedProp = DEFAULT_ICON_BUTTON_IS_FOCUSED,
		isLoading: isLoadingProp = DEFAULT_ICON_BUTTON_IS_LOADING,
		isRound: isRoundProp = DEFAULT_ICON_BUTTON_GROUP_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_ICON_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_ICON_BUTTON_GROUP_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_GROUP_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const [isFocusedHook, setIsFocusedHook] = useBoolean();

	const {
		isActive,
		isCompact,
		isDisabled,
		isFocused: focused,
		isLoading,
		isRound,
		isOutlined,
		size,
		variant
	} = useIconButtonResponsiveValues<Element>({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFocused: isFocusedProp,
		isLoading: isLoadingProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	});

	const isFocused = useMemo<boolean>(() => focused || isFocusedHook, [focused, isFocusedHook]);

	const config = useIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useIconButtonClasses<Element>({ variant });
	const styles = useIconButtonStyles<Element>({ size });

	const { focusProps } = useFocus({ onFocus: () => setIsFocusedHook.on(), onBlur: () => setIsFocusedHook.off() });

	return (
		<IconButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<PushableOverlay
				{...focusProps}
				{...(rest as PushableOverlayProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_ICON_BUTTON_CLASS, classes, { [className]: !!className })}
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isActive={isActive || isLoading}
				isDisabled={isDisabled}
				isFocused={isFocused}
				isOutlined={isOutlined}
				variant={variant === 'icon' ? 'transparent' : variant}
				p={config.padding}
				sx={merge(styles, sx)}
			>
				<Center as='span' w='100%' h='100%'>
					{isLoading && renderSpinner ? renderSpinner({ color, colorMode }) : children}
				</Center>
			</PushableOverlay>
		</IconButtonContext.Provider>
	);
});

// IconButton.displayName = 'IconButton';

export default IconButton;
