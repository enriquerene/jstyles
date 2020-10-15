import { typeValue } from "./utils/stringValues";
import { joinObjects } from "../utils/objectsAndArrays";

export type alignContentType = "stretch"|"center"|"flex-start"|"flex-end"|"space-between"|"space-around"|"initial"|"inherit";
export const alignContent: CSSProperties = ( _val: alignContentType = "stretch" ) => ( { alignContent: _val } );

export type alignItemsType = "stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit";
export const alignItems: CSSProperties = ( _val: alignItemsType = "stretch" ) => ( { alignItems: _val } );

export type alignSelfType = "auto"|"stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit";
export const alignSelf: CSSProperties = ( _val: alignSelfType = "auto" ) => ( { alignSelf: _val } );

export const flexBasis: CSSProperties = ( _val: number, type: string ) => ( { flexBasis: typeValue( _val: number, type: string ) } );

export const flexShrink: CSSProperties = ( _val: number = 1 ) => ( { flexShrink: _val } );

export const flexGrow: CSSProperties = ( _val: number = 0 ) => ( { flexGrow: _val } );

export const flex: CSSProperties = ( _flexGrow: number, _flexShrink: number, _flexBasis: number|string ) => joinObjects( flexGrow( _flexGrow ), flexShrink( _flexShrink ), flexBasis( _flexBasis ) );

export type flexDirectionType = "row"|"row-reverse"|"column"|"column-reverse"|"initial"|"inherit";
export const flexDirection: CSSProperties = ( _val: flexDirectionType = "row" ) => ( { flexDirection: _val } );

export type flexWrapType = "nowrap"|"wrap"|"wrap-reverse"|"initial"|"inherit";
export const flexWrap: CSSProperties = ( _val: flexWrapType = "nowrap" ) => ( { flexWrap: _val } );

export const flexFlow: CSSProperties = ( _flexDirection: flexDirectionType, _flexWrap: flexWrapType ) => joinObjects( flexDirection( _flexDirection ), flexWrap( _flexWrap ) );

export type justifyContentType = "flex-start"|"flex-end"|"center"|"space-between"|"space-around"|"initial"|"inherit";
export const justifyContent: CSSProperties = ( _val: justifyContentType = "flex-start" ) => ( { justifyContent: _val } );
