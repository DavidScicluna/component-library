import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useModalContext } from '../../common/hooks';
import { getModalTitleID } from '../../common/utils';

import { DEFAULT_MODAL_TITLE_AS } from './common/constants';
import { KEYS_MODAL_TITLE_CLASS } from './common/keys';
import type { ModalTitleElement, ModalTitleProps, ModalTitleRef } from './common/types';

const ModalTitle = forwardRef(function ModalTitle<Element extends ModalTitleElement>(
	props: ModalTitleProps<Element>,
	ref: ModalTitleRef<Element>
): JSX.Element {
	const { colorMode, id } = useModalContext();

	const DEFAULT_MODAL_TITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_MODAL_TITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color = DEFAULT_MODAL_TITLE_COLOR,
		fontSize = 'xl',
		fontWeight = 'bold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			id={getModalTitleID(id)}
			className={classNames(KEYS_MODAL_TITLE_CLASS, { [className]: !!className })}
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
