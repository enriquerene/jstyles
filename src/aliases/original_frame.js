import { typeValue } from "../utils/stringValues";
import { joinObjects } from "../utils/objectsAndArrays";
import { width } from "./spacing";
// flex utilities

export type alignContentType = "stretch"|"center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"initial"|"inherit";
export const alignContent = ( _val: alignContentType = "stretch" ) => ( { alignContent: _val } );

export type alignItemsType = "stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit";
export const alignItems = ( _val: alignItemsType = "stretch" ) => ( { alignItems: _val } );

export type alignSelfType = "auto"|"stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit";
export const alignSelf = ( _val: alignSelfType = "auto" ) => ( { alignSelf: _val } );

export const flexBasis = ( _val: number, type: string ) => ( { flexBasis: typeValue( _val: number, type: string ) } );
export const flexShrink = ( _val: number = 1 ) => ( { flexShrink: _val } );
export const flexGrow = ( _val: number = 0 ) => ( { flexGrow: _val } );
export const flex = ( _flexGrow: number, _flexShrink: number, _flexBasis: number|string ) => joinObjects( flexGrow( _flexGrow ), flexShrink( _flexShrink ), flexBasis( _flexBasis ) );

export type flexDirectionType = "row"|"row-reverse"|"column"|"column-reverse"|"initial"|"inherit";
export const flexDirection = ( _val: flexDirectionType = "row" ) => ( { flexDirection: _val } );
export type flexWrapType = "nowrap"|"wrap"|"wrap-reverse"|"initial"|"inherit";
export const flexWrap = ( _val: flexWrapType = "nowrap" ) => ( { flexWrap: _val } );
export const flexFlow = ( _flexDirection: flexDirectionType, _flexWrap: flexWrapType ) => joinObjects( flexDirection( _flexDirection ), flexWrap( _flexWrap ) );

export const flexRow = { display: "flex", flexDirection: "row" };
export const flexColumn = { display: "flex", flexDirection: "column" };
export const justifyCenter = { justifyContent: "center" };
export const justifyBetween = { justifyContent: "space-between" };

//
export const noWidth = width( 0 );
export const fullWidth = width( 100, "%" );

export const display = ( value = "block" ) => ( { display: value } );
export const inLine = display( "inline" );
export const hidden = display( "none" );
export const shown = display();

export const overflow = ( value, axis ) =>
{
	switch ( axis )
	{
		case "x":
		case "X":
			return { overflowX: value };
		case "y":
		case "Y":
			return { overflowY: value };
		default:
			return { overflow: value };
	}
}


export const transparent = { opacity: 0 };
export const opaque = { opacity: 1 };

export const position = ( value = "absolute" ) => ( { position: value } );
export const fixedBottom = { position: "absolute", bottom: 0 };
export const fixedTop = { position: "absolute", top: 0 };
export const fixed = ( position ) => ( position === "bottom" ? fixedBottom : fixedTop );
export const onScreen = fixed();
