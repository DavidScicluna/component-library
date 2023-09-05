import type { ElementType, ReactElement } from 'react';
import { forwardRef, useEffect, useRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';
import { useMergeRefs } from 'rooks';

import {
	__DEFAULT_CLASS_PREFIX__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_POLYMORPHIC_SX__,
	__DEFAULT_RADIUS__
} from '@common/constants';

import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import { usePushableOverlayClasses, usePushableOverlayStyles } from './common/hooks';
import type { PushableOverlayProps, PushableOverlayRef } from './common/types';

const PushableOverlay = forwardRef(function PushableOverlay<Element extends ElementType>(
	props: PushableOverlayProps<Element>,
	ref: PushableOverlayRef<Element>
): ReactElement {
	const internalRef = useRef<PushableOverlayRef<Element>>();
	const refs = useMergeRefs<PushableOverlayRef<Element>>(ref, internalRef);

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isActive = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isFocused = __DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
		isPushable = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		radius = __DEFAULT_RADIUS__,
		variant = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const classes = usePushableOverlayClasses<Element>({
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-pushable-overlay`, classes, {
				[className]: !!className
			})}
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

export default PushableOverlay;
