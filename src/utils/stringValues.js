export type typeValueType = ( val: number, type: string );
export const typeValue: number|string = ( val, type ) => ( type !== "px" ? val + type : val );

