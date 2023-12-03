import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef } from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useDummyIconButtonContext, useDummyIconButtonFontSize } from '../../common/hooks';
import { DummyIconButtonSkeleton } from '../DummyIconButtonSkeleton';

import { __KEY_DUMMY_ICON_BUTTON_ICON_CLASS__ } from './common/keys';
import type {
	DummyIconButtonIconDefaultElement,
	DummyIconButtonIconElement,
	DummyIconButtonIconProps,
	DummyIconButtonIconRef
} from './common/types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyIconButtonIcon: PolymorphicComponentWithRef = forwardRef(function DummyIconButtonIcon<
	Element extends DummyIconButtonIconElement = DummyIconButtonIconDefaultElement
>(props: DummyIconButtonIconProps<Element>, ref: DummyIconButtonIconRef<Element>): ReactElement {
	const {
		color: __DEFAULT_DUMMYICONBUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMYICONBUTTON_ICON_COLORMODE__,
		size
	} = useDummyIconButtonContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMYICONBUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMYICONBUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyIconButtonFontSize({ size });

	return (
		<DummyIconButtonSkeleton>
			<Icon
				{...rest}
				ref={ref}
				className={classNames(__KEY_DUMMY_ICON_BUTTON_ICON_CLASS__, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant='unstyled'
			/>
		</DummyIconButtonSkeleton>
	);
});

DummyIconButtonIcon.displayName = 'DummyIconButtonIcon';

export default DummyIconButtonIcon;
