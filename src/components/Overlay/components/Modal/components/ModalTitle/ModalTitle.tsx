import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useModalContext } from '../../common/hooks';
import { getModalTitleID } from '../../common/utils';

import { __DEFAULT_MODAL_TITLE_AS__ } from './common/constants';
import { __KEYS_MODAL_TITLE_CLASS__ } from './common/keys';
import type { ModalTitleElement, ModalTitleProps, ModalTitleRef } from './common/types';

const ModalTitle = forwardRef(function ModalTitle<Element extends ModalTitleElement>(
	props: ModalTitleProps<Element>,
	ref: ModalTitleRef<Element>
): JSX.Element {
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
		as = __DEFAULT_MODAL_TITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color = __DEFAULT_MODAL_TITLE_COLOR__,
		fontSize = 'xl',
		fontWeight = 'bold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
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

// ModalTitle.displayName = 'ModalTitle';

export default ModalTitle;
