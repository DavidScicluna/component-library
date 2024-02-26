import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useDummyButtonContext, useDummyButtonFontSize } from '../../common/hooks';
import { DummyButtonSkeleton } from '../DummyButtonSkeleton';

import { DEFAULT_DUMMY_BUTTON_ICON_AS, DEFAULT_DUMMY_BUTTON_ICON_VARIANT } from './common/constants';
import { KEY_DUMMY_BUTTON_ICON_CLASS } from './common/keys';
import type { DummyButtonIconElement, DummyButtonIconProps, DummyButtonIconRef } from './common/types';

const DummyButtonIcon = forwardRef(function DummyButtonIcon<Element extends DummyButtonIconElement>(
	props: DummyButtonIconProps<Element>,
	ref: DummyButtonIconRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_DUMMY_BUTTON_ICON_COLOR,
		colorMode: DEFAULT_DUMMY_BUTTON_ICON_COLORMODE,
		size
	} = useDummyButtonContext();

	const {
		as = DEFAULT_DUMMY_BUTTON_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_DUMMY_BUTTON_ICON_COLOR,
		colorMode = DEFAULT_DUMMY_BUTTON_ICON_COLORMODE,
		variant = DEFAULT_DUMMY_BUTTON_ICON_VARIANT,
		...rest
	} = props;

	const fontSize = useDummyButtonFontSize({ size });

	return (
		<DummyButtonSkeleton radius='full'>
			<Icon
				{...(rest as IconProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEY_DUMMY_BUTTON_ICON_CLASS, { [className]: !!className })}
				w={`${fontSize}px`}
				h={`${fontSize}px`}
				color={color}
				colorMode={colorMode}
				size={`${fontSize}px`}
				variant={variant}
			/>
		</DummyButtonSkeleton>
	);
});

// DummyButtonIcon.displayName = 'DummyButtonIcon';

export default DummyButtonIcon;
