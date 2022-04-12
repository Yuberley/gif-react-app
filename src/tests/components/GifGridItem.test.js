import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('Tests in <GifGridItem />', () => {

    const title = 'Title';
    const url = 'https://localhost:8080'
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('Should show the <GifGridItem /> successfully', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })


    test('Should have a paragraph with title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('Should have a img and and url equal', () => {

        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

})