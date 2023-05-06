import { forwardRef, ReactElement } from 'react';

import Icon from '../../../../Icon';
import { useStateLabelContext } from '../../common/hooks';

import { StateLabelIconProps, StateLabelIconRef } from './common/types';

const StateLabelIcon = forwardRef<StateLabelIconRef, StateLabelIconProps>(function StateLabelIcon(
	props,
	ref
): ReactElement {
	const { color, colorMode } = useStateLabelContext();

	return <Icon {...props} ref={ref} color={color} colorMode={colorMode} />;
});

export default StateLabelIcon;
