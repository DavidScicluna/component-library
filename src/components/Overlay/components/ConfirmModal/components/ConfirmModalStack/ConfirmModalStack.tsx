import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { useConfirmModalContext } from '../../common/hooks';

import { KEYS_CONFIRM_MODAL_STACK_CLASS } from './common/keys';
import type { ConfirmModalStackProps, ConfirmModalStackRef } from './common/types';

const ConfirmModalStack = forwardRef(function ConfirmModalStack<Element extends PolymorphicElementType>(
	props: ConfirmModalStackProps<Element>,
	ref: ConfirmModalStackRef<Element>
): JSX.Element {
	const { spacing: DEFAULT_CONFIRM_MODAL_STACK_SPACING } = useConfirmModalContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = DEFAULT_CONFIRM_MODAL_STACK_SPACING,
		...rest
	} = props;

	return (
		<VStack
			{...(rest as VStackProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CONFIRM_MODAL_STACK_CLASS, { [className]: !!className })}
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

// ConfirmModalStack.displayName = 'ConfirmModalStack';

export default ConfirmModalStack;
