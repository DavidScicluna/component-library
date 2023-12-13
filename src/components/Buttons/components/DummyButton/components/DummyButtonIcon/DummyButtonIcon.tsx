import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useDummyButtonContext, useDummyButtonFontSize } from '../../common/hooks';
import { DummyButtonSkeleton } from '../DummyButtonSkeleton';

import { __KEY_DUMMY_BUTTON_ICON_CLASS__ } from './common/keys';
import type {
	DummyButtonIconDefaultElement,
	DummyButtonIconElement,
	DummyButtonIconProps,
	DummyButtonIconRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyButtonIcon: PolymorphicComponentWithRef = forwardRef(function DummyButtonIcon<
	Element extends DummyButtonIconElement = DummyButtonIconDefaultElement
>(props: DummyButtonIconProps<Element>, ref: DummyButtonIconRef<Element>): ReactElement {
	const {
		color: __DEFAULT_DUMMYBUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMYBUTTON_ICON_COLORMODE__,
		size
	} = useDummyButtonContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMYBUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMYBUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyButtonFontSize({ size });

	return (
		<DummyButtonSkeleton radius='full'>
			<Icon<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEY_DUMMY_BUTTON_ICON_CLASS__, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant='unstyled'
			/>
		</DummyButtonSkeleton>
	);
});

DummyButtonIcon.displayName = 'DummyButtonIcon';

export default <
	Element extends DummyButtonIconElement = DummyButtonIconDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyButtonIcon<Element> {...props} />;
