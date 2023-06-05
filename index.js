const base64 = require('base64-url');
const uuidv4 = require('uuid').v4;

function uuidToB64(uuidStr) {
  const buf = Buffer.from(uuidStr.replace(/\-/g, ''), 'hex');
  return base64.encode(buf);
}

function b64ToUuid(b64Str) {
  const uuid = Buffer.from(base64.unescape(b64Str), 'base64').toString('hex');
  return `${uuid.substring(0, 8)}-${uuid.substring(8, 12)}-${uuid.substring(12, 16)}-${uuid.substring(16, 20)}-${uuid.substring(20)}`;
}

function generateId() {
  return uuidToB64(uuidv4());
}

module.exports = {
  b64ToUuid,
  uuidToB64,
  generateId
};