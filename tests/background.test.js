import bg from "../src/background";

test(
	"background utilities with default values (from w3c)",
	() =>
	{
		const defaultBackgroundColor = "transparent";
		const expectedBackgroundColor = { backgroundColor: defaultBackgroundColor };
		expect( JSON.stringify( bg.backgroundColor() ) ).toEqual( JSON.stringify( expectedBackgroundColor ) );

		const defaultBackgroundImage = "none";
		const expectedBackgroundImage = { backgroundImage: defaultBackgroundImage };
		expect( JSON.stringify( bg.backgroundImage() ) ).toEqual( JSON.stringify( expectedBackgroundImage ) );

		const defaultBackgroundPosition = "0% 0%";
		const expectedBackgroundPosition = { backgroundPosition: defaultBackgroundPosition };
		expect( JSON.stringify( bg.backgroundPosition() ) ).toEqual( JSON.stringify( expectedBackgroundPosition ) );

		const defaultBackgroundSize = "auto";
		const expectedBackgroundSize = { backgroundSize: defaultBackgroundSize };
		expect( JSON.stringify( bg.backgroundSize() ) ).toEqual( JSON.stringify( expectedBackgroundSize ) );

		const defaultBackgroundRepeat = "repeat";
		const expectedBackgroundRepeat = { backgroundRepeat: defaultBackgroundRepeat };
		expect( JSON.stringify( bg.backgroundRepeat() ) ).toEqual( JSON.stringify( expectedBackgroundRepeat ) );

		const defaultBackgroundOrigin = "padding-box";
		const expectedBackgroundOrigin = { backgroundOrigin: defaultBackgroundOrigin };
		expect( JSON.stringify( bg.backgroundOrigin() ) ).toEqual( JSON.stringify( expectedBackgroundOrigin ) );

		const defaultBackgroundClip = "border-box";
		const expectedBackgroundClip = { backgroundClip: defaultBackgroundClip };
		expect( JSON.stringify( bg.backgroundClip() ) ).toEqual( JSON.stringify( expectedBackgroundClip ) );

		const defaultBackgroundAttachment = "scroll";
		const expectedBackgroundAttachment = { backgroundAttachment: defaultBackgroundAttachment };
		expect( JSON.stringify( bg.backgroundAttachment() ) ).toEqual( JSON.stringify( expectedBackgroundAttachment ) );

		const defaultBackgroundBlendMode = "normal";
		const expectedBackgroundBlendMode = { backgroundBlendMode: defaultBackgroundBlendMode };
		expect( JSON.stringify( bg.backgroundBlendMode() ) ).toEqual( JSON.stringify( expectedBackgroundBlendMode ) );
	}
);
