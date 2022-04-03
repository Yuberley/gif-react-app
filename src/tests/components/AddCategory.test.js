import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Test on component <AddCategory />', () => {

    const setCategories = () => {}
    const setLimit = () => {}
    const categories = [];
    
    const wrapper = shallow( <AddCategory 
                                setCategories={ setCategories } 
                                categories={ categories }
                                setLimit={ setLimit }
                            /> );

    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('shoul change the input text', () => {

        const input = wrapper.find('input');
        const value = 'Hello world'

        input.simulate('change', {target: {value}})

    })

})