import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { Center, Grid, GridItem } from '@components/Layout';
import { DummyPushableOverlay } from '@components/Overlay/components/DummyPushableOverlay';

import {
	__DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from './common/constants';
import { useDummyButtonClasses, useDummyButtonSizeConfig } from './common/hooks';
import { __KEY_DUMMY_BUTTON_CLASS__ } from './common/keys';
import type {
	DummyButtonContext as DummyButtonContextType,
	DummyButtonProps,
	DummyButtonRef,
	DummyButtonSize,
	DummyButtonVariant
} from './common/types';
import { DummyButtonSkeleton } from './components/DummyButtonSkeleton';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DummyButtonContext = createContext<DummyButtonContextType<any>>({
	size: __DEFAULT_DUMMY_BUTTON_SIZE__,
	variant: __DEFAULT_DUMMY_BUTTON_VARIANT__
});

const DummyButton = forwardRef(function DummyButton<Element extends ElementType>(
	props: DummyButtonProps<Element>,
	ref: DummyButtonRef<Element>
): ReactElement {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		color,
		colorMode,
		isAnimated = __DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
		isCompact = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		size: s = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: v = __DEFAULT_DUMMY_BUTTON_VARIANT__,
		...rest
	} = props;

	const size = useGetResponsiveValue<DummyButtonSize>(s);
	const variant = useGetResponsiveValue<DummyButtonVariant>(v);

	const config = useDummyButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyButtonClasses<Element>({ isCompact, isFullWidth, isRound, size, variant });

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
						<GridItem>{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}</GridItem>
					) : null}

					{children ? (
						<GridItem>
							<Center ref={childrenRef} as='span' w='100%' h='100%'>
								<DummyButtonSkeleton radius='xs'>{children}</DummyButtonSkeleton>
							</Center>
						</GridItem>
					) : null}

					{renderRight ? (
						<GridItem>{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}</GridItem>
					) : null}
				</Grid>
			</DummyPushableOverlay>
		</DummyButtonContext.Provider>
	);
});

export default DummyButton;
