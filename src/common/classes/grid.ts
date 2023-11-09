import type {
	AlignContentClassObj,
	AlignItemsClassObj,
	AlignSelfClassObj,
	GridAutoClassObj,
	GridAutoFlowClassObj,
	GridColumnSpanClassObj,
	GridColumnStartEndClassObj,
	GridRowSpanClassObj,
	GridRowStartEndClassObj,
	GridTemplateColumnsClassObj,
	GridTemplateRowsClassObj,
	JustifyContentClassObj,
	JustifyItemsClassObj,
	JustifySelfClassObj
} from '@common/types';

const align_content: AlignContentClassObj = {
	normal: 'content-normal',
	center: 'content-center',
	start: 'content-start',
	end: 'content-end',
	between: 'content-between',
	around: 'content-around',
	evenly: 'content-evenly',
	baseline: 'content-baseline',
	stretch: 'content-stretch'
};

const align_items: AlignItemsClassObj = {
	'flex-start': 'items-start',
	'flex-end': 'items-end',
	'center': 'items-center',
	'baseline': 'items-baseline',
	'stretch': 'items-stretch'
};

const align_self: AlignSelfClassObj = {
	center: 'self-center',
	start: 'self-start',
	end: 'self-end',
	baseline: 'self-baseline',
	stretch: 'self-stretch',
	auto: 'self-auto'
};

const auto_columns: GridAutoClassObj = {
	auto: 'auto-cols-auto',
	min: 'auto-cols-min',
	max: 'auto-cols-max',
	fr: 'auto-cols-fr'
};

const auto_flow: GridAutoFlowClassObj = {
	'col': 'grid-flow-col',
	'row': 'grid-flow-row',
	'dense': 'grid-flow-dense',
	'row-dense': 'grid-flow-row-dense',
	'col-dense': 'grid-flow-col-dense'
};

const auto_rows: GridAutoClassObj = {
	auto: 'auto-rows-auto',
	min: 'auto-rows-min',
	max: 'auto-rows-max',
	fr: 'auto-rows-fr'
};

const column_span: GridColumnSpanClassObj = {
	1: 'col-span-1',
	2: 'col-span-2',
	3: 'col-span-3',
	4: 'col-span-4',
	5: 'col-span-5',
	6: 'col-span-6',
	7: 'col-span-7',
	8: 'col-span-8',
	9: 'col-span-9',
	10: 'col-span-10',
	11: 'col-span-11',
	12: 'col-span-12',
	auto: 'col-auto',
	full: 'col-span-full'
};

const column_start: GridColumnStartEndClassObj = {
	1: 'col-start-1',
	2: 'col-start-2',
	3: 'col-start-3',
	4: 'col-start-4',
	5: 'col-start-5',
	6: 'col-start-6',
	7: 'col-start-7',
	8: 'col-start-8',
	9: 'col-start-9',
	10: 'col-start-10',
	11: 'col-start-11',
	12: 'col-start-12',
	13: 'col-start-13',
	auto: 'col-start-auto'
};

const column_end: GridColumnStartEndClassObj = {
	1: 'col-end-1',
	2: 'col-end-2',
	3: 'col-end-3',
	4: 'col-end-4',
	5: 'col-end-5',
	6: 'col-end-6',
	7: 'col-end-7',
	8: 'col-end-8',
	9: 'col-end-9',
	10: 'col-end-10',
	11: 'col-end-11',
	12: 'col-end-12',
	13: 'col-end-13',
	auto: 'col-end-auto'
};

const justify_content: JustifyContentClassObj = {
	'normal': 'justify-normal',
	'flex-start': 'justify-start',
	'flex-end': 'justify-end',
	'center': 'justify-center',
	'space-between': 'justify-between',
	'space-around': 'justify-around',
	'space-evenly': 'justify-evenly',
	'stretch': 'justify-stretch'
};

const justify_items: JustifyItemsClassObj = {
	center: 'justify-items-center',
	start: 'justify-items-start',
	end: 'justify-items-end',
	stretch: 'justify-items-stretch'
};

const justify_self: JustifySelfClassObj = {
	center: 'justify-self-center',
	start: 'justify-self-start',
	end: 'justify-self-end',
	stretch: 'justify-self-stretch',
	auto: 'justify-self-auto'
};

const row_span: GridRowSpanClassObj = {
	1: 'row-span-1',
	2: 'row-span-2',
	3: 'row-span-3',
	4: 'row-span-4',
	5: 'row-span-5',
	6: 'row-span-6',
	auto: 'row-auto',
	full: 'row-span-full'
};

const row_start: GridRowStartEndClassObj = {
	1: 'row-start-1',
	2: 'row-start-2',
	3: 'row-start-3',
	4: 'row-start-4',
	5: 'row-start-5',
	6: 'row-start-6',
	7: 'row-start-7',
	auto: 'row-start-auto'
};

const row_end: GridRowStartEndClassObj = {
	1: 'row-end-1',
	2: 'row-end-2',
	3: 'row-end-3',
	4: 'row-end-4',
	5: 'row-end-5',
	6: 'row-end-6',
	7: 'row-end-7',
	auto: 'row-end-auto'
};

const template_columns: GridTemplateColumnsClassObj = {
	1: 'grid-cols-1',
	2: 'grid-cols-2',
	3: 'grid-cols-3',
	4: 'grid-cols-4',
	5: 'grid-cols-5',
	6: 'grid-cols-6',
	7: 'grid-cols-7',
	8: 'grid-cols-8',
	9: 'grid-cols-9',
	10: 'grid-cols-10',
	11: 'grid-cols-11',
	12: 'grid-cols-12',
	none: 'grid-cols-none'
};

const template_rows: GridTemplateRowsClassObj = {
	1: 'grid-rows-1',
	2: 'grid-rows-2',
	3: 'grid-rows-3',
	4: 'grid-rows-4',
	5: 'grid-rows-5',
	6: 'grid-rows-6',
	none: 'grid-rows-none'
};

export default {
	align_content,
	align_items,
	align_self,
	auto_columns,
	auto_flow,
	auto_rows,
	column_span,
	column_start,
	column_end,
	justify_content,
	justify_items,
	justify_self,
	row_span,
	row_start,
	row_end,
	template_columns,
	template_rows
};
