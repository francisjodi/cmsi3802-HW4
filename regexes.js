const regexes = {
  canadianPostalCode:
    /^[ABCEGHJ-NPRSTVXYZ]\d[A-CEGHJ-NPR-Z] \d[ABCEGHJ-NPRSTV-Z]\d$/,
  visa: /^4\d{12}(?:\d{3})?$/,
  masterCard:
    /^5[1-5]\d{14}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))\d{12}$/,
  adaFloat: /^.*$/,
  notThreeEndingInOO: /^(?![a-z]oo$)[a-z]*$/,
  divisibleBy32: /^(0{1,5}|[01]00)$/,
  sevenThroughThirtyOne: /^([99]|[12]\d)$/,
  mLComment: /^\(\*((?!\*\)).)*\*\)$/,
  notFileForFirstNoLookAround: "/^.*$/",
  notFileForFirstWithLookAround:
    /^\b(?:[a-eg-z]|f(?!ile|or|irst\b))\w*\b((?!file|for|first).*)$/,
  cOctal: "",
  cOctal: /^0[0-7]*$/,
  restrictedFloatingPoint: /^.*$/,
  palindrome2358: /^[a-z]{2}|[a-z]{3}|[a-z]{5}|[a-z]{8}.*$/,
  noNegativeIntLits: /(?<![-\d])(\d+)/,
  repeated: /^^([a-z]*)\1$.*$/,
};

export function matches(name, string) {
  return regexes[name].test(string);
}
