import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Skeleton } from '@components/Feedback';
import { keys } from '@components/Feedback/components/Skeleton';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay';

import { useDummyIconButtonContext } from '../../common/hooks';

import { __KEY_DUMMY_ICON_BUTTON_SKELETON_CLASS__ } from './common/keys';
import type { DummyIconButtonSkeletonProps, DummyIconButtonSkeletonRef } from './common/types';

const { __KEY_SKELETON_OVERLAY_CLASS__ } = keys;

const DummyIconButtonSkeleton = forwardRef(function DummyIconButtonSkeleton<Element extends ElementType>(
	props: DummyIconButtonSkeletonProps<Element>,
	ref: DummyIconButtonSkeletonRef<Element>
): ReactElement {
	const { color, colorMode, variant } = useDummyIconButtonContext();

	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const styles = useDummyPushableOverlayStyles({
		color,
		colorMode,
		variant: variant === 'icon' ? 'transparent' : variant
	});

	return (
		<Skeleton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_DUMMY_ICON_BUTTON_SKELETON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			isAnimated={false}
			isLoaded={false}
			radius='full'
			sx={{ [`& .${__KEY_SKELETON_OVERLAY_CLASS__}`]: { background: styles.color } }}
		>
			{children}
		</Skeleton>
	);
});

DummyIconButtonSkeleton.displayName = 'DummyIconButtonSkeleton';

export default DummyIconButtonSkeleton;
