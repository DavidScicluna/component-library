import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetClass } from '@common/hooks';

import Box from '@components/Box';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import type { SpaceDimension, SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef(function Space<Element extends ElementType>(
	props: SpaceProps<Element>,
	ref: SpaceRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		width = __DEFAULT_SPACE_WIDTH__,
		height = __DEFAULT_SPACE_HEIGHT__,
		...rest
	} = props;

	const widthClassName = useGetClass<SpaceDimension>(width, ['sizing', 'w']);
	const heightClassName = useGetClass<SpaceDimension>(height, ['sizing', 'h']);

	return (
		<Box<Element>
			{...(rest as SpaceProps<Element>)}
			ref={ref}
			className={classNames({
				[widthClassName]: !!width,
				[heightClassName]: !!heightClassName,
				[className]: !!className
			})}
		/>
	);
});

export default Space;
