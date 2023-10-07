import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Grid, GridItem, VStack } from '@components/Layout';

import { useFormControlContext } from '../FormControl/common/hooks';

import { __KEYS_FORM_HEADER_CLASS__ } from './common/keys';
import type { FormHeaderProps, FormHeaderRef } from './common/types';

const FormHeader = forwardRef(function FormHeader<Element extends ElementType>(
	props: FormHeaderProps<Element>,
	ref: FormHeaderRef<Element>
): ReactElement {
	const { color, colorMode, spacing: __DEFAULT_FORM_HEADER_SPACING__ } = useFormControlContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderLabel,
		renderDescription,
		renderActions,
		spacing = __DEFAULT_FORM_HEADER_SPACING__,
		...rest
	} = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_FORM_HEADER_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={spacing}
		>
			{renderLeft ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}

			<GridItem>
				<Grid
					ref={childrenRef}
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

export default FormHeader;
