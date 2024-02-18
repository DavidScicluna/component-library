import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { __DEFAULT_CONFIRM_MODAL_BODY_SPACING__ } from './common/constants';
import { __KEYS_CONFIRM_MODAL_BODY_CLASS__ } from './common/keys';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './common/types';

const ConfirmModalBody = forwardRef(function ConfirmModalBody<Element extends PolymorphicElementType>(
	props: ConfirmModalBodyProps<Element>,
	ref: ConfirmModalBodyRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = 'center',
		justifyContent = 'center',
		spacing = __DEFAULT_CONFIRM_MODAL_BODY_SPACING__,
		...rest
	} = props;

	return (
		<VStack
			{...(rest as VStackProps<Element>)}
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

// ConfirmModalBody.displayName = 'ConfirmModalBody';

export default ConfirmModalBody;
