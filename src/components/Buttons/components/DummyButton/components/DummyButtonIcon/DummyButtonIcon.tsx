import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyButtonContext, useDummyButtonFontSize } from '../../common/hooks';
import { DummyButtonSkeleton } from '../DummyButtonSkeleton';

import { __DEFAULT_DUMMY_BUTTON_ICON_AS__ } from './common/constants';
import { __KEY_DUMMY_BUTTON_ICON_CLASS__ } from './common/keys';
import type { DummyButtonIconElement, DummyButtonIconProps, DummyButtonIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyButtonIcon = forwardRef(function DummyButtonIcon<Element extends DummyButtonIconElement>(
	props: DummyButtonIconProps<Element>,
	ref: DummyButtonIconRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_DUMMY_BUTTON_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMY_BUTTON_ICON_COLORMODE__,
		size
	} = useDummyButtonContext();

	const {
		as = __DEFAULT_DUMMY_BUTTON_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMY_BUTTON_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMY_BUTTON_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyButtonFontSize({ size });

	return (
		<DummyButtonSkeleton radius='full'>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
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

// DummyButtonIcon.displayName = 'DummyButtonIcon';

export default DummyButtonIcon;
