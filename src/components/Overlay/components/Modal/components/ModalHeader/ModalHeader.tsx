import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Grid, GridItem, VStack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import type { ModalHeaderProps, ModalHeaderRef } from './common/types';

const ModalHeader = forwardRef(function ModalHeader<Element extends ElementType>(
	props: ModalHeaderProps<Element>,
	ref: ModalHeaderRef<Element>
): ReactElement {
	const { colorMode, onClose, spacing: __DEFAULT_MODAL_HEADER_SPACING__ } = useModalContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderTitle,
		renderSubtitle,
		renderCancel,
		spacing = __DEFAULT_MODAL_HEADER_SPACING__,
		...rest
	} = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-modal-header`, { [className]: !!className })}
			templateColumns='1fr auto'
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='space-between'
			spacing={spacing}
		>
			<GridItem>
				<VStack w='100%' h='100%' alignItems='flex-start' justifyContent='center' spacing={0}>
					{/* Title */}
					{renderTitle()}

					{/* Subtitle */}
					{renderSubtitle ? renderSubtitle() : null}
				</VStack>
			</GridItem>

			{/* <GridItem>
				{renderCancel
					? renderCancel({
							'aria-label': 'Close Modal',
							'color': 'gray',
							colorMode,
							'icon': 'close',
							'category': 'outlined',
							'onClick': typeof onClose === 'function' ? () => onClose() : undefined,
							'variant': 'icon'
					  })
					: null}
			</GridItem> */}
		</Grid>
	);
});

export default ModalHeader;
