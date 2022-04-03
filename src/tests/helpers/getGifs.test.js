import { getGifs } from "../../helpers/getGifs";

describe('Test on getGifs and fetch', () => {

    test('should return 10 elements', async () => {

        const gifs = await getGifs('One Punch', 10);
        expect(gifs.length).toBe( 10 );

    })

})