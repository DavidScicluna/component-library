import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { DEFAULT_SPACE_HEIGHT, DEFAULT_SPACE_WIDTH } from './common/constants';
import { useSpaceClasses, useSpaceResponsiveValues } from './common/hooks';
import { KEYS_SPACE_CLASS } from './common/keys';
import type { SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef(function Space<Element extends PolymorphicElementType>(
	props: SpaceProps<Element>,
	ref: SpaceRef<Element>
): JSX.Element {
	const {
		className = DEFAULT_CLASSNAME,
		width: widthProp = DEFAULT_SPACE_WIDTH,
		height: heightProp = DEFAULT_SPACE_HEIGHT,
		...rest
	} = props;

	const { width, height } = useSpaceResponsiveValues({ width: widthProp, height: heightProp });

	const classes = useSpaceClasses<Element>({ width, height });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(KEYS_SPACE_CLASS, classes, { [className]: !!className })}
		/>
	);
});

// Space.displayName = 'Space';

export default Space;
