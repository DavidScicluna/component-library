import { forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import { AspectRatioProps, AspectRatioRatio, AspectRatioRef } from './common/types';

const AspectRatio = forwardRef<AspectRatioRef, AspectRatioProps>(function AspectRatio(props, ref): ReactElement {
	const { children, className = '', ratio: r = 'square', ...rest } = props;

	const ratioClassName = useMemo<string>(() => {
		const ratio = getResponsiveValue<AspectRatioRatio>(r);
		if (typeof ratio === 'string') {
			return `aspect-${ratio}`;
		} else {
			return `aspect-[${ratio[0]}/${ratio[1]}]`;
		}
	}, [r]);

	return (
		<Box {...rest} ref={ref} className={classNames(ratioClassName, { [className]: !!className })}>
			{children}
		</Box>
	);
});

export default AspectRatio;
