import { FC, useState } from 'react';

import { Center } from '@chakra-ui/react';

import { maxZoom, minZoom } from '../../../..';
import HorizontalScroll from '../../../../../HorizontalScroll';
import { useDebounce } from '../../../../../../common/hooks';
import { useImageEditorContext } from '../../../../common/hooks';

import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Tool from './components/Tool';
import { ScrollContext, ToolbarProps } from './types';

const Toolbar: FC<ToolbarProps> = ({ onSelectTool, onZoom }) => {
	const { colorMode, mode, zoom } = useImageEditorContext();

	const [scroll, setScroll] = useState<ScrollContext>({} as ScrollContext);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

	return (
		<HorizontalScroll
			colorMode={colorMode}
			LeftArrow={<HorizontalScrollLeftArrow scroll={scrollDebounced} />}
			RightArrow={<HorizontalScrollRightArrow scroll={scrollDebounced} />}
			renderDivider={({ padding }) => <Center padding={padding} />}
			onInit={(scroll) => setScroll(scroll)}
			onUpdate={(scroll) => setScroll(scroll)}
			sx={{ '& .wrapperContainer': { alignItems: 'center', justifyContent: 'center' } }}
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
