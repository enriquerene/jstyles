import { joinObjects } from "../src/utils/objectsAndArrays";

export const gridTemplateRows = ( _val = "none" ) => ( { gridTemplateRows: _val } );
export const gridTemplateColumns = ( _val = "none" ) => ( { gridTemplateColumns: _val } );
export const gridTemplateAreas = ( _val = "none" ) => ( { gridTemplateAreas: _val } );
export const gridTemplate = () => joinObjects( gridTemplateRows(), gridTemplateColumns(), gridTemplateAreas() );
export const gridAutoRows = ( _val = "auto" ) => ( { gridAutoRows: _val } );
export const gridAutoColumns = ( _val = "auto" ) => ( { gridAutoColumns: _val } );
export const gridAutoFlow = ( _val = "row" ) => ( { gridAutoFlow: _val } );
export const grid = () => joinObjects( gridTemplateRows(), gridTemplateColumns(), gridTemplateAreas(), gridAutoRows(), gridAutoColumns(), gridAutoFlow() );
export const gridRowStart = ( _val = "auto" ) => ( { gridRowStart: _val } );
export const gridRowEnd = ( _val = "auto" ) => ( { gridRowEnd: _val } );
export const gridRow = () => joinObjects( gridRowStart(), gridRowEnd() );
export const gridColumnStart = ( _val = "auto" ) => ( { gridColumnStart: _val } );
export const gridColumnEnd = ( _val = "auto" ) => ( { gridColumnEnd: _val } );
export const gridColumn = () => joinObjects( gridColumnStart(), gridColumnEnd() );
export const gridArea = () => joinObjects( gridRow(), gridColumn() );
export const gridRowGap = ( _val = 0 ) => ( { gridRowGap: _val } );
export const gridColumnGap = ( _val = 0 ) => ( { gridColumnGap: _val } );
export const gridGap = () => joinObjects( gridRowGap(), gridColumnGap() );

export default { gridTemplateRows, gridTemplateColumns, gridTemplateAreas, gridTemplate, gridAutoRows, gridAutoColumns, gridAutoFlow, grid, gridRowStart, gridRowEnd, gridRow, gridColumnStart, gridColumnEnd, gridColumn, gridArea, gridRowGap, gridColumnGap, gridGap };
