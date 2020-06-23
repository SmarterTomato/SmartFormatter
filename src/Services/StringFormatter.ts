import vsCodeService from "./VSCodeService";
import stringUtils from "../Utils/StringUtils";
import InformationMessage from "../Models/InformationMessage";
import configurationService from "./ConfigurationService";

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

  toSentenceCase() {
    const selectedText = vsCodeService.getSelectedText();

    let output = stringUtils.toSentenceCase(selectedText);
    vsCodeService.replaceSelectedText(output);
  }

  toTitleCase() {
    const selectedText = vsCodeService.getSelectedText();

    let output = stringUtils.toTitleCase(selectedText);
    vsCodeService.replaceSelectedText(output);
  }

  toSingleLine() {
    let selectedText = vsCodeService.getSelectedText();

    let textMatch = selectedText.match(/.*[\r\n]+|.+$/g);
    if (!textMatch) {
      throw new InformationMessage("Could not format string.");
    }
    let output = textMatch.map((x) =>
      x
        // Remove white space
        .replace(/^\s+/g, "")
        // Remove new line
        .replace(/\r\n/g, "")
    );

    const joinString = configurationService.get().stringFormatter.toSingleLine
      .joinString;

    vsCodeService.replaceSelectedText(output.join(joinString));
  }
}

const stringFormatter = new StringFormatter();
export default stringFormatter;
