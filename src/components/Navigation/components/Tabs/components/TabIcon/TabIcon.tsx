import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useTabsContext, useTabsTabFontSize } from '../../common/hooks';

import { __DEFAULT_TAB_ICON_AS__ } from './common/constants';
import { __KEYS_TAB_ICON_CLASS__ } from './common/keys';
import type { TabIconElement, TabIconProps, TabIconRef } from './common/types';

const TabIcon = forwardRef(function TabIcon<Element extends TabIconElement>(
	props: TabIconProps<Element>,
	ref: TabIconRef<Element>
): JSX.Element {
	const { color: __DEFAULT_TAB_ICON_COLOR__, colorMode: __DEFAULT_TAB_ICON_COLORMODE__, size } = useTabsContext();

	const {
		as = __DEFAULT_TAB_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_TAB_ICON_COLOR__,
		colorMode = __DEFAULT_TAB_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useTabsTabFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_TAB_ICON_CLASS__, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

// TabIcon.displayName = 'TabIcon';

export default TabIcon;
