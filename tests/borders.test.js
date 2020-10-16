import borders from "../src/borders";

test(
	"borders utilities with default values (from w3c)",
	() =>
	{
		const defaultBorderWidth = "medium";
		const expectedBorderWidth = { borderWidth: defaultBorderWidth };
		expect( JSON.stringify( borders.borderWidth() ) ).toEqual( JSON.stringify( expectedBorderWidth ) );

		const defaultBorderStyle = "none";
		const expectedBorderStyle = { borderStyle: defaultBorderStyle };
		expect( JSON.stringify( borders.borderStyle() ) ).toEqual( JSON.stringify( expectedBorderStyle ) );

		const defaultBorderColor = "";
		const expectedBorderColor = { borderColor: defaultBorderColor };
		expect( JSON.stringify( borders.borderColor() ) ).toEqual( JSON.stringify( expectedBorderColor ) );

		const expectedBorder = { borderWidth: defaultBorderWidth, borderStyle: defaultBorderStyle, borderColor: defaultBorderColor };
		expect( JSON.stringify( borders.border() ) ).toEqual( JSON.stringify( expectedBorder ) );

		const defaultBorderTopWidth = "medium";
		const expectedBorderTopWidth = { borderTopWidth: defaultBorderTopWidth };
		expect( JSON.stringify( borders.borderTopWidth() ) ).toEqual( JSON.stringify( expectedBorderTopWidth ) );

		const defaultBorderTopStyle = "none";
		const expectedBorderTopStyle = { borderTopStyle: defaultBorderTopStyle };
		expect( JSON.stringify( borders.borderTopStyle() ) ).toEqual( JSON.stringify( expectedBorderTopStyle ) );

		const defaultBorderTopColor = "";
		const expectedBorderTopColor = { borderTopColor: defaultBorderTopColor };
		expect( JSON.stringify( borders.borderTopColor() ) ).toEqual( JSON.stringify( expectedBorderTopColor ) );

		const expectedBorderTop = { borderTopWidth: defaultBorderTopWidth, borderTopStyle: defaultBorderTopStyle, borderTopColor: defaultBorderTopColor };
		expect( JSON.stringify( borders.borderTop() ) ).toEqual( JSON.stringify( expectedBorderTop ) );

		const defaultBorderRightWidth = "medium";
		const expectedBorderRightWidth = { borderRightWidth: defaultBorderRightWidth };
		expect( JSON.stringify( borders.borderRightWidth() ) ).toEqual( JSON.stringify( expectedBorderRightWidth ) );

		const defaultBorderRightStyle = "none";
		const expectedBorderRightStyle = { borderRightStyle: defaultBorderRightStyle };
		expect( JSON.stringify( borders.borderRightStyle() ) ).toEqual( JSON.stringify( expectedBorderRightStyle ) );

		const defaultBorderRightColor = "";
		const expectedBorderRightColor = { borderRightColor: defaultBorderRightColor };
		expect( JSON.stringify( borders.borderRightColor() ) ).toEqual( JSON.stringify( expectedBorderRightColor ) );

		const expectedBorderRight = { borderRightWidth: defaultBorderRightWidth, borderRightStyle: defaultBorderRightStyle, borderRightColor: defaultBorderRightColor };
		expect( JSON.stringify( borders.borderRight() ) ).toEqual( JSON.stringify( expectedBorderRight ) );

		const defaultBorderBottomWidth = "medium";
		const expectedBorderBottomWidth = { borderBottomWidth: defaultBorderBottomWidth };
		expect( JSON.stringify( borders.borderBottomWidth() ) ).toEqual( JSON.stringify( expectedBorderBottomWidth ) );

		const defaultBorderBottomStyle = "none";
		const expectedBorderBottomStyle = { borderBottomStyle: defaultBorderBottomStyle };
		expect( JSON.stringify( borders.borderBottomStyle() ) ).toEqual( JSON.stringify( expectedBorderBottomStyle ) );

		const defaultBorderBottomColor = "";
		const expectedBorderBottomColor = { borderBottomColor: defaultBorderBottomColor };
		expect( JSON.stringify( borders.borderBottomColor() ) ).toEqual( JSON.stringify( expectedBorderBottomColor ) );

		const expectedBorderBottom = { borderBottomWidth: defaultBorderBottomWidth, borderBottomStyle: defaultBorderBottomStyle, borderBottomColor: defaultBorderBottomColor };
		expect( JSON.stringify( borders.borderBottom() ) ).toEqual( JSON.stringify( expectedBorderBottom ) );

		const defaultBorderLeftWidth = "medium";
		const expectedBorderLeftWidth = { borderLeftWidth: defaultBorderLeftWidth };
		expect( JSON.stringify( borders.borderLeftWidth() ) ).toEqual( JSON.stringify( expectedBorderLeftWidth ) );

		const defaultBorderLeftStyle = "none";
		const expectedBorderLeftStyle = { borderLeftStyle: defaultBorderLeftStyle };
		expect( JSON.stringify( borders.borderLeftStyle() ) ).toEqual( JSON.stringify( expectedBorderLeftStyle ) );

		const defaultBorderLeftColor = "";
		const expectedBorderLeftColor = { borderLeftColor: defaultBorderLeftColor };
		expect( JSON.stringify( borders.borderLeftColor() ) ).toEqual( JSON.stringify( expectedBorderLeftColor ) );

		const expectedBorderLeft = { borderLeftWidth: defaultBorderLeftWidth, borderLeftStyle: defaultBorderLeftStyle, borderLeftColor: defaultBorderLeftColor };
		expect( JSON.stringify( borders.borderLeft() ) ).toEqual( JSON.stringify( expectedBorderLeft ) );

	}
);
