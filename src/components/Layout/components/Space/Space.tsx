import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import Box from '@components/Box';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import { useGetSpaceClasses } from './common/hooks';
import type { SpaceProps, SpaceRef } from './common/types';

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

	const classes = useGetSpaceClasses<Element>({ width, height });

	return <Box<Element> {...rest} ref={ref} className={classNames(classes, { [className]: !!className })} />;
});

export default Space;
