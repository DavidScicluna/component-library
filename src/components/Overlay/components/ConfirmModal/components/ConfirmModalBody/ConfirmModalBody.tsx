import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { DEFAULT_CONFIRM_MODAL_BODY_SPACING } from './common/constants';
import { KEYS_CONFIRM_MODAL_BODY_CLASS } from './common/keys';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './common/types';

const ConfirmModalBody = forwardRef(function ConfirmModalBody<Element extends PolymorphicElementType>(
	props: ConfirmModalBodyProps<Element>,
	ref: ConfirmModalBodyRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignItems = 'center',
		justifyContent = 'center',
		spacing = DEFAULT_CONFIRM_MODAL_BODY_SPACING,
		...rest
	} = props;

	return (
		<VStack
			{...(rest as VStackProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CONFIRM_MODAL_BODY_CLASS, { [className]: !!className })}
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
