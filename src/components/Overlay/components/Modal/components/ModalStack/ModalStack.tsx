import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Divider } from '@components/DataDisplay';
import { VStack } from '@components/Layout';
import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';

import { __KEYS_MODAL_STACK_CLASS__ } from './common/keys';
import type { ModalStackProps, ModalStackRef } from './common/types';

const ModalStack = forwardRef(function ModalStack<Element extends ElementType>(
	props: ModalStackProps<Element>,
	ref: ModalStackRef<Element>
): ReactElement {
	const { colorMode, spacing: __DEFAULT_MODAL_STACK_SPACING__ } = useModalContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		isDivisible = true,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		divider = isDivisible ? <Divider colorMode={colorMode} /> : undefined,
		spacing = __DEFAULT_MODAL_STACK_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MODAL_STACK_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems={alignItems}
			justifyContent={justifyContent}
			divider={divider}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

ModalStack.displayName = 'ModalStack';

export default ModalStack;
