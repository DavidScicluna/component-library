import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { GridProps, GridRef } from '@components/Layout';
import { Grid, GridItem, VStack } from '@components/Layout';

import { useFormControlContext } from '../FormControl/common/hooks';

import {
	DEFAULT_FORM_HEADER_ALIGN_CONTENT,
	DEFAULT_FORM_HEADER_ALIGN_ITEMS,
	DEFAULT_FORM_HEADER_JUSTIFY_CONTENT,
	DEFAULT_FORM_HEADER_JUSTIFY_ITEMS
} from './common/constants';
import { KEYS_FORM_HEADER_CLASS } from './common/keys';
import type { FormHeaderProps, FormHeaderRef } from './common/types';

const FormHeader = forwardRef(function FormHeader<Element extends PolymorphicElementType>(
	props: FormHeaderProps<Element>,
	ref: FormHeaderRef<Element>
): JSX.Element {
	const { color, colorMode, hasFormControl, spacing: DEFAULT_FORM_HEADER_SPACING } = useFormControlContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		className = DEFAULT_CLASSNAME,
		w,
		h,
		renderLeft,
		renderRight,
		renderLabel,
		renderDescription,
		renderActions,
		alignItems = DEFAULT_FORM_HEADER_ALIGN_CONTENT,
		alignContent = DEFAULT_FORM_HEADER_ALIGN_ITEMS,
		justifyItems = DEFAULT_FORM_HEADER_JUSTIFY_CONTENT,
		justifyContent = DEFAULT_FORM_HEADER_JUSTIFY_ITEMS,
		spacing = DEFAULT_FORM_HEADER_SPACING,
		...rest
	} = props;

	return (
		<Grid
			{...rest}
			ref={ref}
			className={classNames(KEYS_FORM_HEADER_CLASS, { [className]: !!className })}
			w={hasFormControl ? '100%' : w}
			h={hasFormControl ? '100%' : h}
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows={1}
			alignItems={alignItems as GridProps<Element>['alignItems']}
			alignContent={alignContent as GridProps<Element>['alignContent']}
			justifyItems={justifyItems as GridProps<Element>['justifyItems']}
			justifyContent={justifyContent as GridProps<Element>['justifyContent']}
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
