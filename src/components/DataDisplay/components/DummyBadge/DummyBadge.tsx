import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { Center, Grid, GridItem } from '@components/Layout';
import { DummyPushableOverlay } from '@components/Overlay';

import {
	__DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from './common/constants';
import { useDummyBadgeClasses, useDummyBadgeSizeConfig } from './common/hooks';
import { __KEYS_DUMMY_BADGE_CLASS__ } from './common/keys';
import type {
	DummyBadgeContext as DummyBadgeContextType,
	DummyBadgeProps,
	DummyBadgeRef,
	DummyBadgeSize,
	DummyBadgeVariant
} from './common/types';
import { DummyBadgeSkeleton } from './components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DummyBadgeContext = createContext<DummyBadgeContextType<any>>({
	size: __DEFAULT_DUMMY_BADGE_SIZE__,
	variant: __DEFAULT_DUMMY_BADGE_VARIANT__
});

const DummyBadge = forwardRef(function DummyBadge<Element extends ElementType>(
	props: DummyBadgeProps<Element>,
	ref: DummyBadgeRef<Element>
): ReactElement {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderAction,
		color,
		colorMode,
		isAnimated: animated = __DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
		isCompact: c = __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
		isFullWidth: fullWidth = __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
		isOutlined: outlined = __DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
		isRound: round = __DEFAULT_DUMMY_BADGE_IS_ROUND__,
		isUppercase: uppercase = __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
		size: s = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: v = __DEFAULT_DUMMY_BADGE_VARIANT__,
		...rest
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(animated);
	const isCompact = useGetResponsiveValue<boolean>(c);
	const isFullWidth = useGetResponsiveValue<boolean>(fullWidth);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isRound = useGetResponsiveValue<boolean>(round);
	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

	const size = useGetResponsiveValue<DummyBadgeSize>(s);
	const variant = useGetResponsiveValue<DummyBadgeVariant>(v);

	const config = useDummyBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	const classes = useDummyBadgeClasses<Element>({ isCompact, isFullWidth, isRound, isUppercase, size, variant });

	return (
		<DummyBadgeContext.Provider value={{ color, colorMode, size, variant }}>
			<DummyPushableOverlay<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_DUMMY_BADGE_CLASS__, classes, { [className]: !!className })}
				color={color}
				colorMode={colorMode}
				radius={config.radius}
				isAnimated={isAnimated}
				isOutlined={isOutlined}
				variant={variant === 'text' ? 'transparent' : variant}
				px={config.padding.x}
				py={config.padding.y}
			>
				<Grid
					w='100%'
					h='100%'
					templateColumns={compact([
						renderLeft ? 'auto' : null,
						'auto',
						renderRight ? 'auto' : null,
						renderAction ? 'auto' : null
					]).join(' ')}
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
								<DummyBadgeSkeleton radius='xs'>{children}</DummyBadgeSkeleton>
							</Center>
						</GridItem>
					) : null}

					{renderRight ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
						</GridItem>
					) : null}

					{renderAction ? (
						<GridItem alignSelf='center' justifySelf='center'>
							{renderAction()}
						</GridItem>
					) : null}
				</Grid>
			</DummyPushableOverlay>
		</DummyBadgeContext.Provider>
	);
});

DummyBadge.displayName = 'DummyBadge';

export default DummyBadge;
