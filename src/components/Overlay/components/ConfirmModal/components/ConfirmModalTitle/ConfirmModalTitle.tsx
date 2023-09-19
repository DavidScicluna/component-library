import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_TITLE_CLASS__ } from './common/keys';
import type {
	ConfirmModalTitleDefaultElement,
	ConfirmModalTitleElement,
	ConfirmModalTitleProps,
	ConfirmModalTitleRef
} from './common/types';

const ConfirmModalTitle = forwardRef(function ConfirmModalTitle<
	Element extends ConfirmModalTitleElement = ConfirmModalTitleDefaultElement
>(props: ConfirmModalTitleProps<Element>, ref: ConfirmModalTitleRef<Element>): ReactElement {
	const { colorMode } = useConfirmModalContext();

	const __DEFAULT_CONFIRM_MODAL_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_CONFIRM_MODAL_TITLE_COLOR__,
		fontSize = '4xl',
		fontWeight = 'bold',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
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

ConfirmModalTitle.displayName = 'ConfirmModalTitle';

export default ConfirmModalTitle;
