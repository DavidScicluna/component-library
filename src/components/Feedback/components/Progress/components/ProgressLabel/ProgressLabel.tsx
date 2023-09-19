import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';
import { Text } from '@components/Typography';

import { __KEYS_PROGRESS_LABEL_CLASS__ } from './common/keys';
import type {
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef
} from './common/types';

const ProgressLabel = forwardRef(function ProgressLabel<
	Element extends ProgressLabelElement = ProgressLabelDefaultElement
>(props: ProgressLabelProps<Element>, ref: ProgressLabelRef<Element>): ReactElement {
	const { colorMode } = useModalContext();

	const __DEFAULT_MODAL_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'background',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_MODAL_TITLE_COLOR__,
		fontSize = 'xs',
		fontWeight = 'semibold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_PROGRESS_LABEL_CLASS__, { [className]: !!className })}
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

ProgressLabel.displayName = 'ProgressLabel';

export default ProgressLabel;
