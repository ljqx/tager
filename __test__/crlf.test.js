import { crlf } from 'tager';

describe('crlf', () => {
  it('should convert line breaks to \\r\\n', () => {
    expect(crlf`
`).toEqual('\r\n');
    expect(crlf`multi
line
string
`).toEqual('multi\r\nline\r\nstring\r\n');
  });
});
