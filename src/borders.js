import { typeValue } from "./utils/stringValues";

export const border = ( width = 1, style = "solid" ) =>
(
	{
		borderWidth: width,
		borderStyle: style
	}
);
export const borderBottom = ( width = 1, style = "solid" ) =>
(
	{
		borderBottomWidth: width,
		borderBottomStyle: style
	}
);
export const borderTop = ( width = 1, style = "solid" ) =>
(
	{
		borderTopWidth: width,
		borderTopStyle: style
	}
);
export const borderRight = ( width = 1, style = "solid" ) =>
(
	{
		borderRightWidth: width,
		borderRightStyle: style
	}
);
export const borderLeft = ( width = 1, style = "solid" ) =>
(
	{
		borderLeftWidth: width,
		borderLeftStyle: style
	}
);

export const borderRadius = ( val, type = "px" ) => ( { borderRadius: typeValue( val, type ) } );

export const borderColor = ( color ) => ( { borderColor: color } );
export const borderTopColor = ( color ) => ( { borderTopColor: color } );
export const borderBottomColor = ( color ) => ( { borderBottomColor: color } );
export const borderLeftColor = ( color ) => ( { borderLeftColor: color } );
export const borderRightColor = ( color ) => ( { borderRightColor: color } );

