import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';

import { Center } from '@components/Layout';
import type { DummyPushableOverlayProps } from '@components/Overlay';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	DEFAULT_DUMMY_ICON_BUTTON_AS,
	DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED,
	DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED,
	DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_ICON_BUTTON_SIZE,
	DEFAULT_DUMMY_ICON_BUTTON_VARIANT
} from './common/constants';
import {
	useDummyIconButtonClasses,
	useDummyIconButtonResponsiveValues,
	useDummyIconButtonSizeConfig,
	useDummyIconButtonStyles
} from './common/hooks';
import { KEY_DUMMY_ICON_BUTTON_CLASS } from './common/keys';
import type {
	DummyIconButtonContext as DummyIconButtonContextType,
	DummyIconButtonDefaultElement,
	DummyIconButtonElement,
	DummyIconButtonProps,
	DummyIconButtonRef
} from './common/types';

export const DummyIconButtonContext = createContext<DummyIconButtonContextType<DummyIconButtonDefaultElement>>({
	size: DEFAULT_DUMMY_ICON_BUTTON_SIZE,
	variant: DEFAULT_DUMMY_ICON_BUTTON_VARIANT
});

const DummyIconButton = forwardRef(function DummyIconButton<Element extends DummyIconButtonElement>(
	props: DummyIconButtonProps<Element>,
	ref: DummyIconButtonRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_DUMMY_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED,
		isCompact: isCompactProp = DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
		isRound: isRoundProp = DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_DUMMY_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_ICON_BUTTON_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
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
				className={classNames(KEY_DUMMY_ICON_BUTTON_CLASS, classes, { [className]: !!className })}
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
