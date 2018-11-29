import { lf } from 'tager';

describe('lf', () => {
  it('should convert line breaks to \\n', () => {
    expect(lf`multi
line
string
`).toEqual('multi\nline\nstring\n');
  });
});
