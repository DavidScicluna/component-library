import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import { useSpaceClasses, useSpaceResponsiveValues } from './common/hooks';
import { __KEYS_SPACE_CLASS__ } from './common/keys';
import type { SpaceProps, SpaceRef } from './common/types';

const Space = forwardRef(function Space<Element extends PolymorphicElementType>(
	props: SpaceProps<Element>,
	ref: SpaceRef<Element>
): JSX.Element {
	const {
		className = __DEFAULT_CLASSNAME__,
		width: widthProp = __DEFAULT_SPACE_WIDTH__,
		height: heightProp = __DEFAULT_SPACE_HEIGHT__,
		...rest
	} = props;

	const { width, height } = useSpaceResponsiveValues({ width: widthProp, height: heightProp });

	const classes = useSpaceClasses<Element>({ width, height });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_SPACE_CLASS__, classes, { [className]: !!className })}
		/>
	);
});

// Space.displayName = 'Space';

export default Space;
