"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const EXPECTED = 'Hello :D';
describe('sayHello - index', () => {
    it('should return a text with a smiling emoticon', () => {
        const result = (0, _1.sayHello)();
        expect(result).toBe(EXPECTED);
    });
});
//# sourceMappingURL=index.test.js.map