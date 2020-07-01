import { GET_EACH_CONNECTED_STRING_REGEX } from "../Models/Constants";

export class StringUtils {
  toSentenceCase(str: string): string {
    return str
      .replace(/^\s*\w/gm, function (txt) {
        return txt.toUpperCase();
      })
      .replace(/[.?!]+ [a-zA-Z0-9]+/g, function (txt) {
        return txt.substr(0, 2) + txt.charAt(2).toUpperCase() + txt.substr(3);
      });
  }

  toTitleCase(str: string): string {
    return str.replace(GET_EACH_CONNECTED_STRING_REGEX, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  }
}

let stringUtils = new StringUtils();
export default stringUtils;
