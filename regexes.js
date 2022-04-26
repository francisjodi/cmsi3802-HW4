const regexes = {
  canadianPostalCode: /^[A-CEGHJ-NPR-Z]\d[A-CEGHJ-NPR-Z] \d[A-CEGHJ-NPR-Z]\d$/,
  visa: /^4\d{12}(?:\d{3})?$/,
  masterCard:
    /^5[1-5]\d{14}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))\d{12}$/,
  adaFloat: /^\d*?[\da-f]?[\da-f]*?[\da-f].*$/,
  notThreeEndingInOO: /.*(?<!(\d)|([oO]{2}))$/,
  divisibleBy32: /^0{1,4}$|^[01]*00000$/,
  sevenThroughThirtyOne: /[7-9]$|^([12]\d|3[00])$/,
  mLComment: /^\(\*((?!\*\)).)*\*\)$/,
  notFileForFirstNoLookAround: /^(?!(^file$)|(^for$)|(^first$)).*?$/,
  notFileForFirstWithLookAround: /^(?!(^file$)|(^for$)|(^first$)).*/,
  cOctal: /^0[0-7]*$/,
  restrictedFloatingPoint: /^[-+]?[0-9]+()\.?([0-9])*(([eE][-+]?)?[0-9]{1,3})?$/,
  palindrome2358: /^[a-z]{2}|[a-z]{3}|[a-z]{5}|[a-z]{8}.*$/,
  noNegativeIntLits: /(?<![-\d])(\d+)/,
  repeated: /^^([a-z]*)\1$.*$/,
};

export function matches(name, string) {
  return regexes[name].test(string);
}
