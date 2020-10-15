import { typeValue } from "./utils/stringValues";
// margin
export const margin = ( val, type = "px" ) => ( { margin: typeValue( val, type ) } );
export const marginLeft = ( val, type = "px" ) => ( { marginLeft: typeValue( val, type ) } );
export const marginRight = ( val, type = "px" ) => ( { marginRight: typeValue( val, type ) } );
export const marginTop = ( val, type = "px" ) => ( { marginTop: typeValue( val, type ) } );
export const marginBottom = ( val, type = "px" ) => ( { marginBottom: typeValue( val, type ) } );
export const marginHorizontal = ( val, type = "px" ) => ( { marginLeft: typeValue( val, type ), marginRight: typeValue( val, type ) } );
export const marginVertical = ( val, type = "px" ) => ( { marginTop: typeValue( val, type ), marginBottom: typeValue( val, type ) } );
// padding
export const padding = ( val, type = "px" ) => ( { padding: typeValue( val, type ) } );
export const paddingLeft = ( val, type = "px" ) => ( { paddingLeft: typeValue( val, type ) } );
export const paddingRight = ( val, type = "px" ) => ( { paddingRight: typeValue( val, type ) } );
export const paddingTop = ( val, type = "px" ) => ( { paddingTop: typeValue( val, type ) } );
export const paddingBottom = ( val, type = "px" ) => ( { paddingBottom: typeValue( val, type ) } );
export const paddingHorizontal = ( val, type = "px" ) => ( { paddingLeft: typeValue( val, type ), paddingRight: typeValue( val, type ) } );
export const paddingVertical = ( val, type = "px" ) => ( { paddingTop: typeValue( val, type ), paddingBottom: typeValue( val, type ) } );
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
