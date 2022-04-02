import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, categories, setLimit }) => {

	const [inputValue, setInputValue] = useState('');
	const [limitInput, setLimitInput] = useState('');

	const handleAddInputChange = ( e ) => {
		setInputValue( e.target.value );
	};

	const handleAddILimitChange = ( e ) => {
		setLimitInput( e.target.value );
	};

	const handleSubmit = ( e ) => {
		e.preventDefault();

		if( categories.some( category => category === inputValue ) ){
			const newCategories = categories.filter( category => category !== inputValue);
			setCategories( newCategories );
		}

		if ( inputValue.trim().length > 0 ) {
			setCategories( (cats) => [inputValue, ...cats]);
			setLimit( limitInput );
			setInputValue('');
		}
	};

	return (
		<form onSubmit={ handleSubmit }>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-8 col-sm-12">			
						<input
							type="text"
							placeholder=" Search"
							value={ inputValue }
							onChange={ handleAddInputChange }
						/>
					</div>
					<div className="col-lg-2 col-sm-12"></div>
					<div className="col-lg-1 col-sm-6">Quantity</div>
					<div className="col-lg-1 col-sm-6">
						<select name="select" className="form-select" aria-label="Default select example" onChange={ handleAddILimitChange }>
							<option value="10" default>10</option>
							<option value="20">20</option>
							<option value="50">50</option>
							<option value="100">100</option>
						</select>
					</div>
				</div>
			</div>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
