import { forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { useGetResponsiveValue } from '../../../common/hooks';
import Box from '../Box';

import { SpaceDimension, SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef<SpaceRef, SpaceProps>(function Space(props, ref): ReactElement {
	const { className = '', width: w = 0, height: h = 0, ...rest } = props;

	const width = useGetResponsiveValue<SpaceDimension>(w);
	const height = useGetResponsiveValue<SpaceDimension>(h);

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames({
				[`w-${width}`]: !!w,
				[`h-${height}`]: !!h,
				[className]: !!className
			})}
		/>
	);
});

export default Space;
