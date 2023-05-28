import { FC } from 'react';

import IconButton from '../../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import HoverOverlay from '../../../../../../../Overlay/HoverOverlay';
import Tooltip from '../../../../../../../Overlay/Tooltip';
import { useImageEditorContext } from '../../../../../../common/hooks';

import { ToolProps } from './common/types';

const Tool: FC<ToolProps> = (props) => {
	const { color, colorMode } = useImageEditorContext();

	const { title, icon, isDisabled = false, isSelected = false, onSelect } = props;

	return (
		<HoverOverlay>
			{({ isHovering }) => (
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
						variant='icon'
					>
						<IconButtonIcon icon={icon} category='outlined' />
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
};

export default Tool;
