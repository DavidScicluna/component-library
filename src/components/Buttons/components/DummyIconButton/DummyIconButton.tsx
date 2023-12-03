import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement } from '@common/types';

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
import { useDummyIconButtonClasses, useDummyIconButtonSizeConfig, useDummyIconButtonStyles } from './common/hooks';
import { __KEY_DUMMY_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	DummyIconButtonContext as DummyIconButtonContextType,
	DummyIconButtonProps,
	DummyIconButtonRef,
	DummyIconButtonSize,
	DummyIconButtonVariant
} from './common/types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DummyIconButtonContext = createContext<DummyIconButtonContextType<any>>({
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
		isAnimated: animated = __DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
		isCompact: c = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound: round = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		isOutlined: outlined = __DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
		size: s = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: v = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__,
		sx,
		...rest
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(animated);
	const isCompact = useGetResponsiveValue<boolean>(c);
	const isRound = useGetResponsiveValue<boolean>(round);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);

	const size = useGetResponsiveValue<DummyIconButtonSize>(s);
	const variant = useGetResponsiveValue<DummyIconButtonVariant>(v);

	const config = useDummyIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyIconButtonClasses<Element>({ variant });
	const styles = useDummyIconButtonStyles<Element>({ size });

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

export default DummyIconButton;
