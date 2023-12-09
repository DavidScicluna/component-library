import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import { useVisuallyHiddenStyles } from './common/hooks';
import { __KEYS_VISUALLY_HIDDEN_CLASS__ } from './common/keys';
import type {
	VisuallyHiddenDefaultElement,
	VisuallyHiddenElement,
	VisuallyHiddenProps,
	VisuallyHiddenRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const VisuallyHidden: PolymorphicComponentWithRef = forwardRef(function VisuallyHidden<
	Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement
>(props: VisuallyHiddenProps<Element>, ref: VisuallyHiddenRef<Element>): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, sx, ...rest } = props;

	const styles = useVisuallyHiddenStyles();

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_VISUALLY_HIDDEN_CLASS__, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

VisuallyHidden.displayName = 'VisuallyHidden';

export default <Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <VisuallyHidden<Element> {...props} />;
