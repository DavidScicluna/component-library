import { type ElementType, forwardRef, type ReactElement } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Grid, GridItem, VStack } from '@components/Layout';

import { __KEYS_HEADLINE_CLASS__ } from './common/keys';
import type { HeadlineProps, HeadlineRef } from './common/types';

const Headline = forwardRef(function Headline<Element extends ElementType>(
	props: HeadlineProps<Element>,
	ref: HeadlineRef<Element>
): ReactElement {
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		renderLeft,
		renderRight,
		renderCaption,
		renderTitle,
		renderSubtitle,
		spacing = 0.5,
		...rest
	} = props;

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
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HEADLINE_CLASS__, { [className]: !!className })}
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={spacing}
		>
			{renderLeft ? (
				<GridItem>{renderLeft({ w: `${childrenWidth}px`, h: `${childrenHeight}px` })}</GridItem>
			) : null}

			<GridItem>
				<VStack
					ref={childrenRef}
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
				<GridItem>{renderRight({ w: `${childrenWidth}px`, h: `${childrenHeight}px` })}</GridItem>
			) : null}
		</Grid>
	);
});

Headline.displayName = 'Headline';

export default Headline;
