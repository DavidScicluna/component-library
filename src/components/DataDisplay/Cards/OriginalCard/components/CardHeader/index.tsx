import { FC } from 'react';

import { Grid, GridItem, VStack } from '@chakra-ui/react';

import { compact } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useCardContext } from '../../common/hooks';

import { CardHeaderProps } from './common/types';

const CardHeader: FC<CardHeaderProps> = (props) => {
	const { color, colorMode, spacing: defaultSpacing } = useCardContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const { renderLeft, renderRight, renderTitle, renderSubtitle, actions, spacing = defaultSpacing } = props;

	return (
		<Grid
			width='100%'
			templateColumns={compact([renderLeft ? 'auto' : null, '1fr', renderRight ? 'auto' : null]).join(' ')}
			templateRows='1fr'
			alignItems='center'
			alignContent='space-between'
			justifyItems='space-between'
			justifyContent='space-between'
			gap={spacing}
		>
			{renderLeft ? (
				<GridItem>{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}</GridItem>
			) : null}

			<GridItem>
				<Grid
					ref={childrenRef}
					width='100%'
					templateColumns={compact([renderTitle ? 'auto' : null, actions ? 'auto' : null]).join(' ')}
					templateRows='1fr'
					alignItems='center'
					alignContent='space-between'
					justifyItems='space-between'
					justifyContent='space-between'
					gap={spacing}
				>
					{renderTitle ? (
						<GridItem>
							<VStack width='100%' alignItems='flex-start' justifyContent='center' spacing={0.5}>
								{/* Title */}
								{renderTitle({ color: 'gray', colorMode })}

								{/* Subtitle */}
								{renderSubtitle ? renderSubtitle({ color: 'gray', colorMode }) : null}
							</VStack>
						</GridItem>
					) : null}

					{actions ? <GridItem>{actions}</GridItem> : null}
				</Grid>
			</GridItem>

			{renderRight ? (
				<GridItem>{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}</GridItem>
			) : null}
		</Grid>
	);
};

export default CardHeader;
