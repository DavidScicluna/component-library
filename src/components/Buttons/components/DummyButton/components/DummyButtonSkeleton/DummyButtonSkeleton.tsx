import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { SkeletonProps } from '@components/Feedback';
import { Skeleton } from '@components/Feedback';
import { KEY_SKELETON_OVERLAY_CLASS } from '@components/Feedback/components/Skeleton/common/keys';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay/common/hooks';

import { useDummyButtonContext } from '../../common/hooks';

import { KEY_DUMMY_BUTTON_SKELETON_CLASS } from './common/keys';
import type { DummyButtonSkeletonProps, DummyButtonSkeletonRef } from './common/types';

const DummyButtonSkeleton = forwardRef(function DummyButtonSkeleton<Element extends PolymorphicElementType>(
	props: DummyButtonSkeletonProps<Element>,
	ref: DummyButtonSkeletonRef<Element>
): JSX.Element {
	const { color, colorMode, variant } = useDummyButtonContext();

	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	const styles = useDummyPushableOverlayStyles({
		color,
		colorMode,
		variant: variant === 'text' ? 'transparent' : variant
	});

	return (
		<Skeleton
			{...(rest as SkeletonProps<Element>)}
			ref={ref}
			className={classNames(KEY_DUMMY_BUTTON_SKELETON_CLASS, { [className]: !!className })}
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

// DummyButtonSkeleton.displayName = 'DummyButtonSkeleton';

export default DummyButtonSkeleton;
