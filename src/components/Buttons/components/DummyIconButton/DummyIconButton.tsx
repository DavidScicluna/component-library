import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Center } from '@components/Layout';
import { DummyPushableOverlay } from '@components/Overlay';

import {
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
	DummyIconButtonProps,
	DummyIconButtonRef
} from './common/types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const DummyIconButtonContext = createContext<DummyIconButtonContextType>({
	size: __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	variant: __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
});

const DummyIconButton: PolymorphicComponentWithRef = forwardRef(function DummyIconButton<
	Element extends ElementType = PolymorphicDefaultElement
>(props: DummyIconButtonProps<Element>, ref: DummyIconButtonRef<Element>): ReactElement {
	const {
		children,
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

	const { isAnimated, isCompact, isRound, isOutlined, size, variant } = useDummyIconButtonResponsiveValues({
		isAnimated: isAnimatedProp,
		isCompact: isCompactProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	});

	// TODO: Go over all component hooks and remove union
	const config = useDummyIconButtonSizeConfig({ isCompact, isRound, size, variant });

	const classes = useDummyIconButtonClasses({ variant });
	const styles = useDummyIconButtonStyles({ size });

	return (
		<DummyIconButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay<Element>
				{...rest}
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

DummyIconButton.displayName = 'DummyIconButton';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyIconButton<Element> {...props} />;
