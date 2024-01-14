import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { VStack } from '@components/Layout';

import { __DEFAULT_CONFIRM_MODAL_BODY_SPACING__ } from './common/constants';
import { __KEYS_CONFIRM_MODAL_BODY_CLASS__ } from './common/keys';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalBody: PolymorphicComponentWithRef = forwardRef(function ConfirmModalBody<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: ConfirmModalBodyProps<Element>, ref: ConfirmModalBodyRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = 'center',
		justifyContent = 'center',
		spacing = __DEFAULT_CONFIRM_MODAL_BODY_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CONFIRM_MODAL_BODY_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

ConfirmModalBody.displayName = 'ConfirmModalBody';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ConfirmModalBody<Element> {...props} />;
