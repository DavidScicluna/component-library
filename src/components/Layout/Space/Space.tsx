import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { __DEFAULT_CLASSNAME__ } from '../../../common/constants';
import { useGetResponsiveValue } from '../../../common/hooks';
import Box from '../Box';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import type { SpaceDimension, SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef(function Space<Element extends ElementType>(
	props: SpaceProps<Element>,
	ref: SpaceRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		width: w = __DEFAULT_SPACE_WIDTH__,
		height: h = __DEFAULT_SPACE_HEIGHT__,
		...rest
	} = props;

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
