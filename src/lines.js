import identity from './identity';

export default function lines(...args) {
  return identity(...args).split(/\r?\n/);
}
