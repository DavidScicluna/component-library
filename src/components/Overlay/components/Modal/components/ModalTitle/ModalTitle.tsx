import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';
import { Text } from '@components/Typography';

import { getModalTitleID } from '../../common/utils';

import { __KEYS_MODAL_TITLE_CLASS__ } from './common/keys';
import type { ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef } from './common/types';

const ModalTitle = forwardRef(function ModalTitle<Element extends ModalTitleElement = ModalTitleDefaultElement>(
	props: ModalTitleProps<Element>,
	ref: ModalTitleRef<Element>
): ReactElement {
	const { colorMode, id } = useModalContext();

	const __DEFAULT_MODAL_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_MODAL_TITLE_COLOR__,
		fontSize = 'xl',
		fontWeight = 'bold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			id={getModalTitleID(id)}
			className={classNames(__KEYS_MODAL_TITLE_CLASS__, { [className]: !!className })}
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

ModalTitle.displayName = 'ModalTitle';

export default ModalTitle;
