/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';
// Test if the length of the history stack is correct
// Test the current state object is correct

describe('Stack Length and State Object', () => {
    test('Stack Length', () => {
        let prevLen = history.length;
        expect(pushToHistory("test", 2).length).toBe(prevLen + 1);
    });

    test('State Object', () => {
        expect(pushToHistory("settings", 2).state.page).toBe("settings");
    });

    test('State Object', () => {
        expect(pushToHistory("entry", 2).state.page).toBe("entry2");
    });

    test('State Object', () => {
        expect(pushToHistory("GARBAGE", 2).state.page).toBe(undefined);
    });
});