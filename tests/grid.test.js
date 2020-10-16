import grid from "../src/grid";
import { joinObjects } from "../src/utils/objectsAndArrays";

test(
	"grid utilities with default values (from w3c)",
	() =>
	{
		const defaultGridTemplateRows = "none";
		const expectedGridTemplateRows = { gridTemplateRows: defaultGridTemplateRows };
		expect( JSON.stringify( grid.gridTemplateRows() ) ).toEqual( JSON.stringify( expectedGridTemplateRows ) );

		const defaultGridTemplateColumns = "none";
		const expectedGridTemplateColumns = { gridTemplateColumns: defaultGridTemplateColumns };
		expect( JSON.stringify( grid.gridTemplateColumns() ) ).toEqual( JSON.stringify( expectedGridTemplateColumns ) );

		const defaultGridTemplateAreas = "none";
		const expectedGridTemplateAreas = { gridTemplateAreas: defaultGridTemplateAreas };
		expect( JSON.stringify( grid.gridTemplateAreas() ) ).toEqual( JSON.stringify( expectedGridTemplateAreas ) );

		const expectedGridTemplate = joinObjects( expectedGridTemplateRows, expectedGridTemplateColumns, expectedGridTemplateAreas );
		expect( JSON.stringify( grid.gridTemplate() ) ).toEqual( JSON.stringify( expectedGridTemplate ) );

		const defaultGridAutoRows = "auto";
		const expectedGridAutoRows = { gridAutoRows: defaultGridAutoRows };
		expect( JSON.stringify( grid.gridAutoRows() ) ).toEqual( JSON.stringify( expectedGridAutoRows ) );

		const defaultGridAutoColumns = "auto";
		const expectedGridAutoColumns = { gridAutoColumns: defaultGridAutoColumns };
		expect( JSON.stringify( grid.gridAutoColumns() ) ).toEqual( JSON.stringify( expectedGridAutoColumns ) );

		const defaultGridAutoFlow = "row";
		const expectedGridAutoFlow = { gridAutoFlow: defaultGridAutoFlow };
		expect( JSON.stringify( grid.gridAutoFlow() ) ).toEqual( JSON.stringify( expectedGridAutoFlow ) );

		const expectedGrid = { gridTemplateRows: defaultGridTemplateRows, gridTemplateColumns: defaultGridTemplateColumns, gridTemplateAreas: defaultGridTemplateAreas, gridAutoRows: defaultGridAutoRows, gridAutoColumns: defaultGridAutoColumns, gridAutoFlow: defaultGridAutoFlow };
		expect( JSON.stringify( grid.grid() ) ).toEqual( JSON.stringify( expectedGrid ) );

		const defaultGridRowStart = "auto";
		const expectedGridRowStart = { gridRowStart: defaultGridRowStart };
		expect( JSON.stringify( grid.gridRowStart() ) ).toEqual( JSON.stringify( expectedGridRowStart ) );

		const defaultGridRowEnd = "auto";
		const expectedGridRowEnd = { gridRowEnd: defaultGridRowEnd };
		expect( JSON.stringify( grid.gridRowEnd() ) ).toEqual( JSON.stringify( expectedGridRowEnd ) );

		const expectedGridRow = { gridRowStart: defaultGridRowStart, gridRowEnd: defaultGridRowEnd };
		expect( JSON.stringify( grid.gridRow() ) ).toEqual( JSON.stringify( expectedGridRow ) );

		const defaultGridColumnStart = "auto";
		const expectedGridColumnStart = { gridColumnStart: defaultGridColumnStart };
		expect( JSON.stringify( grid.gridColumnStart() ) ).toEqual( JSON.stringify( expectedGridColumnStart ) );

		const defaultGridColumnEnd = "auto";
		const expectedGridColumnEnd = { gridColumnEnd: defaultGridColumnEnd };
		expect( JSON.stringify( grid.gridColumnEnd() ) ).toEqual( JSON.stringify( expectedGridColumnEnd ) );

		const expectedGridColumn = { gridColumnStart: defaultGridColumnStart, gridColumnEnd: defaultGridColumnEnd };
		expect( JSON.stringify( grid.gridColumn() ) ).toEqual( JSON.stringify( expectedGridColumn ) );

		const expectedGridArea = joinObjects( expectedGridRow, expectedGridColumn );
		expect( JSON.stringify( grid.gridArea() ) ).toEqual( JSON.stringify( expectedGridArea ) );

		const defaultGridRowGap = 0;
		const expectedGridRowGap = { gridRowGap: defaultGridRowGap };
		expect( JSON.stringify( grid.gridRowGap() ) ).toEqual( JSON.stringify( expectedGridRowGap ) );

		const defaultGridColumnGap = 0;
		const expectedGridColumnGap = { gridColumnGap: defaultGridColumnGap };
		expect( JSON.stringify( grid.gridColumnGap() ) ).toEqual( JSON.stringify( expectedGridColumnGap ) );

		const expectedGridGap = joinObjects( expectedGridRowGap, expectedGridColumnGap );
		expect( JSON.stringify( grid.gridGap() ) ).toEqual( JSON.stringify( expectedGridGap ) );
	}
);
