import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import type { GridRef } from '@components/Layout';
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const FormHeader: PolymorphicComponentWithRef = forwardRef(function FormHeader<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: FormHeaderProps<Element>, ref: FormHeaderRef<Element>): ReactElement {
	const { color, colorMode, hasFormControl, spacing: __DEFAULT_FORM_HEADER_SPACING__ } = useFormControlContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

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
		<Grid<Element>
			{...rest}
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
					ref={childrenRef as GridRef}
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

FormHeader.displayName = 'FormHeader';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <FormHeader<Element> {...props} />;
