import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Test on component <AddCategory />', () => {

    const setCategories = jest.fn();
    const categories = [];
    const setLimit = jest.fn();
    
    let wrapper = shallow( <AddCategory 
                                setCategories={ setCategories } 
                                categories={ categories }
                                setLimit={ setLimit }
                            /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory 
            setCategories={ setCategories } 
            categories={ categories }
            setLimit={ setLimit }
        /> );
    })

    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('shoul change the input text', () => {

        const input = wrapper.find('input');
        const value = 'Hello world'

        input.simulate('change', {target: {value}})

    })

    test('should call setCategories and clean the input text', () => {

        const value = 'Hello';
        
        // simulate inputChange
        wrapper.find('input').simulate('change', {target: {value}});

        // simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories should have been called 
        expect( setCategories ).toHaveBeenCalled();
    
        // The value input should have '' as the value
        expected( wrapper.find('input').prop('value') ).toBe( '' );

    })

})