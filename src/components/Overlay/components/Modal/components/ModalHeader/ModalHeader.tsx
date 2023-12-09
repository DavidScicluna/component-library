import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Grid, GridItem, VStack } from '@components/Layout';

import { useModalContext } from '../../common/hooks';

import { __KEYS_MODAL_HEADER_CLASS__ } from './common/keys';
import type { ModalHeaderProps, ModalHeaderRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ModalHeader: PolymorphicComponentWithRef = forwardRef(function ModalHeader<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ModalHeaderProps<Element>, ref: ModalHeaderRef<Element>): ReactElement {
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
			className={classNames(__KEYS_MODAL_HEADER_CLASS__, { [className]: !!className })}
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

ModalHeader.displayName = 'ModalHeader';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <ModalHeader<Element> {...props} />;
