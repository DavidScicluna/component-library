import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Divider } from '@components/DataDisplay';
import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import { KEYS_MODAL_STACK_CLASS } from './common/keys';
import type { ModalStackProps, ModalStackRef } from './common/types';

const ModalStack = forwardRef(function ModalStack<Element extends PolymorphicElementType>(
	props: ModalStackProps<Element>,
	ref: ModalStackRef<Element>
): JSX.Element {
	const { colorMode, spacing: DEFAULT_MODAL_STACK_SPACING } = useModalContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		isDivisible = true,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		divider = <Divider colorMode={colorMode} />,
		spacing = DEFAULT_MODAL_STACK_SPACING,
		...rest
	} = props;

	return (
		<VStack
			{...(rest as VStackProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MODAL_STACK_CLASS, { [className]: !!className })}
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
