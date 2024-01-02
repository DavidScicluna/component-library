import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { VStack } from '@components/Layout';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_ACTIONS_CLASS__ } from './common/keys';
import type { ConfirmModalActionsProps, ConfirmModalActionsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ConfirmModalActions: PolymorphicComponentWithRef = forwardRef(function ConfirmModalActions<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ConfirmModalActionsProps<Element>, ref: ConfirmModalActionsRef<Element>): ReactElement {
	const { color, colorMode, onClose, spacing: __DEFAULT_CONFIRM_MODAL_ACTIONS_SPACING__ } = useConfirmModalContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderCancel,
		renderAction,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = __DEFAULT_CONFIRM_MODAL_ACTIONS_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CONFIRM_MODAL_ACTIONS_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{renderAction
				? renderAction({
						color,
						colorMode,
						isFullWidth: true,
						size: 'md',
						variant: 'contained'
					})
				: null}

			{renderCancel
				? renderCancel({
						colorMode,
						isFullWidth: true,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'monochrome'
					})
				: null}
		</VStack>
	);
});

ConfirmModalActions.displayName = 'ConfirmModalActions';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ConfirmModalActions<Element> {...props} />;
