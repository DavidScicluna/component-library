import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useProgressContext } from '../../common/hooks';

import { __DEFAULT_PROGRESS_LABEL_AS__ } from './common/constants';
import { __KEYS_PROGRESS_LABEL_CLASS__ } from './common/keys';
import type { ProgressLabelElement, ProgressLabelProps, ProgressLabelRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ProgressLabel = forwardRef(function ProgressLabel<Element extends ProgressLabelElement>(
	props: ProgressLabelProps<Element>,
	ref: ProgressLabelRef<Element>
): JSX.Element {
	const { colorMode } = useProgressContext();

	const __DEFAULT_PROGRESS_LABEL_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'background',
		classType: 'text'
	});

	const {
		children,
		as = __DEFAULT_PROGRESS_LABEL_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_PROGRESS_LABEL_COLOR__,
		fontSize = 'xs',
		fontWeight = 'semibold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
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

// ProgressLabel.displayName = 'ProgressLabel';

export default ProgressLabel;
