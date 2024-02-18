import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';
import { getConfirmModalTitleID } from '../../common/utils';

import { __DEFAULT_CONFIRM_MODAL_TITLE_AS__ } from './common/constants';
import { __KEYS_CONFIRM_MODAL_TITLE_CLASS__ } from './common/keys';
import type { ConfirmModalTitleElement, ConfirmModalTitleProps, ConfirmModalTitleRef } from './common/types';

const ConfirmModalTitle = forwardRef(function ConfirmModalTitle<Element extends ConfirmModalTitleElement>(
	props: ConfirmModalTitleProps<Element>,
	ref: ConfirmModalTitleRef<Element>
): JSX.Element {
	const { colorMode, id } = useConfirmModalContext();

	const __DEFAULT_CONFIRM_MODAL_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = __DEFAULT_CONFIRM_MODAL_TITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_CONFIRM_MODAL_TITLE_COLOR__,
		fontSize = '4xl',
		fontWeight = 'bold',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			id={getConfirmModalTitleID(id)}
			className={classNames(__KEYS_CONFIRM_MODAL_TITLE_CLASS__, { [className]: !!className })}
			align={align}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineClamp={lineClamp}
		>
			{children}
		</Text>
	);
});

// ConfirmModalTitle.displayName = 'ConfirmModalTitle';

export default ConfirmModalTitle;
