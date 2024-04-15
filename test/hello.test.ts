import {describe, it, expect} from 'bun:test';
import {sayHello} from "../src/hello.ts";

describe('Bun Test Runner', () => {
    it('should support unit test', async () => {
        const response = sayHello('Eko');
        expect(response).toBe('Hello Eko');
    });

    it('should support unit test with budi', async () => {
        const response = sayHello('Budi');
        expect(response).toBe('Hello Budi');
    });

    it('should support unit test with joko', async () => {
        const response = sayHello('Joko');
        expect(response).toBe('Hello Joko');
    });
});
