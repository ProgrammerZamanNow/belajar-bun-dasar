import {describe, it, expect} from 'bun:test';
import {User} from "user/user.ts";

describe('User Package', () => {
    it('should accessed from main package', async () => {
        const user = new User("Eko");
        expect(user.name).toBe("Eko");
    });
});
