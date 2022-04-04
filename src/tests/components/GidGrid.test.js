import { shallow } from "enzyme"
import React from 'react'
import { GifGrid } from "../../components/GifGrid"


describe('Test on <GifGrid />', () => {

    const category = 'test';
    const limit = '10';
    const wrapper = shallow( <GifGrid category={category} limit={limit}/> )

    test('should show the component successfully', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('should show items when the images are loaded', () => {

        

    })

} )