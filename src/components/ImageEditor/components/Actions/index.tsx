import { FC, useCallback } from 'react';

import { Center, HStack, useMediaQuery, VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import Divider from '../../../Divider';
import { useImageEditorContext } from '../../common/hooks';

import { ActionsProps } from './common/types';
import Cancel from './components/Cancel';
import Save from './components/Save';
import Toolbar from './components/Toolbar';

const Actions: FC<ActionsProps> = ({ onSelectTool, onZoom, onCancel, onSave }) => {
	const theme = useTheme();

	const [isMd] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

	const { colorMode } = useImageEditorContext();

	const [cancelRef, { width: cancelWidth }] = useElementSize();
	const [saveRef, { width: saveWidth }] = useElementSize();

	// TODO: Replace all handleWidth useCallback with usememo instead
	const handleScrollWidth = useCallback(() => {
		const spacing = convertREMToPixels(convertStringToNumber(theme.space[2], 'rem') * 4);

		return `calc(100% - ${cancelWidth + spacing + saveWidth}px)`;
	}, [theme, cancelWidth, saveWidth]);

	return isMd ? (
		<HStack
			width='100%'
			alignItems='stretch'
			justifyContent='space-between'
			divider={<Divider colorMode={colorMode} orientation='vertical' />}
			spacing={4}
		>
			<Center ref={cancelRef}>
				<Cancel onCancel={onCancel} />
			</Center>
			<Center width={handleScrollWidth()}>
				<Toolbar onSelectTool={onSelectTool} onZoom={onZoom} />
			</Center>
			<Center ref={saveRef}>
				<Save onSave={onSave} />
			</Center>
		</HStack>
	) : (
		<VStack
			width='100%'
			alignItems='center'
			justifyContent='space-between'
			divider={<Divider colorMode={colorMode} />}
			spacing={4}
		>
			<Center width='100%'>
				<Toolbar onSelectTool={onSelectTool} onZoom={onZoom} />
			</Center>
			<HStack width='100%' spacing={2}>
				<Cancel onCancel={onCancel} />
				<Save onSave={onSave} />
			</HStack>
		</VStack>
	);
};

export default Actions;
