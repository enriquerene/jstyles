import font from "../src/font";

test(
	"font utilities with default values (from w3c)",
	() =>
	{
		const defaultFontStyle = "normal";
		const expectedFontStyle = { fontStyle: defaultFontStyle };
		expect( JSON.stringify( font.fontStyle() ) ).toEqual( JSON.stringify( expectedFontStyle ) );

		const defaultFontVariant = "normal";
		const expectedFontVariant = { fontVariant: defaultFontVariant };
		expect( JSON.stringify( font.fontVariant() ) ).toEqual( JSON.stringify( expectedFontVariant ) );

		const defaultFontWeight = "normal";
		const expectedFontWeight = { fontWeight: defaultFontWeight };
		expect( JSON.stringify( font.fontWeight() ) ).toEqual( JSON.stringify( expectedFontWeight ) );

		const defaultFontSize = "medium";
		const expectedFontSize = { fontSize: defaultFontSize };
		expect( JSON.stringify( font.fontSize() ) ).toEqual( JSON.stringify( expectedFontSize ) );

		const defaultLineHeight = "normal";
		const expectedLineHeight = { lineHeight: defaultLineHeight };
		expect( JSON.stringify( font.lineHeight() ) ).toEqual( JSON.stringify( expectedLineHeight ) );

		const defaultFontFamily = "";
		const expectedFontFamily = { fontFamily: defaultFontFamily };
		expect( JSON.stringify( font.fontFamily() ) ).toEqual( JSON.stringify( expectedFontFamily ) );

		// const expectedFont = { fontStyle: defaultFontStyle, fontVariant: defaultFontVariant, fontWeight: defaultFontWeight, fontSize: defaultFontSize, lineHeight: defaultLineHeight, fontFamily: defaultFontFamily };
		// expect( JSON.stringify( font.font() ) ).toEqual( JSON.stringify( expectedFont ) );

		const defaultFontKerning = "auto";
		const expectedFontKerning = { fontKerning: defaultFontKerning };
		expect( JSON.stringify( font.fontKerning() ) ).toEqual( JSON.stringify( expectedFontKerning ) );

		const defaultFontVariantCaps = "normal";
		const expectedFontVariantCaps = { fontVariantCaps: defaultFontVariantCaps };
		expect( JSON.stringify( font.fontVariantCaps() ) ).toEqual( JSON.stringify( expectedFontVariantCaps ) );

		const defaultLetterSpacing = "normal";
		const expectedLetterSpacing = { letterSpacing: defaultLetterSpacing };
		expect( JSON.stringify( font.letterSpacing() ) ).toEqual( JSON.stringify( expectedLetterSpacing ) );

	}
);
