import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import { Icon } from '@components/DataDisplay';
import type { GridRef } from '@components/Layout';
import { Grid, GridItem, HStack, VStack } from '@components/Layout';

import { useCardContext } from '../../common/hooks';

import { KEYS_CARD_HEADER_CLASS } from './common/keys';
import type { CardHeaderProps, CardHeaderRef } from './common/types';

const CardHeader = forwardRef(function CardHeader<Element extends PolymorphicElementType>(
	props: CardHeaderProps<Element>,
	ref: CardHeaderRef<Element>
): JSX.Element {
	const {
		color,
		colorMode,
		isCollapsable,
		isHovering,
		isOpen,
		spacing: DEFAULT_CARD_HEADER_SPACING
	} = useCardContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		renderTitle,
		renderSubtitle,
		renderActions,
		spacing = DEFAULT_CARD_HEADER_SPACING,
		...rest
	} = props;

	const iconColorClassName = useGetColor({
		colorMode,
		colorType: 'default',
		hueType: isHovering ? 'text.primary' : 'text.secondary',
		classType: 'text'
	});

	return (
		<Grid
			{...rest}
			ref={ref}
			className={classNames(KEYS_CARD_HEADER_CLASS, { [className]: !!className })}
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
					ref={childrenRef as GridRef<PolymorphicDefaultElement>}
					w='100%'
					h='100%'
					templateColumns={compact(['1fr', renderActions || isCollapsable ? 'auto' : null]).join(' ')}
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

					{renderActions || isCollapsable ? (
						<GridItem>
							<HStack w='100%' h='100%' alignItems='center' justifyContent='center' spacing={spacing}>
								{/* Actions */}
								{renderActions ? renderActions() : null}

								{isCollapsable ? (
									<Icon
										className={classNames(iconColorClassName)}
										colorMode={colorMode}
										icon={isOpen ? 'remove' : 'add'}
										category='filled'
										size='2xl'
										variant='unstyled'
									/>
								) : null}
							</HStack>
						</GridItem>
					) : null}
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

// CardHeader.displayName = 'CardHeader';

export default CardHeader;
