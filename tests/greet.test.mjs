import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/greet.js';
test('greets by name', () => assert.equal(greet('Ann'), 'Hello, Ann!'));
test('blank falls back', () => { assert.equal(greet(''), 'Hello, stranger!'); assert.equal(greet('  '), 'Hello, stranger!'); });
