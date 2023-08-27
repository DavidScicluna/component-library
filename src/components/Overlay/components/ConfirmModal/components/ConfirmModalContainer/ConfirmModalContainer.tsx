import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { useKey } from 'rooks';

// import { v4 as uuid } from 'uuid';
import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

// import { useConst } from '@common/hooks';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__
} from '../../common/constants';
import { useConfirmModalContext } from '../../common/hooks';
import type { ConfirmModalDefaultElement, ConfirmModalElement } from '../../common/types';
import { ConfirmModalBackdrop } from '../ConfirmModalBackdrop';
import { ConfirmModalTransition } from '../ConfirmModalTransition';

import { useConfirmModalContainerClasses } from './common/hooks';
import type { ConfirmModalContainerProps, ConfirmModalContainerRef } from './common/types';

const ConfirmModalContainer = forwardRef(function ConfirmModalContainer<
	Element extends ConfirmModalElement = ConfirmModalDefaultElement
>(props: ConfirmModalContainerProps<Element>, ref: ConfirmModalContainerRef<Element>): ReactElement {
	// const modalID = useConst<string>(uuid());

	const { color, colorMode, isOpen, onClose } = useConfirmModalContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderBackdrop,
		closeOnEsc = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop = __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
		onEsc,
		onOverlayClick,
		...rest
	} = props;

	const classes = useConfirmModalContainerClasses();

	const handleEscapeClick = () => {
		onClose();
		if (onEsc) {
			onEsc();
		}
	};

	const handleOverlayClick = () => {
		onClose();
		if (onOverlayClick) {
			onOverlayClick();
		}
	};

	useKey(['Escape'], handleEscapeClick, { when: closeOnEsc });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-container`, classes.container, {
				[className]: !!className
			})}
			w='100vw'
			h='100vh'
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{hasBackdrop ? (
				<GridItem columnStart={1} rowStart={1}>
					<ConfirmModalTransition className={classes.backdrop} in={isOpen} variant='fade'>
						{renderBackdrop ? renderBackdrop({ color, colorMode }) : <ConfirmModalBackdrop />}
					</ConfirmModalTransition>
				</GridItem>
			) : null}

			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Center w='100%' h='100%' onClick={closeOnOverlayClick ? handleOverlayClick : undefined}>
					<ConfirmModalTransition className={classes.content} in={isOpen} variant='pop'>
						{children}
					</ConfirmModalTransition>
				</Center>
			</GridItem>
		</Grid>
	);
});

export default ConfirmModalContainer;
