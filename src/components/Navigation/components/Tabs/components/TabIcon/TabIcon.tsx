import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef } from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useTabsContext, useTabsTabFontSize } from '../../common/hooks';

import { __KEYS_TAB_ICON_CLASS__ } from './common/keys';
import type { TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const TabIcon: PolymorphicComponentWithRef = forwardRef(function TabIcon<
	Element extends TabIconElement = TabIconDefaultElement
>(props: TabIconProps<Element>, ref: TabIconRef<Element>): ReactElement {
	const { color: __DEFAULT_TAB_ICON_COLOR__, colorMode: __DEFAULT_TAB_ICON_COLORMODE__, size } = useTabsContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_TAB_ICON_COLOR__,
		colorMode = __DEFAULT_TAB_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useTabsTabFontSize({ size });

	return (
		<Icon
			{...rest}
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

TabIcon.displayName = 'TabIcon';

export default TabIcon;
