import assert from 'node:assert/strict';
import { test } from 'node:test';
import fixture from '../fixtures/sample.json' with { type: 'json' };
import { summarizeSignal } from '../src/index.mjs';

test('ServiceNow signal fixture summarizes deterministically', () => {
  const summary = summarizeSignal(fixture);
  assert.equal(summary.vendor, 'ServiceNow');
  assert.equal(summary.domain, 'Workflow / ITSM');
  assert.equal(summary.averageRisk, 68);
  assert.equal(summary.averageEvidence, 7);
  assert.equal(summary.priorityLane, 'Spend and exposure posture');
});
