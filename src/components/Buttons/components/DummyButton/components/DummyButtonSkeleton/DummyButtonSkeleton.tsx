import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Skeleton } from '@components/Feedback';
import { __KEY_SKELETON_OVERLAY_CLASS__ } from '@components/Feedback/components/Skeleton/common/keys';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay/common/hooks';

import { useDummyButtonContext } from '../../common/hooks';

import { __KEY_DUMMY_BUTTON_SKELETON_CLASS__ } from './common/keys';
import type { DummyButtonSkeletonProps, DummyButtonSkeletonRef } from './common/types';

const DummyButtonSkeleton = forwardRef(function DummyButtonSkeleton<
	Element extends ElementType = PolymorphicDefaultElement
>(props: DummyButtonSkeletonProps<Element>, ref: DummyButtonSkeletonRef<Element>): ReactElement {
	const { color, colorMode, variant } = useDummyButtonContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const styles = useDummyPushableOverlayStyles({
		color,
		colorMode,
		variant: variant === 'text' ? 'transparent' : variant
	});

	return (
		<Skeleton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_DUMMY_BUTTON_SKELETON_CLASS__, { [className]: !!className })}
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

DummyButtonSkeleton.displayName = 'DummyButtonSkeleton';

export default DummyButtonSkeleton;
