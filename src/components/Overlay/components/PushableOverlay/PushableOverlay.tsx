import type { ElementType, ReactElement } from 'react';
import { forwardRef, useEffect, useRef } from 'react';

import { merge } from 'lodash-es';
import { useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement, ThemeRadius } from '@common/types';

import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import { usePushableOverlayClasses, usePushableOverlayStyles } from './common/hooks';
import { __KEYS_PUSHABLE_OVERLAY_CLASS__ } from './common/keys';
import type { PushableOverlayProps, PushableOverlayRef, PushableOverlayVariant } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// TODO: Add gradient prop that will replaced colors with gradient from, middle & to colors
const PushableOverlay: PolymorphicComponentWithRef = forwardRef(function PushableOverlay<
	Element extends ElementType = PolymorphicDefaultElement
>(props: PushableOverlayProps<Element>, ref: PushableOverlayRef<Element>): ReactElement {
	const internalRef = useRef<PushableOverlayRef<Element>>();
	const refs = useMergeRefs<PushableOverlayRef<Element>>(ref, internalRef);

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isActive: active = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled: disabled = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed: fixed = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isFocused: focused = __DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
		isOutlined: outlined = __DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
		isPushable: pushable = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		radius: r = __DEFAULT_RADIUS__,
		variant: v = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const isActive = useGetResponsiveValue<boolean>(active);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isFixed = useGetResponsiveValue<boolean>(fixed);
	const isFocused = useGetResponsiveValue<boolean>(focused);
	const isOutlined = useGetResponsiveValue<boolean>(outlined);
	const isPushable = useGetResponsiveValue<boolean>(pushable);

	const radius = useGetResponsiveValue<ThemeRadius>(r);
	const variant = useGetResponsiveValue<PushableOverlayVariant>(v);

	const classes = usePushableOverlayClasses<Element>({
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
		isOutlined,
		isPushable,
		radius,
		variant
	});
	const styles = usePushableOverlayStyles<Element>({
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
		isPushable,
		variant
	});

	const handleFocus = (): void => {
		if (isFocused) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			internalRef?.current?.focus({ focusVisible: true } as any);
		} else {
			internalRef?.current?.blur();
		}
	};

	useEffect(() => handleFocus(), [isFocused]);

	return (
		<Grid<Element>
			{...rest}
			ref={refs}
			className={classNames(__KEYS_PUSHABLE_OVERLAY_CLASS__, classes, { [className]: !!className })}
			aria-disabled={isDisabled ? 'true' : 'false'}
			aria-pressed={isFocused || isActive ? 'true' : 'false'}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
			sx={merge(styles, sx)}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

PushableOverlay.displayName = 'PushableOverlay';

export default PushableOverlay;
