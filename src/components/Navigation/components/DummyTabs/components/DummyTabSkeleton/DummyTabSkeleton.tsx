import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { SkeletonProps } from '@components/Feedback';
import { Skeleton } from '@components/Feedback';
import { KEY_SKELETON_OVERLAY_CLASS } from '@components/Feedback/components/Skeleton/common/keys';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay/common/hooks';

import { useDummyTabsContext } from '../../common/hooks';

import { KEY_DUMMY_TAB_SKELETON_CLASS } from './common/keys';
import type { DummyTabSkeletonProps, DummyTabSkeletonRef } from './common/types';

const DummyTabSkeleton = forwardRef(function DummyTabSkeleton<Element extends PolymorphicElementType>(
	props: DummyTabSkeletonProps<Element>,
	ref: DummyTabSkeletonRef<Element>
): JSX.Element {
	const { color: DEFAULT_DUMMY_TAB_SKELETON_COLOR, colorMode: DEFAULT_DUMMY_TAB_SKELETON_COLORMODE } =
		useDummyTabsContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_DUMMY_TAB_SKELETON_COLOR,
		colorMode = DEFAULT_DUMMY_TAB_SKELETON_COLORMODE,
		...rest
	} = props;

	const styles = useDummyPushableOverlayStyles<Element>({ color, colorMode, variant: 'transparent' });

	return (
		<Skeleton
			{...(rest as SkeletonProps<Element>)}
			ref={ref}
			className={classNames(KEY_DUMMY_TAB_SKELETON_CLASS, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isAnimated={false}
			isLoaded={false}
			sx={{ [`& .${KEY_SKELETON_OVERLAY_CLASS}`]: { background: styles.color } }}
		>
			{children}
		</Skeleton>
	);
});

// DummyTabSkeleton.displayName = 'DummyTabSkeleton';

export default DummyTabSkeleton;
