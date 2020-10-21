import { typeValue } from "./utils/stringValues";
import { joinObjects } from "./utils/objectsAndArrays";

export const borderTopWidth = ( _val = "medium" ) => ( { borderTopWidth: _val });
export const borderTopStyle = ( _val = "none" ) => ( { borderTopStyle: _val });
export const borderTopColor = ( _val = "" ) => ( { borderTopColor: _val });
export const borderTop = ( width, style, color ) => ( joinObjects( borderTopWidth( width ), borderTopStyle( style ), borderTopColor( color ) ) );


export const borderRightWidth = ( _val = "medium" ) => ( { borderRightWidth: _val });
export const borderRightStyle = ( _val = "none" ) => ( { borderRightStyle: _val });
export const borderRightColor = ( _val = "" ) => ( { borderRightColor: _val });
export const borderRight = ( width, style, color ) => ( joinObjects( borderRightWidth( width ), borderRightStyle( style ), borderRightColor( color ) ) );


export const borderBottomWidth = ( _val = "medium" ) => ( { borderBottomWidth: _val });
export const borderBottomStyle = ( _val = "none" ) => ( { borderBottomStyle: _val });
export const borderBottomColor = ( _val = "" ) => ( { borderBottomColor: _val });
export const borderBottom = ( width, style, color ) => ( joinObjects( borderBottomWidth( width ), borderBottomStyle( style ), borderBottomColor( color ) ) );


export const borderLeftWidth = ( _val = "medium" ) => ( { borderLeftWidth: _val });
export const borderLeftStyle = ( _val = "none" ) => ( { borderLeftStyle: _val });
export const borderLeftColor = ( _val = "" ) => ( { borderLeftColor: _val });
export const borderLeft = ( width, style, color ) => ( joinObjects( borderLeftWidth( width ), borderLeftStyle( style ), borderLeftColor( color ) ) );

export const borderWidth = ( _val = "medium" ) => ( { borderWidth: _val });
export const borderStyle = ( _val = "none" ) => ( { borderStyle: _val });
export const borderColor = ( _val = "" ) => ( { borderColor: _val });
export const border = ( width, style, color ) => ( joinObjects( borderWidth( width ), borderStyle( style ), borderColor( color ) ) );



export default {
	borderTopWidth, 
	borderTopStyle, 
	borderTopColor, 
	borderTop, 
	borderRightWidth, 
	borderRightStyle, 
	borderRightColor, 
	borderRight, 
	borderBottomWidth, 
	borderBottomStyle, 
	borderBottomColor, 
	borderBottom, 
	borderLeftWidth, 
	borderLeftStyle, 
	borderLeftColor, 
	borderLeft, 
	borderWidth, 
	borderStyle, 
	borderColor, 
	border, 
}
