import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	DEFAULT_DUMMY_BUTTON_AS,
	DEFAULT_DUMMY_BUTTON_IS_ANIMATED,
	DEFAULT_DUMMY_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
	DEFAULT_DUMMY_BUTTON_IS_OUTLINED,
	DEFAULT_DUMMY_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_BUTTON_SIZE,
	DEFAULT_DUMMY_BUTTON_VARIANT
} from './common/constants';
import { useDummyButtonClasses, useDummyButtonResponsiveValues, useDummyButtonSizeConfig } from './common/hooks';
import { KEY_DUMMY_BUTTON_CLASS } from './common/keys';
import type {
	DummyButtonContext as DummyButtonContextType,
	DummyButtonDefaultElement,
	DummyButtonElement,
	DummyButtonProps,
	DummyButtonRef
} from './common/types';
import { DummyButtonSkeleton } from './components/DummyButtonSkeleton';

export const DummyButtonContext = createContext<DummyButtonContextType<DummyButtonDefaultElement>>({
	size: DEFAULT_DUMMY_BUTTON_SIZE,
	variant: DEFAULT_DUMMY_BUTTON_VARIANT
});

const DummyButton = forwardRef(function DummyButton<Element extends DummyButtonElement>(
	props: DummyButtonProps<Element>,
	ref: DummyButtonRef<Element>
): JSX.Element {
	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		children,
		as = DEFAULT_DUMMY_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		color,
		colorMode,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_BUTTON_IS_ANIMATED,
		isCompact: isCompactProp = DEFAULT_DUMMY_BUTTON_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_DUMMY_BUTTON_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_DUMMY_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BUTTON_VARIANT,
		...rest
	} = props;

	const { isAnimated, isCompact, isFullWidth, isRound, isOutlined, size, variant } =
		useDummyButtonResponsiveValues<Element>({
			isAnimated: isAnimatedProp,
			isCompact: isCompactProp,
			isFullWidth: isFullWidthProp,
			isRound: isRoundProp,
			isOutlined: isOutlinedProp,
			size: sizeProp,
			variant: variantProp
		});

	const config = useDummyButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyButtonClasses<Element>({ isCompact, isFullWidth, isRound, size, variant });

	return (
		<DummyButtonContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEY_DUMMY_BUTTON_CLASS, classes, {
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
							<Center
								ref={childrenRef as CenterRef<PolymorphicDefaultElement>}
								as='span'
								w='100%'
								h='100%'
							>
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

// DummyButton.displayName = 'DummyButton';

export default DummyButton;
