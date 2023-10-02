import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Icon } from '@components/DataDisplay/components/Icon';
import { Grid, GridItem, HStack, VStack } from '@components/Layout';

import { useCardContext } from '../../common/hooks';

import { __KEYS_CARD_HEADER_CLASS__ } from './common/keys';
import type { CardHeaderProps, CardHeaderRef } from './common/types';

const CardHeader = forwardRef(function CardHeader<Element extends ElementType>(
	props: CardHeaderProps<Element>,
	ref: CardHeaderRef<Element>
): ReactElement {
	const {
		color,
		colorMode,
		isCollapsable,
		isHovering,
		isOpen,
		spacing: __DEFAULT_CARD_HEADER_SPACING__
	} = useCardContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderTitle,
		renderSubtitle,
		renderActions,
		spacing = __DEFAULT_CARD_HEADER_SPACING__,
		...rest
	} = props;

	const iconColorClassName = useGetColor({
		colorMode,
		colorType: 'default',
		hueType: isHovering ? 'text.primary' : 'text.secondary',
		classType: 'text'
	});

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CARD_HEADER_CLASS__, { [className]: !!className })}
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

CardHeader.displayName = 'CardHeader';

export default CardHeader;
