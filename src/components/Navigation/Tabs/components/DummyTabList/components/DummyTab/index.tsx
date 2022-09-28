import { FC, useContext, useCallback } from 'react';

import { Tab as CUITab, HStack, Center } from '@chakra-ui/react';

import merge from 'lodash/merge';
import { useElementSize } from 'usehooks-ts';

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

	const { label, renderLeft, renderRight, sx, ...rest } = props;

	const style = useStyles({ theme, colorMode, isFullWidth: isFitted, size });

	const handleReturnSpacing = useCallback((): number => getSizeConfig({ size }).spacing, [size, getSizeConfig]);

	return (
		<CUITab {...rest} aria-disabled isDisabled sx={merge(style.tab, sx)}>
			<HStack
				className='ds-cl-tabs-dummy-tab-stack'
				width='100%'
				alignItems='inherit'
				justifyContent='inherit'
				spacing={handleReturnSpacing()}
			>
				{renderLeft && renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}

				<Center ref={childrenRef} as='span'>
					{/* TODO: Maybe pass down color to tab with active tab and set border to color also */}
					<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
						{label}
					</Skeleton>
				</Center>

				{renderRight && renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
			</HStack>
		</CUITab>
	);
};

export default DummyTab;
