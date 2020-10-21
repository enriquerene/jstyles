import { typeValue } from "./utils/stringValues";

export const backgroundColor = ( _val = "transparent" ) => ( { backgroundColor: _val } )	;
export const backgroundImage = ( _val = "none" ) => ( { backgroundImage: _val } )	;
export const backgroundPosition = ( _val = "0% 0%" ) => ( { backgroundPosition: _val } )	;
export const backgroundSize = ( _val = "auto" ) => ( { backgroundSize: _val } )	;
export const backgroundRepeat = ( _val = "repeat" ) => ( { backgroundRepeat: _val } )	;
export const backgroundOrigin = ( _val = "padding-box" ) => ( { backgroundOrigin: _val } )	;
export const backgroundClip = ( _val = "border-box" ) => ( { backgroundClip: _val } )	;
export const backgroundAttachment = ( _val = "scroll" ) => ( { backgroundAttachment: _val } )	;
export const backgroundBlendMode = ( _val = "normal" ) => ( { backgroundBlendMode: _val } )	;

export default { backgroundColor, backgroundImage, backgroundPosition, backgroundSize, backgroundRepeat, backgroundOrigin, backgroundClip, backgroundAttachment, backgroundBlendMode };
