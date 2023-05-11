import { FC } from 'react';

import { Center, HStack, Tab as CUIDummyTab, VStack } from '@chakra-ui/react';

import { omit } from 'lodash-es';
import merge from 'lodash-es/merge';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../common/utils/color';
import Divider from '../../../../../../../Divider';
import Skeleton from '../../../../../../../Feedback/Skeleton';
import ScaleFade from '../../../../../../../Transitions/ScaleFade';
import { getSizeConfig } from '../../../../../common/utils';
import { useDummyTabsContext } from '../../../../common/hooks';

import { isActive as defaultIsActive, isSelected as defaultIsSelected } from './common/default/props';
import useStyles from './common/styles';
import { DummyTabProps } from './common/types';

const DummyTab: FC<DummyTabProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isFitted, size } = useDummyTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		label,
		renderLeft,
		renderRight,
		isActive = defaultIsActive,
		isSelected = defaultIsSelected,
		sx,
		...rest
	} = props;

	const mainColor = getColor({
		theme,
		colorMode,
		color: isActive || isSelected ? color : 'gray',
		type: isActive || isSelected ? 'color' : 'text.secondary'
	});
	const style = useStyles({
		theme,
		color,
		colorMode,
		isFullWidth: isFitted,
		isSelected: isActive || isSelected,
		size
	});

	const handleReturnSpacing = (): number => getSizeConfig({ size }).spacing;

	return (
		<CUIDummyTab {...omit({ ...rest }, 'panelId')} isDisabled isSelected={isSelected} sx={merge(style.tab, sx)}>
			<VStack
				className='ds-cl-dummytabs-dummytab-stack'
				width='100%'
				alignItems='stretch'
				justifyContent='space-between'
				spacing={0}
			>
				<Divider backgroundColor={theme.colors.transparent} />

				<HStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={handleReturnSpacing()}>
					{renderLeft ? renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight }) : null}

					<Center ref={childrenRef} as='span' flex={1}>
						<Skeleton
							color={isSelected ? color : 'gray'}
							colorMode={colorMode}
							startColor={mainColor}
							endColor={mainColor}
							isLoaded={false}
							variant='text'
						>
							{label}
						</Skeleton>
					</Center>

					{renderRight
						? renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })
						: null}
				</HStack>

				<ScaleFade in={isActive || isSelected} unmountOnExit={false} initialScale={0.75}>
					<Divider backgroundColor={mainColor} />
				</ScaleFade>
			</VStack>
		</CUIDummyTab>
	);
};

export default DummyTab;
