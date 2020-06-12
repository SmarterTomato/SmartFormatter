import LanguageId from "./LanguageId";

class EscapeSetting {
  constructor(
    public languageId: string,
    public from: RegExp,
    public to: string
  ) {}
}

const escapeSettings = [
  new EscapeSetting(LanguageId.Python, /[\\]/gm, "\\\\"),
  new EscapeSetting(LanguageId.Python, /["]/gm, `\\"`),
];
export default escapeSettings;
