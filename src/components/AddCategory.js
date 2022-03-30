import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState('');

  const handleAddInputChange = ( e ) => {
    setinputValue(e.target.value);
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
      setCategories( cats => [...cats, inputValue]);
      setinputValue('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Search" 
          value={inputValue}
          onChange={ handleAddInputChange }
      />
    </form>
    
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export {
    AddCategory as default
}
