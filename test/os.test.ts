import {describe, it, expect} from 'bun:test';
import * as os from "node:os";

describe('NodeJS API', () => {
    it('should support os', async () => {
        const arch = os.arch();
        expect(arch).toBe('arm64');

        const type = os.type();
        expect(type).toBe('Darwin');
    });
});
