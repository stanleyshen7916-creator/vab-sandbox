import test from 'node:test';
import assert from 'node:assert/strict';
import { toSlug } from '../src/slug.js';
test('basic', () => assert.equal(toSlug('Hello World'), 'hello-world'));
