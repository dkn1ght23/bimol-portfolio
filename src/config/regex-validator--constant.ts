export const RegexValidators = {
  ENGLISH_CHARACTER: /^[a-zA-Z0-9 ]+$/,
  EMAIL: /^([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&-])[a-zA-Z\d#?!@$%^&-]{10}$/,
  UPPERCASE_LOWERCASE: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
  ONLY_ONE_NUMBER: /\d+/,
  GRATER_THEN_ZERO: /^(?=.*[1-9])\d*(?:\.\d+)?$/,
  ALLOW_POSITIVE_NUMBER: /^(0|[1-9]\d*)(\.\d+)?$/,
  ONLY_NUMERIC: /^([0-9]*)?$/,
  SPECIAL_CHARACTER: /[#?!@$%^&-]/,
};
