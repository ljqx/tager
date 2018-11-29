import { regexp } from 'tager';

describe('regexp', () => {
  it('should convert the template string to RegExp with the raw string as source', () => {
    expect(regexp`\w+${1 + 1}*\node_modules/${'.bin'}`)
      .toHaveProperty('source', String.raw`\w+2*\node_modules\/.bin`);
  });
});
