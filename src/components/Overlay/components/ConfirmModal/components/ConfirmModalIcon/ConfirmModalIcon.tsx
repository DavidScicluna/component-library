import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { useConfirmModalContext } from '../../common/hooks';

import { DEFAULT_CONFIRM_MODAL_ICON_AS } from './common/constants';
import { KEYS_CONFIRM_MODAL_ICON_CLASS } from './common/keys';
import type { ConfirmModalIconElement, ConfirmModalIconProps, ConfirmModalIconRef } from './common/types';

const ConfirmModalIcon = forwardRef(function ConfirmModalIcon<Element extends ConfirmModalIconElement>(
	props: ConfirmModalIconProps<Element>,
	ref: ConfirmModalIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_CONFIRM_MODAL_ICON_COLOR, colorMode: DEFAULT_CONFIRM_MODAL_ICON_COLORMODE } =
		useConfirmModalContext();

	const {
		as = DEFAULT_CONFIRM_MODAL_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_CONFIRM_MODAL_ICON_COLOR,
		colorMode = DEFAULT_CONFIRM_MODAL_ICON_COLORMODE,
		...rest
	} = props;

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_CONFIRM_MODAL_ICON_CLASS, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

// ConfirmModalIcon.displayName = 'ConfirmModalIcon';

export default ConfirmModalIcon;
