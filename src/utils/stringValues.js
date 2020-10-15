// export type typeValueType = ( val: number, type: string );
export const typeValue = ( val, type = "px" ) => ( type !== "px" ? val + type : val );

