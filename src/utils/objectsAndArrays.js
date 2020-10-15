export const switchPairEntry = ( arrayPair, switchToIndexOne = false ) =>
{
	if ( arrayPair.length !== 2 )
		throw "switchStyles must receive an array with length 2.";
	return switchToIndexOne ? arrayPair[ 1 ] : arrayPair[ 0 ];
};

export const joinObjects = ( ...args ) =>
{
	let o = {};
	for ( let i in args )
	{
		o = { ...o, ...args[ i ] };
	}
	return o;
}

export const removeEntryFromMap = ( entry, map ) =>
{
	let o = {};
	for ( let i in map )
	{
		if ( i !== entry )
			o[ i ] = map[ i ];
	}
	return o;
};

export const groupByPropValue = ( arr, object ) => {};

export const isEmpty = ( value ) =>
{
	if ( Array.isArray( value ) ) return value.length === 0;
	for ( let p in value )
	{
		if ( value.hasOwnProperty( p ) ) return false;
	}
	return true;
}

export const areObjectsEquivalent = ( obj1, obj2 ) =>
{
	const props1 = Object.getOwnPropertyNames( obj1 );
	const props2 = Object.getOwnPropertyNames( obj2 );
	if ( props1.length !== props2.length )
		return false;

	for ( let prop of props1 )
	{
		if ( obj1[ prop ] !== obj2[ prop ] )
			return false;
	}
	return true;
};

export const haveSameValue = ( val1, val2 ) =>
{
	const type1 = typeof val1;
	const type2 = typeof val2;
	if ( type1 !== type2 )
		return false;
	switch ( type1 )
	{
		case "object":
			return areObjectsEquivalent( val1, val2 );
		case "string":
		case "number":
		case "boolean":
			return val1 === val2;
		default:
			throw "Missmatching value type " + type1;
	}
}

export const applyDiff = ( oldObj, diffObj ) =>
{
	const props = Object.getOwnPropertyNames( oldObj );

	let newObj = diffObj;
	for ( let prop of props )
	{
		if ( ! newObj.hasOwnProperty( prop ) )
		{
			newObj[ prop ] = oldObj[ prop ];
		}
	}
	return newObj;
};

