import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { Center } from '@components/Layout';
import { DummyPushableOverlay } from '@components/Overlay/components/DummyPushableOverlay';

import {
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
} from './common/constants';
import { useDummyIconButtonClasses, useDummyIconButtonSizeConfig } from './common/hooks';
import { __KEY_DUMMY_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	DummyIconButtonContext as DummyIconButtonContextType,
	DummyIconButtonProps,
	DummyIconButtonRef,
	DummyIconButtonSize,
	DummyIconButtonVariant
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DummyIconButtonContext = createContext<DummyIconButtonContextType<any>>({
	size: __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	variant: __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
});

const DummyIconButton = forwardRef(function DummyIconButton<Element extends ElementType>(
	props: DummyIconButtonProps<Element>,
	ref: DummyIconButtonRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAnimated = __DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
		isCompact = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		size: s = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: v = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__,
		...rest
	} = props;

	const size = useGetResponsiveValue<DummyIconButtonSize>(s);
	const variant = useGetResponsiveValue<DummyIconButtonVariant>(v);

	const config = useDummyIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyIconButtonClasses<Element>({ isCompact, isRound, size, variant });

	return (
		<DummyIconButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEY_DUMMY_ICON_BUTTON_CLASS__, classes, {
					[className]: !!className
				})}
				color={color}
				colorMode={colorMode}
				isAnimated={isAnimated}
				radius={config.radius}
				variant={variant === 'icon' ? 'transparent' : variant}
				p={config.padding}
			>
				<Center as='span' w='100%' h='100%'>
					{children}
				</Center>
			</DummyPushableOverlay>
		</DummyIconButtonContext.Provider>
	);
});

export default DummyIconButton;
