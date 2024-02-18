import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';

import { Center } from '@components/Layout';
import type { DummyPushableOverlayProps } from '@components/Overlay';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	__DEFAULT_DUMMY_ICON_BUTTON_AS__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
} from './common/constants';
import {
	useDummyIconButtonClasses,
	useDummyIconButtonResponsiveValues,
	useDummyIconButtonSizeConfig,
	useDummyIconButtonStyles
} from './common/hooks';
import { __KEY_DUMMY_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	DummyIconButtonContext as DummyIconButtonContextType,
	DummyIconButtonDefaultElement,
	DummyIconButtonElement,
	DummyIconButtonProps,
	DummyIconButtonRef
} from './common/types';

export const DummyIconButtonContext = createContext<DummyIconButtonContextType<DummyIconButtonDefaultElement>>({
	size: __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	variant: __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
});

const DummyIconButton = forwardRef(function DummyIconButton<Element extends DummyIconButtonElement>(
	props: DummyIconButtonProps<Element>,
	ref: DummyIconButtonRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_DUMMY_ICON_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound: isRoundProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const { isAnimated, isCompact, isRound, isOutlined, size, variant } = useDummyIconButtonResponsiveValues<Element>({
		isAnimated: isAnimatedProp,
		isCompact: isCompactProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useDummyIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyIconButtonClasses<Element>({ variant });
	const styles = useDummyIconButtonStyles<Element>({ size });

	return (
		<DummyIconButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay
				{...(rest as DummyPushableOverlayProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEY_DUMMY_ICON_BUTTON_CLASS__, classes, { [className]: !!className })}
				color={color}
				colorMode={colorMode}
				isAnimated={isAnimated}
				isOutlined={isOutlined}
				radius={config.radius}
				variant={variant === 'icon' ? 'transparent' : variant}
				p={config.padding}
				sx={merge(styles, sx)}
			>
				<Center as='span' w='100%' h='100%'>
					{children}
				</Center>
			</DummyPushableOverlay>
		</DummyIconButtonContext.Provider>
	);
});

// DummyIconButton.displayName = 'DummyIconButton';

export default DummyIconButton;
