import identity from './identity';

export default function crlf(...args) {
  return identity(...args).replace(/(?!\r)\n/g, '\r\n');
}