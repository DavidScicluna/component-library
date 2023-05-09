import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import HorizontalScroll from '../../../../../DataDisplay/HorizontalScroll';
import { maxZoom, minZoom } from '../../../..';
import { useImageEditorContext } from '../../../../common/hooks';

import { ToolbarProps } from './common/types';
import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Tool from './components/Tool';

const Toolbar: FC<ToolbarProps> = ({ onSelectTool, onZoom }) => {
	const { colorMode, mode, zoom } = useImageEditorContext();

	return (
		<HorizontalScroll
			width='100%'
			height='100%'
			colorMode={colorMode}
			LeftArrow={HorizontalScrollLeftArrow}
			RightArrow={HorizontalScrollRightArrow}
			renderDivider={({ padding }) => <Box padding={padding} />}
		>
			<Tool
				title='Crop'
				icon='crop'
				isSelected={mode === 'crop'}
				onSelect={() => onSelectTool({ mode: 'crop' })}
			/>

			<Tool
				title='Rotate Right'
				icon='rotate_right'
				isSelected={mode === 'rotate'}
				onSelect={() => onSelectTool({ mode: 'rotate' })}
			/>

			<Tool
				title='Zoom In'
				icon='zoom_in'
				isDisabled={zoom >= maxZoom}
				onSelect={() => onZoom({ value: zoom + 0.25 })}
			/>

			<Tool
				title='Zoom Out'
				icon='zoom_out'
				isDisabled={zoom <= minZoom}
				onSelect={() => onZoom({ value: zoom - 0.25 })}
			/>
		</HorizontalScroll>
	);
};

export default Toolbar;
