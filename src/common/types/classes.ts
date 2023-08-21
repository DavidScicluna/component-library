import type { PickFrom } from '.';
import type { Color, ColorHue } from './theme';

export type ClassType = 'shadow' | 'fill' | 'bg' | 'text' | 'border' | 'outline';

/**
 * Backgrounds
 */
export type BackgroundColor =
	| `${PickFrom<ClassType, 'bg'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'bg'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

/**
 * Borders
 */
export type BorderWidth = 0 | 1 | 2 | 4 | 8;
export type BorderWidthArr = BorderWidth[];
export type BorderWidthObj = Record<BorderWidth, string>;

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';
export type BorderStyleArr = BorderStyle[];
export type BorderStyleObj = Record<BorderStyle, string>;

export type BorderColor =
	| `${PickFrom<ClassType, 'border'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'border'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

export type OutlineWidth = 0 | 1 | 2 | 4 | 8;
export type OutlineWidthArr = OutlineWidth[];
export type OutlineWidthObj = Record<OutlineWidth, string>;

export type OutlineStyle = 'none' | 'solid' | 'dashed' | 'dotted' | 'double';
export type OutlineStyleArr = OutlineStyle[];
export type OutlineStyleObj = Record<OutlineStyle, string>;

export type OutlineColor =
	| `${PickFrom<ClassType, 'outline'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'outline'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

export type OutlineOffset = 0 | 1 | 2 | 4 | 8;
export type OutlineOffsetArr = OutlineOffset[];
export type OutlineOffsetObj = Record<OutlineOffset, string>;

/**
 * Effects
 */
export type BoxShadow = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';
export type BoxShadowArr = BoxShadow[];
export type BoxShadowObj = Record<BoxShadow, string>;

export type BoxShadowColor =
	| `${PickFrom<ClassType, 'shadow'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'shadow'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

export type Opacity = 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;
export type OpacityArr = Opacity[];
export type OpacityObj = Record<Opacity, string>;

/**
 * Filters
 */
export type Blur =
	| 'none'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';
export type BlurArr = Blur[];
export type BlurObj = Record<Blur, string>;

export type BackdropBlur =
	| 'none'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';
export type BackdropBlurArr = BackdropBlur[];
export type BackdropBlurObj = Record<BackdropBlur, string>;

export type Saturate = 0 | 50 | 100 | 150 | 200;
export type SaturateArr = Saturate[];
export type SaturateObj = Record<Saturate, string>;

/**
 * Flex
 */
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type AlignItemsArr = AlignItems[];
export type AlignItemsObj = Record<AlignItems, string>;

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

export type FlexColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FlexColumnArr = FlexColumn[];
export type FlexColumnObj = Record<FlexColumn, string>;

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexDirectionArr = FlexDirection[];
export type FlexDirectionObj = Record<FlexDirection, string>;

export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
export type FlexWrapArr = FlexWrap[];
export type FlexWrapObj = Record<FlexWrap, string>;

/**
 * Grid
 */
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

export type AlignSelf = 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type AlignSelfArr = AlignSelf[];
export type AlignSelfObj = Record<AlignSelf, string>;

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

/**
 * Interactivity
 */
export type Cursor =
	| 'auto'
	| 'default'
	| 'pointer'
	| 'wait'
	| 'text'
	| 'move'
	| 'help'
	| 'not-allowed'
	| 'none'
	| 'context-menu'
	| 'progress'
	| 'cell'
	| 'crosshair'
	| 'vertical-text'
	| 'alias'
	| 'copy'
	| 'no-drop'
	| 'grab'
	| 'grabbing'
	| 'all-scroll'
	| 'col-resize'
	| 'row-resize'
	| 'n-resize'
	| 'e-resize'
	| 's-resize'
	| 'w-resize'
	| 'ne-resize'
	| 'nw-resize'
	| 'se-resize'
	| 'sw-resize'
	| 'ew-resize'
	| 'ns-resize'
	| 'nesw-resize'
	| 'nwse-resize'
	| 'zoom-in'
	| 'zoom-out';
export type CursorArr = Cursor[];
export type CursorObj = Record<Cursor, string>;

/**
 * Layout
 */
export type Width =
	| 'auto'
	| '1/2'
	| '1/3'
	| '2/3'
	| '1/4'
	| '2/4'
	| '3/4'
	| '1/5'
	| '2/5'
	| '3/5'
	| '4/5'
	| '1/6'
	| '2/6'
	| '3/6'
	| '4/6'
	| '5/6'
	| '1/12'
	| '2/12'
	| '3/12'
	| '4/12'
	| '5/12'
	| '6/12'
	| '7/12'
	| '8/12'
	| '9/12'
	| '10/12'
	| '11/12'
	| 'full'
	| 'screen'
	| 'min'
	| 'max'
	| 'fit';
export type WidthArr = Width[];
export type WidthObj = Record<Width, string>;

export type MinWidth = 0 | 'full' | 'min' | 'max' | 'fit';
export type MinWidthArr = MinWidth[];
export type MinWidthObj = Record<MinWidth, string>;

export type MaxWidth =
	| 0
	| 'none'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| 'full'
	| 'min'
	| 'max'
	| 'fit'
	| 'prose';
export type MaxWidthArr = MaxWidth[];
export type MaxWidthObj = Record<MaxWidth, string>;

export type Height =
	| 'auto'
	| '1/2'
	| '1/3'
	| '2/3'
	| '1/4'
	| '2/4'
	| '3/4'
	| '1/5'
	| '2/5'
	| '3/5'
	| '4/5'
	| '1/6'
	| '2/6'
	| '3/6'
	| '4/6'
	| '5/6'
	| 'full'
	| 'screen'
	| 'min'
	| 'max'
	| 'fit';
export type HeightArr = Height[];
export type HeightObj = Record<Height, string>;

export type MinHeight = 0 | 'full' | 'screen' | 'min' | 'max' | 'fit';
export type MinHeightArr = MinHeight[];
export type MinHeightObj = Record<MinHeight, string>;

export type MaxHeight = 0 | 'none' | 'full' | 'screen' | 'min' | 'max' | 'fit';
export type MaxHeightArr = MaxHeight[];
export type MaxHeightObj = Record<MaxHeight, string>;

export type ZIndex =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 30
	| 40
	| 50
	| 75
	| 100
	| 250
	| 500
	| 1000
	| 'dropdown'
	| 'sticky'
	| 'banner'
	| 'overlay'
	| 'modal'
	| 'popover'
	| 'skipLink'
	| 'toast'
	| 'tooltip'
	| 'auto';
export type ZIndexArr = ZIndex[];
export type ZIndexObj = Record<ZIndex, string | number>;

/**
 * Sizing
 */

/**
 * Spacing
 */

/**
 * SVG
 */
export type FillColor =
	| `${PickFrom<ClassType, 'fill'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'fill'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

/**
 * Transitions
 */

/**
 * Typography
 */
export type TextColor =
	| `${PickFrom<ClassType, 'text'>}-${Exclude<Color, 'transparent' | 'black' | 'white'>}-${ColorHue}`
	| `${PickFrom<ClassType, 'text'>}-${PickFrom<Color, 'transparent' | 'black' | 'white'>}`;

export type TextLineClamp = 'none' | 1 | 2 | 3 | 4 | 5 | 6;
export type TextLineClampArr = TextLineClamp[];
export type TextLineClampObj = Record<TextLineClamp, string>;
