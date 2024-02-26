import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { GridProps } from '@components/Layout';
import { Grid, GridItem, VStack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import { KEYS_MODAL_HEADER_CLASS } from './common/keys';
import type { ModalHeaderProps, ModalHeaderRef } from './common/types';

const ModalHeader = forwardRef(function ModalHeader<Element extends PolymorphicElementType>(
	props: ModalHeaderProps<Element>,
	ref: ModalHeaderRef<Element>
): JSX.Element {
	const { colorMode, onClose, spacing: DEFAULT_MODAL_HEADER_SPACING } = useModalContext();

	const {
		className = DEFAULT_CLASSNAME,
		renderTitle,
		renderSubtitle,
		renderCancel,
		spacing = DEFAULT_MODAL_HEADER_SPACING,
		...rest
	} = props;

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MODAL_HEADER_CLASS, { [className]: !!className })}
			w='100%'
			h='100%'
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

			{renderCancel ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderCancel({
						colorMode,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'icon'
					})}
				</GridItem>
			) : null}
		</Grid>
	);
});

// ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
