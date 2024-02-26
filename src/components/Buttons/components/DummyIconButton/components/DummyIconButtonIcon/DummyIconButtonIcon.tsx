import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyIconButtonContext, useDummyIconButtonFontSize } from '../../common/hooks';
import { DummyIconButtonSkeleton } from '../DummyIconButtonSkeleton';

import { DEFAULT_DUMMY_ICON_BUTTON_ICON_AS, DEFAULT_DUMMY_ICON_BUTTON_ICON_VARIANT } from './common/constants';
import { KEY_DUMMY_ICON_BUTTON_ICON_CLASS } from './common/keys';
import type { DummyIconButtonIconElement, DummyIconButtonIconProps, DummyIconButtonIconRef } from './common/types';

const DummyIconButtonIcon = forwardRef(function DummyIconButtonIcon<Element extends DummyIconButtonIconElement>(
	props: DummyIconButtonIconProps<Element>,
	ref: DummyIconButtonIconRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_DUMMY_ICON_BUTTON_ICON_COLOR,
		colorMode: DEFAULT_DUMMY_ICON_BUTTON_ICON_COLORMODE,
		size
	} = useDummyIconButtonContext();

	const {
		as = DEFAULT_DUMMY_ICON_BUTTON_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_DUMMY_ICON_BUTTON_ICON_COLOR,
		colorMode = DEFAULT_DUMMY_ICON_BUTTON_ICON_COLORMODE,
		variant = DEFAULT_DUMMY_ICON_BUTTON_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useDummyIconButtonFontSize({ size });

	return (
		<DummyIconButtonSkeleton>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEY_DUMMY_ICON_BUTTON_ICON_CLASS, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant={variant}
			/>
		</DummyIconButtonSkeleton>
	);
});

// DummyIconButtonIcon.displayName = 'DummyIconButtonIcon';

export default DummyIconButtonIcon;
