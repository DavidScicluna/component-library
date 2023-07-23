import type { AlignItemsObj, FlexDirectionObj, FlexWrapObj, JustifyContentObj } from '@common/types/classes';

const alignItems: AlignItemsObj = {
	'flex-start': 'items-start',
	'flex-end': 'items-end',
	'center': 'items-center',
	'baseline': 'items-baseline',
	'stretch': 'items-stretch'
};

const direction: FlexDirectionObj = {
	'row': 'flex-row',
	'row-reverse': 'flex-row-reverse',
	'column': 'flex-col',
	'column-reverse': 'flex-col-reverse'
};

const wrap: FlexWrapObj = {
	'wrap': 'flex-wrap',
	'wrap-reverse': 'flex-wrap-reverse',
	'nowrap': 'flex-nowrap'
};

const justifyContent: JustifyContentObj = {
	'normal': 'justify-normal',
	'flex-start': 'justify-start',
	'flex-end': 'justify-end',
	'center': 'justify-center',
	'space-between': 'justify-between',
	'space-around': 'justify-around',
	'space-evenly': 'justify-evenly',
	'stretch': 'justify-stretch'
};

export default { alignItems, direction, wrap, justifyContent };
