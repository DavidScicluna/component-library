import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useTabsContext, useTabsTabFontSize } from '../../common/hooks';

import { DEFAULT_TAB_ICON_AS, DEFAULT_TAB_ICON_VARIANT } from './common/constants';
import { KEYS_TAB_ICON_CLASS } from './common/keys';
import type { TabIconElement, TabIconProps, TabIconRef } from './common/types';

const TabIcon = forwardRef(function TabIcon<Element extends TabIconElement>(
	props: TabIconProps<Element>,
	ref: TabIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_TAB_ICON_COLOR, colorMode: DEFAULT_TAB_ICON_COLORMODE, size } = useTabsContext();

	const {
		as = DEFAULT_TAB_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_TAB_ICON_COLOR,
		colorMode = DEFAULT_TAB_ICON_COLORMODE,
		variant = DEFAULT_TAB_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useTabsTabFontSize({ size });

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_TAB_ICON_CLASS, { [className]: !!className })}
			w={`${fontSize}px`}
			h={`${fontSize}px`}
			color={color}
			colorMode={colorMode}
			size={`${fontSize}px`}
			variant={variant}
		/>
	);
});

// TabIcon.displayName = 'TabIcon';

export default TabIcon;
