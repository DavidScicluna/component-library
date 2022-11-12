import { FC, createContext, useState, useCallback } from 'react';

import { useColorMode, Center, Text } from '@chakra-ui/react';

import Cropper, { Area } from 'react-easy-crop';
import { debounce } from 'lodash';

import { Nullable } from '../../common/types';
import Modal from '../Overlay/Modal';
import ModalStack from '../Overlay/Modal/components/ModalStack';
import ModalHeader from '../Overlay/Modal/components/ModalHeader';
import IconButton from '../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';

import Mode from './components/Mode';
import Actions from './components/Actions';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	mode as defaultMode,
	cropID as defaultCropID,
	cropValue as defaultCropValue,
	rotation as defaultRotation,
	zoom as defaultZoom
} from './common/data/defaultPropValues';
import {
	ImageEditorContext as ImageEditorContextType,
	ImageEditorProps,
	ImageEditorMode,
	ImageEditorModeCropID,
	ImageEditorModeCropValue
} from './types';
import { OnSelectToolProps as HandleSelectToolProps, OnZoomProps as HandleZoomProps } from './components/Actions/types';
import { OnCropProps as HandleCropProps, OnRotateProps as HandleRotateProps } from './components/Mode/types';
import { getBase64Image } from './common/utils';

export const minZoom = 1;
export const maxZoom = 5;

export const ImageEditorContext = createContext<ImageEditorContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	mode: defaultMode,
	zoom: defaultZoom
});

/*
 * TODO: Convert to react-advanced-cropper once version is deployed
 * https://github.com/advanced-cropper/react-advanced-cropper
 */

const ImageEditor: FC<ImageEditorProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const { color = defaultColor, colorMode = colorModeHook, title, image, isOpen, onClose, onCrop } = props;

	const [mode, setMode] = useState<ImageEditorMode>(defaultMode);

	const [cropID, setCropID] = useState<ImageEditorModeCropID>(defaultCropID);
	const [cropValue, setCropValue] = useState<ImageEditorModeCropValue>(defaultCropValue);

	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState<number>(defaultZoom);
	const [rotation, setRotation] = useState<number>(defaultRotation);

	const [area, setArea] = useState<Nullable<Area>>(null);

	const handleSelectMode = ({ mode }: HandleSelectToolProps) => {
		setMode(mode);
	};

	const handleCrop = ({ id, value }: HandleCropProps) => {
		setCropID(id);
		setCropValue(value);
	};

	const handleRotation = ({ deg }: HandleRotateProps) => {
		setRotation(deg);
	};

	const handleZoom = ({ value }: HandleZoomProps) => {
		setZoom(value);
	};

	const handleCropComplete = useCallback(
		debounce((_croppedArea, croppedAreaPixels) => {
			setArea(croppedAreaPixels);
		}, 500),
		[]
	);

	const handleCropImage = async () => {
		if (area) {
			const croppedImage = await getBase64Image({
				src: image,
				area,
				rotation,
				flip: { vertical: false, horizontal: false }
			});

			if (croppedImage) {
				onCrop(croppedImage);
				onClose();
			}
		}
	};

	const handleClose = (): void => {
		onClose();
	};

	return (
		<ImageEditorContext.Provider value={{ color, colorMode, mode, zoom }}>
			<Modal colorMode={colorMode} isOpen={isOpen} onClose={handleClose} size='4xl'>
				<ModalStack>
					<ModalHeader
						renderTitle={(props) => <Text {...props}>{title}</Text>}
						renderCancel={({ icon, category, ...rest }) => (
							<IconButton {...rest}>
								<IconButtonIcon icon={icon} category={category} />
							</IconButton>
						)}
					/>
					<Center
						width='100%'
						height='50vh'
						position='relative'
						borderRadius='lg'
						overflowX='hidden'
						overflowY='hidden'
					>
						<Cropper
							image={image}
							crop={crop}
							zoom={zoom}
							rotation={rotation}
							aspect={cropValue
								.split(':')
								.map((item) => Number(item))
								.reduce((a, b) => a / b)}
							showGrid
							onCropChange={setCrop}
							onRotationChange={setRotation}
							onCropComplete={handleCropComplete}
							onZoomChange={setZoom}
						/>
					</Center>
					<Mode
						cropID={cropID}
						cropValue={cropValue}
						rotation={rotation}
						onCrop={handleCrop}
						onRotate={handleRotation}
					/>
					<Actions
						onSelectTool={handleSelectMode}
						onZoom={handleZoom}
						onCancel={handleClose}
						onSave={handleCropImage}
					/>
				</ModalStack>
			</Modal>
		</ImageEditorContext.Provider>
	);
};

export default ImageEditor;
