import { sayHello } from '.';

const EXPECTED = 'Hello :D';

describe('sayHello - index', () => {
    it('should return a text with a smiling emoticon', () => {
        const result = sayHello();
        expect(result).toBe(EXPECTED);
    });
});
