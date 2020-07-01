import { GET_EACH_CONNECTED_STRING_REGEX } from "../Models/Constants";

export class StringUtils {
  toTitleCase(str: string): string {
    return str.replace(GET_EACH_CONNECTED_STRING_REGEX, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  }
}

let stringUtils = new StringUtils();
export default stringUtils;
