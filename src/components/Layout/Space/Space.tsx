import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetResponsiveValue } from '../../../common/hooks';
import Box from '../Box';

import type { SpaceDimension, SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef(function Space<Element extends ElementType>(
	props: SpaceProps<Element>,
	ref: SpaceRef<Element>
): ReactElement {
	const { className = '', width: w = 0, height: h = 0, ...rest } = props;

	const width = useGetResponsiveValue<SpaceDimension>(w);
	const height = useGetResponsiveValue<SpaceDimension>(h);

	return (
		<Box
			{...(rest as SpaceProps<Element>)}
			ref={ref}
			className={classNames({
				[classes.sizing.w[width]]: !!w,
				[classes.sizing.h[height]]: !!h,
				[className]: !!className
			})}
		/>
	);
});

export default Space;
