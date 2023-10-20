import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { keys as feedback_keys, Skeleton } from '@components/Feedback';
import { hooks as overlay_hooks } from '@components/Overlay';

import { useDummyTabsContext } from '../../common/hooks';

import { __KEY_DUMMY_TAB_SKELETON_CLASS__ } from './common/keys';
import type { DummyTabSkeletonProps, DummyTabSkeletonRef } from './common/types';

const { __KEY_SKELETON_OVERLAY_CLASS__ } = feedback_keys;
const { useDummyPushableOverlayStyles } = overlay_hooks;

const DummyTabSkeleton = forwardRef(function DummyTabSkeleton<Element extends ElementType>(
	props: DummyTabSkeletonProps<Element>,
	ref: DummyTabSkeletonRef<Element>
): ReactElement {
	const { color: __DEFAULT_DUMMY_TAB_SKELETON_COLOR__, colorMode: __DEFAULT_DUMMY_TAB_SKELETON_COLORMODE__ } =
		useDummyTabsContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMY_TAB_SKELETON_COLOR__,
		colorMode = __DEFAULT_DUMMY_TAB_SKELETON_COLORMODE__,
		...rest
	} = props;

	const styles = useDummyPushableOverlayStyles({ color, colorMode, variant: 'transparent' });

	return (
		<Skeleton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_DUMMY_TAB_SKELETON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isAnimated={false}
			isLoaded={false}
			sx={{ [`& .${__KEY_SKELETON_OVERLAY_CLASS__}`]: { background: styles.color } }}
		>
			{children}
		</Skeleton>
	);
});

DummyTabSkeleton.displayName = 'DummyTabSkeleton';

export default DummyTabSkeleton;
