import { typeValue } from "./utils/stringValues";
import { joinObjects } from "./utils/objectsAndArrays";

// type alignContentType = "stretch"|"center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"initial"|"inherit";
// const alignContent: CSSProperties = ( _val: alignContentType = "stretch" ) => ( { alignContent: _val } );
const alignContent = ( _val = "stretch" ) => ( { alignContent: _val } );

// type alignItemsType = "stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit";
// const alignItems: CSSProperties = ( _val: alignItemsType = "stretch" ) => ( { alignItems: _val } );
const alignItems = ( _val = "stretch" ) => ( { alignItems: _val } );

// type alignSelfType = "auto"|"stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit";
// const alignSelf: CSSProperties = ( _val: alignSelfType = "auto" ) => ( { alignSelf: _val } );
const alignSelf = ( _val = "auto" ) => ( { alignSelf: _val } );

// const flexBasis: CSSProperties = ( _val: number|"auto" = "auto", type: string ) => ( { flexBasis: typeValue( _val, type ) } );
const flexBasis = ( _val = "auto", type ) => ( { flexBasis: typeValue( _val, type ) } );

// const flexShrink: CSSProperties = ( _val: number = 1 ) => ( { flexShrink: _val } );
const flexShrink = ( _val = 1 ) => ( { flexShrink: _val } );

// const flexGrow: CSSProperties = ( _val: number = 0 ) => ( { flexGrow: _val } );
const flexGrow = ( _val = 0 ) => ( { flexGrow: _val } );

// const flex: CSSProperties = ( _flexGrow: number, _flexShrink: number, _flexBasis: number|string ) => joinObjects( flexGrow( _flexGrow ), flexShrink( _flexShrink ), flexBasis( _flexBasis ) );
const flex = ( _flexGrow, _flexShrink, _flexBasis ) => joinObjects( flexGrow( _flexGrow ), flexShrink( _flexShrink ), flexBasis( _flexBasis ) );

// type flexDirectionType = "row"|"row-reverse"|"column"|"column-reverse"|"initial"|"inherit";
// const flexDirection: CSSProperties = ( _val: flexDirectionType = "row" ) => ( { flexDirection: _val } );
const flexDirection = ( _val = "row" ) => ( { flexDirection: _val } );

// type flexWrapType = "nowrap"|"wrap"|"wrap-reverse"|"initial"|"inherit";
// const flexWrap: CSSProperties = ( _val: flexWrapType = "nowrap" ) => ( { flexWrap: _val } );
const flexWrap = ( _val = "nowrap" ) => ( { flexWrap: _val } );

// const flexFlow: CSSProperties = ( _flexDirection: flexDirectionType, _flexWrap: flexWrapType ) => joinObjects( flexDirection( _flexDirection ), flexWrap( _flexWrap ) );
const flexFlow = ( _flexDirection, _flexWrap ) => joinObjects( flexDirection( _flexDirection ), flexWrap( _flexWrap ) );

// type justifyContentType = "flex-start"|"flex-end"|"center"|"space-between"|"space-around"|"initial"|"inherit";
// const justifyContent: CSSProperties = ( _val: justifyContentType = "flex-start" ) => ( { justifyContent: _val } );
const justifyContent = ( _val = "flex-start" ) => ( { justifyContent: _val } );

export default {
	alignContent,
	alignItems,
	alignSelf,
	flexBasis,
	flexShrink,
	flexGrow,
	flex,
	flexDirection,
	flexWrap,
	flexFlow,
	justifyContent,
};
