import { ImageEditorMode } from '../../../../common/types';

export type OnSelectToolProps = { mode: ImageEditorMode };

export type OnZoomProps = { value: number };

export type ActionsProps = {
	onSelectTool: (props: OnSelectToolProps) => void;
	onZoom: (props: OnZoomProps) => void;
	onCancel: () => void;
	onSave: () => void;
};
