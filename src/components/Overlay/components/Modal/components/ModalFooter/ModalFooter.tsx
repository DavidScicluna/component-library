import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useMediaQuery } from '@common/hooks';

import { Stack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import type { ModalFooterProps, ModalFooterRef } from './common/types';

const ModalFooter = forwardRef(function ModalFooter<Element extends ElementType>(
	props: ModalFooterProps<Element>,
	ref: ModalFooterRef<Element>
): ReactElement {
	const isSm = useMediaQuery({ breakpoint: 'sm', type: 'width', direction: 'max' });

	const { color, colorMode, onClose, spacing: __DEFAULT_MODAL_FOOTER_SPACING__ } = useModalContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderCancel,
		renderAction,
		direction = isSm ? 'column-reverse' : 'row',
		alignItems = 'center',
		justifyContent = isSm ? 'center' : 'space-between',
		spacing = __DEFAULT_MODAL_FOOTER_SPACING__,
		...rest
	} = props;

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-modal-footer`, { [className]: !!className })}
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{renderCancel
				? renderCancel({
						color: 'gray',
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

export default ModalFooter;
