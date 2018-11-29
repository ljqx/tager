export default function regexp(...args) {
  return new RegExp(String.raw(...args));
}
