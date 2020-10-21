import { typeValue } from "./utils/stringValues";
import { joinObjects } from "./utils/objectsAndArrays";

export const paddingTop = ( _val = 0, type = "px" ) => ( { paddingTop: typeValue( _val, type ) } );
export const paddingRight = ( _val = 0, type = "px" ) => ( { paddingRight: typeValue( _val, type ) } );
export const paddingBottom = ( _val = 0, type = "px" ) => ( { paddingBottom: typeValue( _val, type ) } );
export const paddingLeft = ( _val = 0, type = "px" ) => ( { paddingLeft: typeValue( _val, type ) } );
export const padding = ( _val = 0, type = "px" ) => joinObjects( paddingTop( _val, type ), paddingRight( _val, type ), paddingBottom( _val, type ), paddingLeft( _val, type ) );

export const paddingHorizontal = ( _val = 0, type = "px" ) => joinObjects( paddingLeft( _val, type ), paddingRight( _val, type ) );
export const paddingVertical = ( _val = 0, type = "px" ) => joinObjects( paddingTop( _val, type ), paddingBottom( _val, type ) );

export default { padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingHorizontal, paddingVertical }
