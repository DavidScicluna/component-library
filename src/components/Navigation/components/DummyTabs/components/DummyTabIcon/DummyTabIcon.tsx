import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Icon } from '@components/DataDisplay';

import { useDummyTabsContext, useDummyTabsDummyTabFontSize } from '../../common/hooks';
import { DummyTabSkeleton } from '../DummyTabSkeleton';

import { __KEYS_DUMMY_TAB_ICON_CLASS__ } from './common/keys';
import type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef
} from './common/types';

const DummyTabIcon = forwardRef(function DummyTabIcon<Element extends DummyTabIconElement = DummyTabIconDefaultElement>(
	props: DummyTabIconProps<Element>,
	ref: DummyTabIconRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_DUMMY_TAB_ICON_COLOR__,
		colorMode: __DEFAULT_DUMMY_TAB_ICON_COLORMODE__,
		size
	} = useDummyTabsContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_DUMMY_TAB_ICON_COLOR__,
		colorMode = __DEFAULT_DUMMY_TAB_ICON_COLORMODE__,
		...rest
	} = props;

	const fontSize = useDummyTabsDummyTabFontSize({ size });

	return (
		<DummyTabSkeleton color={color} colorMode={colorMode} radius='full'>
			<Icon
				{...rest}
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

DummyTabIcon.displayName = 'DummyTabIcon';

export default DummyTabIcon;