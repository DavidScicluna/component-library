import type { CursorObj, PointerEventsObj, UserSelectObj } from '@common/types/classes';

const cursor: CursorObj = {
	'auto': 'cursor-auto',
	'default': 'cursor-default',
	'pointer': 'cursor-pointer',
	'wait': 'cursor-wait',
	'text': 'cursor-text',
	'move': 'cursor-move',
	'help': 'cursor-help',
	'not-allowed': 'cursor-not-allowed',
	'none': 'cursor-none',
	'context-menu': 'cursor-context-menu',
	'progress': 'cursor-progress',
	'cell': 'cursor-cell',
	'crosshair': 'cursor-crosshair',
	'vertical-text': 'cursor-vertical-text',
	'alias': 'cursor-alias',
	'copy': 'cursor-copy',
	'no-drop': 'cursor-no-drop',
	'grab': 'cursor-grab',
	'grabbing': 'cursor-grabbing',
	'all-scroll': 'cursor-all-scroll',
	'col-resize': 'cursor-col-resize',
	'row-resize': 'cursor-row-resize',
	'n-resize': 'cursor-n-resize',
	'e-resize': 'cursor-e-resize',
	's-resize': 'cursor-s-resize',
	'w-resize': 'cursor-w-resize',
	'ne-resize': 'cursor-ne-resize',
	'nw-resize': 'cursor-nw-resize',
	'se-resize': 'cursor-se-resize',
	'sw-resize': 'cursor-sw-resize',
	'ew-resize': 'cursor-ew-resize',
	'ns-resize': 'cursor-ns-resize',
	'nesw-resize': 'cursor-nesw-resize',
	'nwse-resize': 'cursor-nwse-resize',
	'zoom-in': 'cursor-zoom-in',
	'zoom-out': 'cursor-zoom-out'
};

const pointer_events: PointerEventsObj = {
	none: 'pointer-events-none',
	auto: 'pointer-events-auto'
};

const user_select: UserSelectObj = {
	none: 'select-none',
	text: 'select-text',
	all: 'select-all',
	auto: 'select-auto'
};

export default { cursor, pointer_events, user_select };
