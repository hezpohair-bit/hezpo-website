import test from 'node:test';
import assert from 'node:assert/strict';
import { detectWorkbookExtension, safeSlug, sha256, validateWorkbookBuffer } from '../src/helpers.mjs';

test('safeSlug creates stable file-safe names', () => {
  assert.equal(safeSlug(' Merchant SKU / Update '), 'merchant-sku-update');
});

test('detectWorkbookExtension recognizes xlsx signature', () => {
  const buffer = Buffer.from([0x50, 0x4b, 0x03, 0x04, ...new Array(300).fill(0)]);
  assert.equal(detectWorkbookExtension(buffer, 'template'), '.xlsx');
  assert.equal(validateWorkbookBuffer(buffer, '.xlsx').ok, true);
});

test('validateWorkbookBuffer rejects tiny files', () => {
  const result = validateWorkbookBuffer(Buffer.from('bad'), '.xlsx');
  assert.equal(result.ok, false);
  assert.ok(result.errors.includes('FILE_TOO_SMALL'));
});

test('sha256 is deterministic', () => {
  assert.equal(
    sha256(Buffer.from('hezpo')),
    'e0f21ad24baf7804040fb40a45413618c656b9e3e9baaab8c6a1248462b0f474'
  );
});
