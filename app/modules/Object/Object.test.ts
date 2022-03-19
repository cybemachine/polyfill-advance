import ".";

describe('check Object.*', () => {
    ['isArguments', 'keys', 'assign', 'is', 'setPrototypeOf', 'getPrototypeOf', 'getOwnPropertyNames', 'create', 'defineProperty', 'defineProperties', 'freeze'].forEach(e => {
        it(`Defines ${e}()`, () => {
            expect(Object[e]).toBeDefined();
        })
    })
})