import { useContext } from 'react';

import { ImageEditorContext } from '../..';
import { NoUndefinedField } from '../../../../common/types';
import { ImageEditorContext as ImageEditorContextType } from '../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	mode as defaultMode,
	zoom as defaultZoom
} from '../data/defaultPropValues';

const useImageEditorContext = (): NoUndefinedField<ImageEditorContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		mode = defaultMode,
		zoom = defaultZoom
	} = useContext<ImageEditorContextType>(ImageEditorContext);

	return { color, colorMode, mode, zoom };
};

export default useImageEditorContext;
