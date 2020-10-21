import { typeValue } from "./utils/stringValues";
import { joinObjects } from "./utils/objectsAndArrays";

export const marginTop = ( _val = 0, type = "px" ) => ( { marginTop: typeValue( _val, type ) } );
export const marginRight = ( _val = 0, type = "px" ) => ( { marginRight: typeValue( _val, type ) } );
export const marginBottom = ( _val = 0, type = "px" ) => ( { marginBottom: typeValue( _val, type ) } );
export const marginLeft = ( _val = 0, type = "px" ) => ( { marginLeft: typeValue( _val, type ) } );
export const margin = ( _val = 0, type = "px" ) => joinObjects( marginTop( _val, type ), marginRight( _val, type ), marginBottom( _val, type ), marginLeft( _val, type ) );

export const marginHorizontal = ( _val = 0, type = "px" ) => joinObjects( marginLeft( _val, type ), marginRight( _val, type ) );
export const marginVertical = ( _val = 0, type = "px" ) => joinObjects( marginTop( _val, type ), marginBottom( _val, type ) );

export default { margin, marginLeft, marginRight, marginTop, marginBottom, marginHorizontal, marginVertical }
