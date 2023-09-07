import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__, __DEFAULT_RADIUS__ } from '@common/constants';

import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import { useDummyPushableOverlayClasses, useDummyPushableOverlayStyles } from './common/hooks';
import { __KEY_DUMMY_PUSHABLE_OVERLAY_CLASS__ } from './common/keys';
import type { DummyPushableOverlayProps, DummyPushableOverlayRef } from './common/types';

const DummyPushableOverlay = forwardRef(function DummyPushableOverlay<Element extends ElementType>(
	props: DummyPushableOverlayProps<Element>,
	ref: DummyPushableOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAnimated = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
		radius = __DEFAULT_RADIUS__,
		variant = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const classes = useDummyPushableOverlayClasses<Element>({ isAnimated, radius, variant });
	const styles = useDummyPushableOverlayStyles<Element>({ color, colorMode, variant });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_DUMMY_PUSHABLE_OVERLAY_CLASS__, classes, { [className]: !!className })}
			aria-disabled='true'
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

export default DummyPushableOverlay;
