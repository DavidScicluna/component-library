import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyTabsContext, useDummyTabsDummyTabFontSize } from '../../common/hooks';
import { DummyTabSkeleton } from '../DummyTabSkeleton';

import { __DEFAULT_DUMMY_TAB_ICON_AS__ } from './common/constants';
import { __KEYS_DUMMY_TAB_ICON_CLASS__ } from './common/keys';
import type { DummyTabIconElement, DummyTabIconProps, DummyTabIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyTabIcon = forwardRef(function DummyTabIcon<Element extends DummyTabIconElement>(
	props: DummyTabIconProps<Element>,
	ref: DummyTabIconRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_DUMMY_TAB_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMY_TAB_ICON_COLORMODE__,
		size
	} = useDummyTabsContext();

	const {
		as = __DEFAULT_DUMMY_TAB_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMY_TAB_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMY_TAB_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyTabsDummyTabFontSize({ size });

	return (
		<DummyTabSkeleton color={color} colorMode={colorMode} radius='full'>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_DUMMY_TAB_ICON_CLASS__, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant='unstyled'
			/>
		</DummyTabSkeleton>
	);
});

// DummyTabIcon.displayName = 'DummyTabIcon';

export default DummyTabIcon;
