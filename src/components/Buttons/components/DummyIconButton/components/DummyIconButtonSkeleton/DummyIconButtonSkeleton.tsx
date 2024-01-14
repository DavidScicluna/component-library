import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Skeleton } from '@components/Feedback';
import { __KEY_SKELETON_OVERLAY_CLASS__ } from '@components/Feedback/components/Skeleton/common/keys';
import { useDummyPushableOverlayStyles } from '@components/Overlay/components/DummyPushableOverlay/common/hooks';

import { useDummyIconButtonContext } from '../../common/hooks';

import { __KEY_DUMMY_ICON_BUTTON_SKELETON_CLASS__ } from './common/keys';
import type { DummyIconButtonSkeletonProps, DummyIconButtonSkeletonRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyIconButtonSkeleton: PolymorphicComponentWithRef = forwardRef(function DummyIconButtonSkeleton<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: DummyIconButtonSkeletonProps<Element>, ref: DummyIconButtonSkeletonRef<Element>): ReactElement {
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

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyIconButtonSkeleton<Element> {...props} />;
