import fs from 'node:fs';
import path from 'node:path';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const SOURCE_SCHEMA_PATH = 'schemas/idea-ledger/source-v1.schema.json';
const FOCUS_GROUP_SCHEMA_PATH = 'schemas/idea-ledger/focus-groups-v1.schema.json';
const GENERATED_SCHEMA_PATH = 'schemas/idea-ledger/generated-artifacts.schema.json';

function createAjv() {
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  return ajv;
}

function readSchema(repoRoot, relativePath) {
  return JSON.parse(fs.readFileSync(path.resolve(repoRoot, relativePath), 'utf8'));
}

function formatErrors(prefix, errors = []) {
  return errors.map((error) => `${prefix}${error.instancePath || '/'} ${error.message}`);
}

export function validateSourceSchema(repoRoot, source) {
  const ajv = createAjv();
  const validate = ajv.compile(readSchema(repoRoot, SOURCE_SCHEMA_PATH));
  return validate(source) ? [] : formatErrors('source', validate.errors);
}

export function validateFocusGroupsSchema(repoRoot, focusGroups) {
  const ajv = createAjv();
  const validate = ajv.compile(readSchema(repoRoot, FOCUS_GROUP_SCHEMA_PATH));
  return validate(focusGroups) ? [] : formatErrors('focus groups', validate.errors);
}

export function validateGeneratedArtifacts(repoRoot, artifacts) {
  const schema = readSchema(repoRoot, GENERATED_SCHEMA_PATH);
  const ajv = createAjv();
  ajv.addSchema(schema);
  const schemaId = schema.$id;
  const definitions = {
    'manifest.json': 'manifest',
    'catalog.json': 'catalog',
    'focus-groups.json': 'focusGroups',
    'research-documents.json': 'researchDocuments',
    'research-metadata.json': 'researchMetadata',
    'search-documents.json': 'searchDocuments',
    'routes.json': 'routes',
    'quality-report.json': 'qualityReport',
  };
  const errors = [];

  for (const [filename, definition] of Object.entries(definitions)) {
    const validate = ajv.compile({ $ref: `${schemaId}#/$defs/${definition}` });
    if (!validate(artifacts[filename])) {
      errors.push(...formatErrors(`generated ${filename}`, validate.errors));
    }
  }
  return errors;
}

export class ValidationError extends Error {
  constructor(errors, warnings = []) {
    super(`Idea Ledger validation failed with ${errors.length} error(s)`);
    this.name = 'ValidationError';
    this.errors = errors;
    this.warnings = warnings;
  }
}
