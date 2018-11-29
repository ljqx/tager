import { identity } from 'tager';

describe('identity', () => {
  it('should return same string as plain template string', () => {
    expect(identity`${1} template string`).toEqual('1 template string');
  });
});
