import { getGifs } from "../../helpers/getGifs";

describe('Tests on getGifs fetch function', () => {
  
    test('Response must have 10 elements', async() => {
       const response = await getGifs('Zelda');
       expect(response.length).toBe(10);
    });

    test('Tests on getGifs fetch function with no category', async() => {
        const response = await getGifs('');
        expect(response.length).toBe(0);
     });
});
