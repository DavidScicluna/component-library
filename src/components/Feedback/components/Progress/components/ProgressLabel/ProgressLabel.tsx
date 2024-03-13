import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useProgressContext } from '../../common/hooks';

import { DEFAULT_PROGRESS_LABEL_AS } from './common/constants';
import { KEYS_PROGRESS_LABEL_CLASS } from './common/keys';
import type { ProgressLabelElement, ProgressLabelProps, ProgressLabelRef } from './common/types';

const ProgressLabel = forwardRef(function ProgressLabel<Element extends ProgressLabelElement>(
	props: ProgressLabelProps<Element>,
	ref: ProgressLabelRef<Element>
): JSX.Element {
	const { colorMode } = useProgressContext();

	const DEFAULT_PROGRESS_LABEL_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'background',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_PROGRESS_LABEL_AS,
		className = DEFAULT_CLASSNAME,
		align = 'center',
		color = DEFAULT_PROGRESS_LABEL_COLOR,
		fontSize = 'xs',
		fontWeight = 'semibold',
		lineClamp = 1,
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_PROGRESS_LABEL_CLASS, { [className]: !!className })}
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
