import sayHello from '../utils/helloworld';

describe('hello function', function() {
    it('should return "hello"', function() {
        const result = sayHello();

        expect(result).toEqual('hello');
    });
});