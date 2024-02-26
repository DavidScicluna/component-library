import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useMediaQuery } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import { KEYS_MODAL_FOOTER_CLASS } from './common/keys';
import type { ModalFooterProps, ModalFooterRef } from './common/types';

const ModalFooter = forwardRef(function ModalFooter<Element extends PolymorphicElementType>(
	props: ModalFooterProps<Element>,
	ref: ModalFooterRef<Element>
): JSX.Element {
	const isSm = useMediaQuery({ breakpoint: 'sm', type: 'width', direction: 'max' });

	const { color, colorMode, onClose, spacing: DEFAULT_MODAL_FOOTER_SPACING } = useModalContext();

	const {
		className = DEFAULT_CLASSNAME,
		renderCancel,
		renderAction,
		direction = isSm ? 'column-reverse' : 'row',
		alignItems = 'center',
		justifyContent = isSm ? 'center' : 'space-between',
		spacing = DEFAULT_MODAL_FOOTER_SPACING,
		...rest
	} = props;

	return (
		<Stack
			{...(rest as StackProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MODAL_FOOTER_CLASS, { [className]: !!className })}
			w='100%'
			h='100%'
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{renderCancel
				? renderCancel({
						colorMode,
						isFullWidth: isSm || !renderAction,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'monochrome'
					})
				: null}

			{renderAction
				? renderAction({
						color,
						colorMode,
						isFullWidth: isSm || !renderCancel,
						size: 'md',
						variant: 'contained'
					})
				: null}
		</Stack>
	);
});

// ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
