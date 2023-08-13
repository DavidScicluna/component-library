import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Divider } from '@components/DataDisplay';
import { VStack } from '@components/Layout';
import { useModalContext } from '@components/Overlay/components/Modal/common/hooks';

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
		spacing = __DEFAULT_MODAL_STACK_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-modal-stack`, { [className]: !!className })}
			w='100%'
			h='100%'
			// minHeight={size === 'full' ? 'inherit' : undefined}
			divider={isDivisible ? <Divider colorMode={colorMode} /> : undefined}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

export default ModalStack;
