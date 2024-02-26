import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { GridProps, VStackRef } from '@components/Layout';
import { Grid, GridItem, VStack } from '@components/Layout';

import { DEFAULT_HEADLINE_SPACING } from './common/constants';
import { useHeadlineResponsiveValues } from './common/hooks';
import { KEYS_HEADLINE_CLASS } from './common/keys';
import type { HeadlineProps, HeadlineRef } from './common/types';

const Headline = forwardRef(function Headline<Element extends PolymorphicElementType>(
	props: HeadlineProps<Element>,
	ref: HeadlineRef<Element>
): JSX.Element {
	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		renderLeft,
		renderRight,
		renderCaption,
		renderTitle,
		renderSubtitle,
		spacing: spacingProp = DEFAULT_HEADLINE_SPACING,
		...rest
	} = props;

	const { spacing } = useHeadlineResponsiveValues<Element>({ spacing: spacingProp });

	const captionColor = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'text',
		hueType: 'color'
	});
	const titleColor = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'text',
		hueType: 'text.primary'
	});
	const subtitleColor = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'text',
		hueType: 'text.secondary'
	});

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(KEYS_HEADLINE_CLASS, { [className]: !!className })}
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
					{renderLeft({ w: `${childrenWidth}px`, h: `${childrenHeight}px` })}
				</GridItem>
			) : null}

			<GridItem>
				<VStack
					ref={childrenRef as VStackRef<PolymorphicDefaultElement>}
					w='100%'
					h='100%'
					alignItems='stretch'
					justifyContent='stretch'
					spacing={spacing}
				>
					{renderCaption
						? renderCaption({
								align: 'left',
								color: captionColor,
								fontSize: ['xs', 'xs', 'sm', 'sm', 'sm', 'sm'],
								lineHeight: 'normal',
								textTransform: 'uppercase'
							})
						: null}

					{renderTitle({
						align: 'left',
						color: titleColor,
						fontSize: ['4xl', '4xl', '5xl', '5xl', '6xl', '6xl'],
						fontWeight: 'bold',
						lineHeight: 'normal'
					})}

					{renderSubtitle
						? renderSubtitle({
								align: 'left',
								color: subtitleColor,
								fontSize: ['xs', 'xs', 'sm', 'sm', 'sm', 'sm'],
								lineHeight: 'normal'
							})
						: null}
				</VStack>
			</GridItem>

			{renderRight ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderRight({ w: `${childrenWidth}px`, h: `${childrenHeight}px` })}
				</GridItem>
			) : null}
		</Grid>
	);
});

// Headline.displayName = 'Headline';

export default Headline;
