import { typeValue } from "./utils/stringValues";
// content
export const height = ( val, type = "px" ) => ( { height: typeValue( val, type ) } );
export const width = ( val, type = "px" ) => ( { width: typeValue( val, type ) } );
export const maxWidth = ( val, type = "px" ) => ( { maxWidth: typeValue( val, type ) } );
export const maxHeight = ( val, type = "px" ) => ( { maxHeight: typeValue( val, type ) } );
// responsive proposes
export const getClientScreenHeight = () =>
{
	return document.body.clientHeight;
};
export const getClientScreenWidth = () =>
{
	return document.body.clientWidth;
};

