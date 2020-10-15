import { typeValue } from "./utils/stringValues";
export const textColor = ( color ) => ( { color: color } );
export const textAlign = ( value ) => ( { textAlign: value } );
export const fontSize = ( size, type ) => ( { fontSize: typeValue( size, type ) } );
export const textSize = fontSize;
export const bold = { fontWeight: "bold" };

