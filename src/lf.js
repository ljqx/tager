import identity from './identity';

export default function lf(...args) {
  return identity(...args).replace(/\r\n/g, '\n');
}