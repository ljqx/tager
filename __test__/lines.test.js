import { lines } from 'tager';

describe('lines', () => {
  it('should return every lines as array', () => {
    expect(lines`multi
line
string
`).toEqual(['multi', 'line', 'string', '']);
  });
});
