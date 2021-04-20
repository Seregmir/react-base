/**
 * @description 	Helper function for columns
 *
 * @author          Steven van Bennekom <https://stevenvanbennekom.nl>
 */
class Helper_Columns {
	static classes( amountPerRow = 4, autoResponsive = true ) {
		const validColumnValues = [ 1, 2, 3, 4, 6, 12 ];
		const isValidAmount = ( amountPerRow <= 12 && validColumnValues.some( number => number === amountPerRow ) );

		if( !isValidAmount ) return Helper_Columns.calculateClass(1);
		if( !autoResponsive ) return Helper_Columns.calculateClass(amountPerRow);

		return [
			Helper_Columns.calculateClass(1),
			Helper_Columns.calculateClass(2, 'md'),
			Helper_Columns.calculateClass(amountPerRow, 'xl'),
		].join( ' ' );
	};

	static calculateClass( size, prefix = null ) {
		let classname = 'col-';
		if( prefix !== null ) classname += prefix + '-';

		return classname + ( 12 / size);
	}
}

export default Helper_Columns;