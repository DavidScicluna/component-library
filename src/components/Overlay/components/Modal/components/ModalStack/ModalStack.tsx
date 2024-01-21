import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Divider } from '@components/DataDisplay';
import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import { __KEYS_MODAL_STACK_CLASS__ } from './common/keys';
import type { ModalStackProps, ModalStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ModalStack = forwardRef(function ModalStack<Element extends PolymorphicElementType>(
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
		divider = <Divider colorMode={colorMode} />,
		spacing = __DEFAULT_MODAL_STACK_SPACING__,
		...rest
	} = props;

	return (
		<VStack
			{...(rest as VStackProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_MODAL_STACK_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems={alignItems}
			justifyContent={justifyContent}
			divider={isDivisible ? divider : undefined}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

// ModalStack.displayName = 'ModalStack';

export default ModalStack;
