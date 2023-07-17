export type ClassType = 'bg' | 'text';

export type AlignContent =
	| 'normal'
	| 'center'
	| 'start'
	| 'end'
	| 'between'
	| 'around'
	| 'evenly'
	| 'baseline'
	| 'stretch';
export type AlignContentArr = AlignContent[];
export type AlignContentObj = Record<AlignContent, string>;

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type AlignItemsArr = AlignItems[];
export type AlignItemsObj = Record<AlignItems, string>;

export type AlignSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type AlignSelfArr = AlignSelf[];
export type AlignSelfObj = Record<AlignSelf, string>;

export type JustifyContent =
	| 'normal'
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch';
export type JustifyContentArr = JustifyContent[];
export type JustifyContentObj = Record<JustifyContent, string>;

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch';
export type JustifyItemsArr = JustifyItems[];
export type JustifyItemsObj = Record<JustifyItems, string>;

export type JustifySelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type JustifySelfArr = JustifySelf[];
export type JustifySelfObj = Record<JustifySelf, string>;

export type PlaceContent = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'baseline' | 'stretch';
export type PlaceContentArr = PlaceContent[];
export type PlaceContentObj = Record<PlaceContent, string>;

export type PlaceItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type PlaceItemsArr = PlaceItems[];
export type PlaceItemsObj = Record<PlaceItems, string>;

export type PlaceSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type PlaceSelfArr = PlaceSelf[];
export type PlaceSelfObj = Record<PlaceSelf, string>;

export type FlexColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FlexColumnArr = FlexColumn[];
export type FlexColumnObj = Record<FlexColumn, string>;

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexDirectionArr = FlexDirection[];
export type FlexDirectionObj = Record<FlexDirection, string>;

export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
export type FlexWrapArr = FlexWrap[];
export type FlexWrapObj = Record<FlexWrap, string>;

export type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridColumnArr = GridColumn[];
export type GridColumnObj = Record<GridColumn, string>;

export type GridRow = 1 | 2 | 3 | 4 | 5 | 6;
export type GridRowArr = GridRow[];
export type GridRowObj = Record<GridRow, string>;

export type GridAutoFlow = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
export type GridAutoFlowArr = GridAutoFlow[];
export type GridAutoFlowObj = Record<GridAutoFlow, string>;

export type GridAuto = 'auto' | 'min' | 'max' | 'fr';
export type GridAutoArr = GridAuto[];
export type GridAutoObj = Record<GridAuto, string>;

export type GridColumnSpan = GridColumn | 'full' | 'auto';
export type GridColumnSpanArr = GridColumnSpan[];
export type GridColumnSpanObj = Record<GridColumnSpan, string>;

export type GridColumnStartEnd = GridColumn | 13 | 'auto';
export type GridColumnStartEndArr = GridColumnStartEnd[];
export type GridColumnStartEndObj = Record<GridColumnStartEnd, string>;

export type GridRowSpan = GridRow | 'full' | 'auto';
export type GridRowSpanArr = GridRowSpan[];
export type GridRowSpanObj = Record<GridRowSpan, string>;

export type GridRowStartEnd = GridRow | 7 | 'auto';
export type GridRowStartEndArr = GridRowStartEnd[];
export type GridRowStartEndObj = Record<GridRowStartEnd, string>;

export type GridTemplateColumns = GridColumn | 'none';
export type GridTemplateColumnsArr = GridTemplateColumns[];
export type GridTemplateColumnsObj = Record<GridTemplateColumns, string>;

export type GridTemplateRows = GridRow | 'none';
export type GridTemplateRowsArr = GridTemplateRows[];
export type GridTemplateRowsObj = Record<GridTemplateRows, string>;
