import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useConfirmModalContext } from '../../common/hooks';
import { getConfirmModalTitleID } from '../../common/utils';

import { DEFAULT_CONFIRM_MODAL_TITLE_AS } from './common/constants';
import { KEYS_CONFIRM_MODAL_TITLE_CLASS } from './common/keys';
import type { ConfirmModalTitleElement, ConfirmModalTitleProps, ConfirmModalTitleRef } from './common/types';

const ConfirmModalTitle = forwardRef(function ConfirmModalTitle<Element extends ConfirmModalTitleElement>(
	props: ConfirmModalTitleProps<Element>,
	ref: ConfirmModalTitleRef<Element>
): JSX.Element {
	const { colorMode, id } = useConfirmModalContext();

	const DEFAULT_CONFIRM_MODAL_TITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_CONFIRM_MODAL_TITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'center',
		color = DEFAULT_CONFIRM_MODAL_TITLE_COLOR,
		fontSize = '4xl',
		fontWeight = 'bold',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			id={getConfirmModalTitleID(id)}
			className={classNames(KEYS_CONFIRM_MODAL_TITLE_CLASS, { [className]: !!className })}
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
