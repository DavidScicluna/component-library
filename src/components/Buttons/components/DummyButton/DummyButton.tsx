import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Center, Grid, GridItem } from '@components/Layout';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	__DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_OUTLINED__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from './common/constants';
import { useDummyButtonClasses, useDummyButtonResponsiveValues, useDummyButtonSizeConfig } from './common/hooks';
import { __KEY_DUMMY_BUTTON_CLASS__ } from './common/keys';
import type { DummyButtonContext as DummyButtonContextType, DummyButtonProps, DummyButtonRef } from './common/types';
import { DummyButtonSkeleton } from './components/DummyButtonSkeleton';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const DummyButtonContext = createContext<DummyButtonContextType>({
	size: __DEFAULT_DUMMY_BUTTON_SIZE__,
	variant: __DEFAULT_DUMMY_BUTTON_VARIANT__
});

const DummyButton: PolymorphicComponentWithRef = forwardRef(function DummyButton<
	Element extends ElementType = PolymorphicDefaultElement
>(props: DummyButtonProps<Element>, ref: DummyButtonRef<Element>): ReactElement {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		color,
		colorMode,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BUTTON_VARIANT__,
		...rest
	} = props;

	const { isAnimated, isCompact, isFullWidth, isRound, isOutlined, size, variant } = useDummyButtonResponsiveValues({
		isAnimated: isAnimatedProp,
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useDummyButtonSizeConfig({ isCompact, isRound, size, variant });

	const classes = useDummyButtonClasses({ isCompact, isFullWidth, isRound, size, variant });

	return (
		<DummyButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEY_DUMMY_BUTTON_CLASS__, classes, {
					[className]: !!className
				})}
				color={color}
				colorMode={colorMode}
				isAnimated={isAnimated}
				isOutlined={isOutlined}
				radius={config.radius}
				variant={variant === 'text' ? 'transparent' : variant}
				px={config.padding.x}
				py={config.padding.y}
			>
				<Grid
					w='100%'
					h='100%'
					templateColumns={compact([renderLeft ? 'auto' : null, 'auto', renderRight ? 'auto' : null]).join(
						' '
					)}
					templateRows={1}
					alignItems={isFullWidth ? 'center' : 'stretch'}
					alignContent={isFullWidth ? 'center' : 'stretch'}
					justifyItems={isFullWidth ? 'center' : 'stretch'}
					justifyContent={isFullWidth ? 'center' : 'stretch'}
					spacing={config.spacing}
				>
					{renderLeft ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}

					{children ? (
						<GridItem>
							<Center ref={childrenRef} as='span' w='100%' h='100%'>
								<DummyButtonSkeleton radius='xs'>{children}</DummyButtonSkeleton>
							</Center>
						</GridItem>
					) : null}

					{renderRight ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}
				</Grid>
			</DummyPushableOverlay>
		</DummyButtonContext.Provider>
	);
});

DummyButton.displayName = 'DummyButton';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyButton<Element> {...props} />;
