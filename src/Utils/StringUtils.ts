import { TLSSocket } from "tls";

export class StringUtils {
  capitalize(str: string): string {
    return str.replace(/[a-zA-Z0-9]+[.?!]+/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  capitalizeAll(str: string): string {
    return str.replace(/[a-zA-Z0-9]+/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

let stringUtils = new StringUtils();
export default stringUtils;
