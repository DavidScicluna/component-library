import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { useKey } from 'rooks';

// import { v4 as uuid } from 'uuid';
import { __DEFAULT_CLASSNAME__ } from '@common/constants';

// import { useConst } from '@common/hooks';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_HAS_BACKDROP__
} from '../../common/constants';
import { useModalContext } from '../../common/hooks';
import type { ModalDefaultElement, ModalElement } from '../../common/types';
import { ModalBackdrop } from '../ModalBackdrop';
import { ModalTransition } from '../ModalTransition';

import { useModalContainerClasses } from './common/hooks';
import { __KEYS_MODAL_CONTAINER_CLASS__ } from './common/keys';
import type { ModalContainerProps, ModalContainerRef } from './common/types';

const ModalContainer = forwardRef(function ModalContainer<Element extends ModalElement = ModalDefaultElement>(
	props: ModalContainerProps<Element>,
	ref: ModalContainerRef<Element>
): ReactElement {
	// const modalID = useConst<string>(uuid());

	const { color, colorMode, isOpen, onClose } = useModalContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderBackdrop,
		closeOnEsc = __DEFAULT_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick = __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		hasBackdrop = __DEFAULT_MODAL_HAS_BACKDROP__,
		onEsc,
		onOverlayClick,
		...rest
	} = props;

	const classes = useModalContainerClasses();

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
			className={classNames(__KEYS_MODAL_CONTAINER_CLASS__, classes.container, { [className]: !!className })}
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
					<ModalTransition className={classes.backdrop} in={isOpen} variant='fade'>
						{renderBackdrop ? renderBackdrop({ color, colorMode }) : <ModalBackdrop />}
					</ModalTransition>
				</GridItem>
			) : null}

			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Center w='100%' h='100%' onClick={closeOnOverlayClick ? handleOverlayClick : undefined}>
					<ModalTransition className={classes.content} in={isOpen} variant='pop'>
						{children}
					</ModalTransition>
				</Center>
			</GridItem>
		</Grid>
	);
});

ModalContainer.displayName = 'ModalContainer';

export default ModalContainer;
