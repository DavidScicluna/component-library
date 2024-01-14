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

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_STACK_CLASS__ } from './common/keys';
import type { ConfirmModalStackProps, ConfirmModalStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalStack: PolymorphicComponentWithRef = forwardRef(function ConfirmModalStack<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: ConfirmModalStackProps<Element>, ref: ConfirmModalStackRef<Element>): ReactElement {
	const { spacing: __DEFAULT_CONFIRM_MODAL_STACK_SPACING__ } = useConfirmModalContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = __DEFAULT_CONFIRM_MODAL_STACK_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CONFIRM_MODAL_STACK_CLASS__, { [className]: !!className })}
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

ConfirmModalStack.displayName = 'ConfirmModalStack';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ConfirmModalStack<Element> {...props} />;
