import { FC, useContext } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/data/defaultPropValues';
import { ImageEditorContext } from '../../../../../..';
import { ImageEditorContext as ImageEditorContextType } from '../../../../../../types';
import Tooltip from '../../../../../../../Overlay/Tooltip';
import IconButton from '../../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';

import { ToolProps } from './types';

const Tool: FC<ToolProps> = (props) => {
	const { color = defaultColor, colorMode = defaultColorMode } =
		useContext<ImageEditorContextType>(ImageEditorContext);

	const { title, icon, isDisabled = false, isSelected = false, onSelect } = props;

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			aria-label={`${title} tool (tooltip)`}
			colorMode={colorMode}
			placement='top'
			label={title}
			isOpen={isHovering}
			isDisabled={isDisabled}
		>
			<IconButton
				aria-label={`${title} tool`}
				color={isSelected ? color : 'gray'}
				colorMode={colorMode}
				isDisabled={isDisabled}
				onClick={() => onSelect()}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
				variant='icon'
			>
				<IconButtonIcon icon={icon} category='outlined' />
			</IconButton>
		</Tooltip>
	);
};

export default Tool;
