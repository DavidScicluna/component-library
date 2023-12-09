import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './common/constants';
import { useSpaceClasses } from './common/hooks';
import { __KEYS_SPACE_CLASS__ } from './common/keys';
import type { SpaceProps, SpaceRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Space: PolymorphicComponentWithRef = forwardRef(function Space<
	Element extends ElementType = PolymorphicDefaultElement
>(props: SpaceProps<Element>, ref: SpaceRef<Element>): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		width = __DEFAULT_SPACE_WIDTH__,
		height = __DEFAULT_SPACE_HEIGHT__,
		...rest
	} = props;

	const classes = useSpaceClasses<Element>({ width, height });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_SPACE_CLASS__, classes, { [className]: !!className })}
		/>
	);
});

Space.displayName = 'Space';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Space<Element> {...props} />;
