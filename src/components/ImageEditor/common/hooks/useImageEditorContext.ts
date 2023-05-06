import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { NoUndefinedField } from '../../../../common/types';
import { ImageEditorContext } from '../..';
import { mode as defaultMode, zoom as defaultZoom } from '../default/props';
import { ImageEditorContext as ImageEditorContextType } from '../types';

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
