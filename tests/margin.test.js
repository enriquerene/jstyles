import margin from "../src/margin";

test(
	"margin utilities with default values (from w3c)",
	() =>
	{
		const defaultMarginTop = 0;
		const expectedMarginTop = { marginTop: defaultMarginTop };
		expect( JSON.stringify( margin.marginTop() ) ).toEqual( JSON.stringify( expectedMarginTop ) );

		const defaultMarginRight = 0;
		const expectedMarginRight = { marginRight: defaultMarginRight };
		expect( JSON.stringify( margin.marginRight() ) ).toEqual( JSON.stringify( expectedMarginRight ) );

		const defaultMarginBottom = 0;
		const expectedMarginBottom = { marginBottom: defaultMarginBottom };
		expect( JSON.stringify( margin.marginBottom() ) ).toEqual( JSON.stringify( expectedMarginBottom ) );

		const defaultMarginLeft = 0;
		const expectedMarginLeft = { marginLeft: defaultMarginLeft };
		expect( JSON.stringify( margin.marginLeft() ) ).toEqual( JSON.stringify( expectedMarginLeft ) );

		const expectedMargin = { marginTop: defaultMarginTop, marginRight: defaultMarginRight, marginBottom: defaultMarginBottom, marginLeft: defaultMarginLeft };
		expect( JSON.stringify( margin.margin() ) ).toEqual( JSON.stringify( expectedMargin ) );
	}
);
