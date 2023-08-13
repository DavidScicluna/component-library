import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { VStack } from '@components/Layout';
import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';

import type { ConfirmModalStackProps, ConfirmModalStackRef } from './common/types';

const ConfirmModalStack = forwardRef(function ConfirmModalStack<Element extends ElementType>(
	props: ConfirmModalStackProps<Element>,
	ref: ConfirmModalStackRef<Element>
): ReactElement {
	const { spacing: __DEFAULT_CONFIRM_MODAL_STACK_SPACING__ } = useModalContext();

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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-stack`, { [className]: !!className })}
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

export default ConfirmModalStack;
