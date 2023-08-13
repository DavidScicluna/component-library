import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';
import { Text } from '@components/Typography';

import type { ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef } from './common/types';

const ModalTitle = forwardRef(function ModalTitle<Element extends ModalTitleElement = ModalTitleDefaultElement>(
	props: ModalTitleProps<Element>,
	ref: ModalTitleRef<Element>
): ReactElement {
	const { colorMode } = useModalContext();

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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-modal-title`, { [className]: !!className })}
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

export default ModalTitle;
