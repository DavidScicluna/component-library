import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { VStack } from '@components/Layout';

import { __DEFAULT_CONFIRM_MODAL_BODY_SPACING__ } from './common/constants';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './common/types';

const ConfirmModalBody = forwardRef(function ConfirmModalBody<Element extends ElementType>(
	props: ConfirmModalBodyProps<Element>,
	ref: ConfirmModalBodyRef<Element>
): ReactElement {
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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-body`, { [className]: !!className })}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

export default ConfirmModalBody;