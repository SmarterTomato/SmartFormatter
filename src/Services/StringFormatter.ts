import vsCodeService from "./VSCodeService";
import stringUtils from "../Utils/StringUtils";
import InformationMessage from "../Models/InformationMessage";
import configurationService from "./ConfigurationService";
import {
  LINE_BREAK_REGEX,
  WHITE_SPACE_REGEX,
  NEW_LINE_REGEX,
} from "../Models/Constants";

export class StringFormatter {
  toUpperCase() {
    const selectedText = vsCodeService.getSelectedText();

    let output = selectedText.toUpperCase();
    vsCodeService.replaceSelectedText(output);
  }

  toLowerCase() {
    const selectedText = vsCodeService.getSelectedText();

    let output = selectedText.toLowerCase();
    vsCodeService.replaceSelectedText(output);
  }

  toTitleCase() {
    const selectedText = vsCodeService.getSelectedText();

    let output = stringUtils.toTitleCase(selectedText);
    vsCodeService.replaceSelectedText(output);
  }

  mergeLines() {
    let selectedText = vsCodeService.getSelectedText();

    let textMatch = selectedText.match(LINE_BREAK_REGEX);
    if (!textMatch) {
      throw new InformationMessage("Could not format string.");
    }
    let output = textMatch.map((x) =>
      x
        // Remove white space
        .replace(WHITE_SPACE_REGEX, "")
        // Remove new line
        .replace(NEW_LINE_REGEX, "")
    );

    const joinString = configurationService.get().stringFormatter.mergeLines
      .joinString;

    vsCodeService.replaceSelectedText(output.join(joinString));
  }
}

const stringFormatter = new StringFormatter();
export default stringFormatter;
