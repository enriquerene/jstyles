import flex from "./flex";

test(
	"flex utilities with default values (from w3c)",
	() =>
	{
		const defaultAlignContent = "stretch";
		const expectedAlignContent = { alignContent: defaultAlignContent };
		expect( JSON.stringify( flex.alignContent() ) ).toEqual( JSON.stringify( expectedAlignContent ) );

		const defaultAlignItems = "stretch";
		const expectedAlignItems = { alignItems: defaultAlignItems };
		expect( JSON.stringify( flex.alignItems() ) ).toEqual( JSON.stringify( expectedAlignItems ) );

		const defaultAlignSelf = "auto";
		const expectedAlignSelf = { alignSelf: defaultAlignSelf };
		expect( JSON.stringify( flex.alignSelf() ) ).toEqual( JSON.stringify( expectedAlignSelf ) );

		const defaultFlexBasis = "auto";
		const expectedFlexBasis = { flexBasis: defaultFlexBasis };
		expect( JSON.stringify( flex.flexBasis() ) ).toEqual( JSON.stringify( expectedFlexBasis ) );

		const defaultFlexShrink = 1;
		const expectedFlexShrink = { flexShrink: defaultFlexShrink };
		expect( JSON.stringify( flex.flexShrink() ) ).toEqual( JSON.stringify( expectedFlexShrink ) );

		const defaultFlexGrow = 0;
		const expectedFlexGrow = { flexGrow: defaultFlexGrow };
		expect( JSON.stringify( flex.flexGrow() ) ).toEqual( JSON.stringify( expectedFlexGrow ) );

		const expectedFlex = { flexGrow: defaultFlexGrow, flexShrink: defaultFlexShrink, flexBasis: defaultFlexBasis };
		expect( JSON.stringify( flex.flex() ) ).toEqual( JSON.stringify( expectedFlex ) );

		const defaultFlexDirection = "row";
		const expectedFlexDirection = { flexDirection: defaultFlexDirection };
		expect( JSON.stringify( flex.flexDirection() ) ).toEqual( JSON.stringify( expectedFlexDirection ) );

		const defaultFlexWrap = "nowrap";
		const expectedFlexWrap = { flexWrap: defaultFlexWrap };
		expect( JSON.stringify( flex.flexWrap() ) ).toEqual( JSON.stringify( expectedFlexWrap ) );

		const expectedFlexFlow = { flexDirection: defaultFlexDirection, flexWrap: defaultFlexWrap };
		expect( JSON.stringify( flex.flexFlow() ) ).toEqual( JSON.stringify( expectedFlexFlow ) );

		const defaultJustifyContent = "flex-start";
		const expectedJustifyContent = { justifyContent: defaultJustifyContent };
		expect( JSON.stringify( flex.justifyContent() ) ).toEqual( JSON.stringify( expectedJustifyContent ) );
	}
);
