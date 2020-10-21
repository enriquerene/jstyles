import { typeValue } from "./utils/stringValues";

export const fontStyle = ( _val = "normal" ) => ( { fontStyle: _val } );

export const fontVariant = ( _val = "normal" ) => ( { fontVariant: _val } );

export const fontWeight = ( _val = "normal" ) => ( { fontWeight: _val } );

export const fontSize = ( _val = "medium" ) => ( { fontSize: _val } );

export const lineHeight = ( _val = "normal" ) => ( { lineHeight: _val } );

export const fontFamily = ( _val = "" ) => ( { fontFamily: _val } );

// const defaultFont = joinObjects( fontStyle(), fontVariant(), fontWeight(), fontSize(), lineHeight(), fontFamily() );
// export const font = ( _val = "" ) => joinObjects( fontStyle(), fontVariant(), fontWeight(), fontSize(), lineHeight(), fontFamily() );

export const fontKerning = ( _val = "auto" ) => ( { fontKerning: _val } );

export const fontVariantCaps = ( _val = "normal" ) => ( { fontVariantCaps: _val } );

export const letterSpacing = ( _val = "normal" ) => ( { letterSpacing: _val } );

export default { fontStyle, fontVariant, fontWeight, fontSize, lineHeight, fontFamily, /* font, */ fontKerning, fontVariantCaps, letterSpacing}
