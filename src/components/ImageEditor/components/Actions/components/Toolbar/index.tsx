import { FC, useContext, useState } from 'react';

import { Center } from '@chakra-ui/react';

import { useDebounce } from 'usehooks-ts';

import {
	colorMode as defaultColorMode,
	mode as defaultMode,
	zoom as defaultZoom
} from '../../../../common/data/defaultPropValues';
import { ImageEditorContext as ImageEditorContextType } from '../../../../types';
import { ImageEditorContext, maxZoom, minZoom } from '../../../..';
import HorizontalScroll from '../../../../../HorizontalScroll';

import { HorizontalScrollLeftArrow, HorizontalScrollRightArrow } from './components/HorizontalScrollArrows';
import Tool from './components/Tool';
import { ScrollContext, ToolbarProps } from './types';

const Toolbar: FC<ToolbarProps> = ({ onSelectTool, onZoom }) => {
	const {
		colorMode = defaultColorMode,
		mode = defaultMode,
		zoom = defaultZoom
	} = useContext<ImageEditorContextType>(ImageEditorContext);

	const [scroll, setScroll] = useState<ScrollContext>({} as ScrollContext);
	const scrollDebounced = useDebounce(scroll, 250);

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
