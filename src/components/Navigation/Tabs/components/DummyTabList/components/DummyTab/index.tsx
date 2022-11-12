import { FC, useContext } from 'react';

import { Tab as CUITab, HStack, Center } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';
import { omit } from 'lodash';

import { TabsContext } from '../../../..';
import { TabsContext as TabsContextType } from '../../../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../../../../common/data/defaultPropValues';
import { useTheme } from '../../../../../../../common/hooks';
import { getSizeConfig } from '../../../../common/utils';
import Skeleton from '../../../../../../Skeleton';

import { isSelected as defaultIsSelected } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { DummyTabProps } from './types';

const DummyTab: FC<DummyTabProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isFitted = defaultIsFitted,
		size = defaultSize
	} = useContext<TabsContextType>(TabsContext);

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const { label, renderLeft, renderRight, isSelected = defaultIsSelected, sx, ...rest } = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth: isFitted, isSelected, size });

	const handleReturnSpacing = (): number => getSizeConfig({ size }).spacing;

	return (
		<CUITab
			{...omit({ ...rest }, 'panelId')}
			aria-disabled
			isSelected={isSelected}
			isDisabled
			sx={merge(style.tab, sx)}
		>
			<HStack width='100%' alignItems='inherit' justifyContent='inherit' spacing={handleReturnSpacing()}>
				{renderLeft && renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}

				<Center ref={childrenRef} as='span'>
					<Skeleton color={isSelected ? color : 'gray'} colorMode={colorMode} isLoaded={false} variant='text'>
						{label}
					</Skeleton>
				</Center>

				{renderRight && renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
			</HStack>
		</CUITab>
	);
};

export default DummyTab;
