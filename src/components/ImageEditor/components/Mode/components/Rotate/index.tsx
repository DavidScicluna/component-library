/* eslint-disable import/namespace */
import { FC, useContext } from 'react';

import { useBoolean, HStack, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	rotation as defaultRotation
} from '../../../../common/data/defaultPropValues';
import ModeButton from '../ModeButton';
import { ImageEditorContext as ImageEditorContextType } from '../../../../types';
import { ImageEditorContext } from '../../../..';
import { useTheme } from '../../../../../../common/hooks';
import Divider from '../../../../../Divider';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../common/utils';
import { getColor } from '../../../../../../common/utils/color';
import Tooltip from '../../../../../Overlay/Tooltip';

import { RotateProps } from './types';

const Rotate: FC<RotateProps> = ({ rotation = defaultRotation, onRotate }) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } =
		useContext<ImageEditorContextType>(ImageEditorContext);

	const [stackRef, { height: stackHeight }] = useElementSize();
	const [buttonsRef, { width: buttonsWidth }] = useElementSize();

	const [isHoveringThumb, setIsHoveringThumb] = useBoolean();

	const handleRotate = (direction: 'left' | 'right'): void => {
		if ((rotation >= 0 && rotation < 90) || (rotation > 270 && rotation <= 360)) {
			onRotate({ deg: direction === 'left' ? 270 : 90 });
		} else if (rotation >= 90 && rotation < 180) {
			onRotate({ deg: direction === 'left' ? 0 : 180 });
		} else if (rotation >= 180 && rotation < 270) {
			onRotate({ deg: direction === 'left' ? 90 : 270 });
		} else {
			onRotate({ deg: direction === 'left' ? 180 : 360 });
		}
	};

	return (
		<HStack
			ref={stackRef}
			width='100%'
			alignItems='center'
			justifyContent='center'
			divider={<Divider colorMode={colorMode} orientation='vertical' height={`${stackHeight}px`} />}
			spacing={4}
		>
			<Center
				width={`calc(100% - ${
					buttonsWidth + convertREMToPixels(convertStringToNumber(theme.space[4], 'rem'))
				}px)`}
			>
				<Slider
					defaultValue={rotation}
					min={0}
					max={360}
					step={10}
					onChange={(value) => onRotate({ deg: value })}
					value={rotation}
				>
					<SliderTrack height={theme.space[1]} background={getColor({ theme, colorMode, type: 'divider' })}>
						<SliderFilledTrack background={getColor({ theme, colorMode, color, type: 'divider' })} />
					</SliderTrack>
					<Tooltip
						aria-label='Slider thumb rotation degrees (tooltip)'
						placement='top'
						isOpen={isHoveringThumb}
						label={`${rotation}°`}
					>
						<SliderThumb
							width={theme.fontSizes.xl}
							height={theme.fontSizes.xl}
							backgroundColor={getColor({ theme, colorMode, color, type: 'color' })}
							boxShadow='none'
							onMouseEnter={() => setIsHoveringThumb.on()}
							onMouseLeave={() => setIsHoveringThumb.off()}
						/>
					</Tooltip>
				</Slider>
			</Center>

			<HStack ref={buttonsRef} alignItems='center' justifyContent='center' spacing={4}>
				<ModeButton
					id='rotate_left'
					value='rotate_left'
					title='Rotate Left'
					icon='rotate_left'
					onSelect={() => handleRotate('left')}
				/>
				<ModeButton
					id='rotate_right'
					value='rotate_right'
					title='Rotate Right'
					icon='rotate_right'
					onSelect={() => handleRotate('right')}
				/>
			</HStack>
		</HStack>
	);
};

export default Rotate;
