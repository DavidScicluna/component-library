import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { GridProps, GridRef } from '@components/Layout';
import { Grid, GridItem, VStack } from '@components/Layout';

import { useFormControlContext } from '../FormControl/common/hooks';

import {
	__DEFAULT_FORM_HEADER_ALIGN_CONTENT__,
	__DEFAULT_FORM_HEADER_ALIGN_ITEMS__,
	__DEFAULT_FORM_HEADER_JUSTIFY_CONTENT__,
	__DEFAULT_FORM_HEADER_JUSTIFY_ITEMS__
} from './common/constants';
import { __KEYS_FORM_HEADER_CLASS__ } from './common/keys';
import type { FormHeaderProps, FormHeaderRef } from './common/types';

const FormHeader = forwardRef(function FormHeader<Element extends PolymorphicElementType>(
	props: FormHeaderProps<Element>,
	ref: FormHeaderRef<Element>
): JSX.Element {
	const { color, colorMode, hasFormControl, spacing: __DEFAULT_FORM_HEADER_SPACING__ } = useFormControlContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		className = __DEFAULT_CLASSNAME__,
		w,
		h,
		renderLeft,
		renderRight,
		renderLabel,
		renderDescription,
		renderActions,
		alignItems = __DEFAULT_FORM_HEADER_ALIGN_CONTENT__,
		alignContent = __DEFAULT_FORM_HEADER_ALIGN_ITEMS__,
		justifyItems = __DEFAULT_FORM_HEADER_JUSTIFY_CONTENT__,
		justifyContent = __DEFAULT_FORM_HEADER_JUSTIFY_ITEMS__,
		spacing = __DEFAULT_FORM_HEADER_SPACING__,
		...rest
	} = props;

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_FORM_HEADER_CLASS__, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows={1}
			alignItems={alignItems}
			alignContent={alignContent}
			justifyItems={justifyItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{renderLeft ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}

			<GridItem>
				<Grid
					ref={childrenRef as GridRef<PolymorphicDefaultElement>}
					w='100%'
					h='100%'
					templateColumns={compact(['1fr', renderActions ? 'auto' : null]).join(' ')}
					templateRows={1}
					alignItems='stretch'
					alignContent='stretch'
					justifyItems='stretch'
					justifyContent='space-between'
					spacing={spacing}
				>
					<GridItem>
						<VStack w='100%' h='100%' alignItems='flex-start' justifyContent='center' spacing={0}>
							{/* Label */}
							{renderLabel()}

							{/* Description */}
							{renderDescription ? renderDescription() : null}
						</VStack>
					</GridItem>

					{renderActions ? <GridItem>{renderActions ? renderActions() : null}</GridItem> : null}
				</Grid>
			</GridItem>

			{renderRight ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}
		</Grid>
	);
});

// FormHeader.displayName = 'FormHeader';

export default FormHeader;
