import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyTabsContext, useDummyTabsDummyTabFontSize } from '../../common/hooks';
import { DummyTabSkeleton } from '../DummyTabSkeleton';

import { DEFAULT_DUMMY_TAB_ICON_AS, DEFAULT_DUMMY_TAB_ICON_VARIANT } from './common/constants';
import { KEYS_DUMMY_TAB_ICON_CLASS } from './common/keys';
import type { DummyTabIconElement, DummyTabIconProps, DummyTabIconRef } from './common/types';

const DummyTabIcon = forwardRef(function DummyTabIcon<Element extends DummyTabIconElement>(
	props: DummyTabIconProps<Element>,
	ref: DummyTabIconRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_DUMMY_TAB_ICON_COLOR,
		colorMode: DEFAULT_DUMMY_TAB_ICON_COLORMODE,
		size
	} = useDummyTabsContext();

	const {
		as = DEFAULT_DUMMY_TAB_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_DUMMY_TAB_ICON_COLOR,
		colorMode = DEFAULT_DUMMY_TAB_ICON_COLORMODE,
		variant = DEFAULT_DUMMY_TAB_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useDummyTabsDummyTabFontSize({ size });

	return (
		<DummyTabSkeleton color={color} colorMode={colorMode} radius='full'>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_DUMMY_TAB_ICON_CLASS, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant={variant}
			/>
		</DummyTabSkeleton>
	);
});

// DummyTabIcon.displayName = 'DummyTabIcon';

export default DummyTabIcon;
