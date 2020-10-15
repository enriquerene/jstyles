import joinStyles from "./utils/joinStyles";
import {
	flexRow
} from "./frames";
import {
	padding
} from "./spacing";
export const noStyle = { listStyleType: "none" };
export const rowItem = joinStyles( noStyle, flexRow, padding( 16 ) );
