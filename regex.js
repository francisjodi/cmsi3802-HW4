const regexes = {
  canadianPostalCode:
    /^[ABCEGHJ-NPRSTVXYZ]\d[A-CEGHJ-NPR-Z] \d[ABCEGHJ-NPRSTV-Z]\d$/,
  visa: /^4\d{12}(?:\d{3})?$/,
  masterCard: /^.*$/,
  adaFloat: /^.*$/,
  notThreeEndingInOO: /^.*$/,
  divisibleBy32: /^.*$/,
  sevenThroughThirtyOne: /^.*$/,
  mLComment: /^.*$/,
  notFileForFirstNoLookAround: /^.*$/,
  notFileForFirstWithLookAround: /^.*$/,
  cOctal: /^0[0-7]*$/,
  restrictedFloatingPoint: /^.*$/,
  palindrome2358: /^.*$/,
  noNegativeIntLits: /^.*$/,
  repeated: /^.*$/,
};

export function matches(name, string) {
  return regexes[name].test(string);
}
