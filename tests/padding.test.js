import padding from "../src/padding";

test(
	"padding utilities with default values (from w3c)",
	() =>
	{
		const defaultPaddingTop = 0;
		const expectedPaddingTop = { paddingTop: defaultPaddingTop };
		expect( JSON.stringify( padding.paddingTop() ) ).toEqual( JSON.stringify( expectedPaddingTop ) );

		const defaultPaddingRight = 0;
		const expectedPaddingRight = { paddingRight: defaultPaddingRight };
		expect( JSON.stringify( padding.paddingRight() ) ).toEqual( JSON.stringify( expectedPaddingRight ) );

		const defaultPaddingBottom = 0;
		const expectedPaddingBottom = { paddingBottom: defaultPaddingBottom };
		expect( JSON.stringify( padding.paddingBottom() ) ).toEqual( JSON.stringify( expectedPaddingBottom ) );

		const defaultPaddingLeft = 0;
		const expectedPaddingLeft = { paddingLeft: defaultPaddingLeft };
		expect( JSON.stringify( padding.paddingLeft() ) ).toEqual( JSON.stringify( expectedPaddingLeft ) );

		const expectedPadding = { paddingTop: defaultPaddingTop, paddingRight: defaultPaddingRight, paddingBottom: defaultPaddingBottom, paddingLeft: defaultPaddingLeft };
		expect( JSON.stringify( padding.padding() ) ).toEqual( JSON.stringify( expectedPadding ) );
	}
);
