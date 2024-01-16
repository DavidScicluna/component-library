import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import { useSpaceClasses, useSpaceResponsiveValues } from './common/hooks';
import { __KEYS_SPACE_CLASS__ } from './common/keys';
import type { SpaceProps, SpaceRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Space = forwardRef(function Space<Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: SpaceProps<Element>,
	ref: SpaceRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		width: widthProp = __DEFAULT_SPACE_WIDTH__,
		height: heightProp = __DEFAULT_SPACE_HEIGHT__,
		...rest
	} = props;

	const { width, height } = useSpaceResponsiveValues<Element>({ width: widthProp, height: heightProp });

	const classes = useSpaceClasses<Element>({ width, height });

	return (
		<Box
			{...(rest as SpaceProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_SPACE_CLASS__, classes, { [className]: !!className })}
		/>
	);
});

// Space.displayName = 'Space';

export default Space;
