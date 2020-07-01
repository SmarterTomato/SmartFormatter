import vsCodeService from "./VSCodeService";
import InformationMessage from "../Models/InformationMessage";
import stringUtils from "../Utils/StringUtils";
import configurationService from "./ConfigurationService";
import { GET_EACH_WORD_REGEX } from "../Models/Constants";

export class VariableFormatter {
  escapeStringValue() {
    const selectedText = vsCodeService.getSelectedText();

    const backSlashRegex = /\\/g;
    const quoteRegex = /"/g;

    let output = selectedText.replace(backSlashRegex, "\\\\");
    output = output.replace(quoteRegex, `\\"`);

    vsCodeService.replaceSelectedText(output);
  }

  unescapeStringValue() {
    const selectedText = vsCodeService.getSelectedText();

    const backSlashRegex = /\\\\/g;
    const quoteRegex = /\\"/g;

    let output = selectedText.replace(backSlashRegex, "\\");
    output = output.replace(quoteRegex, `\"`);

    vsCodeService.replaceSelectedText(output);
  }

  toSnakeCase() {
    const selectedText = vsCodeService.getSelectedText();

    let array = selectedText.match(GET_EACH_WORD_REGEX);
    if (!array) {
      throw new InformationMessage("Could not format string.");
    }

    array = array.map((x) => x.toLowerCase());

    vsCodeService.replaceSelectedText(array.join("_"));
  }

  toConstantCase() {
    const selectedText = vsCodeService.getSelectedText();

    let array = selectedText.match(GET_EACH_WORD_REGEX);
    if (!array) {
      throw new InformationMessage("Could not format string.");
    }

    array = array.map((x) => x.toUpperCase());

    vsCodeService.replaceSelectedText(array.join("_"));
  }

  toPascalCase() {
    let selectedText = vsCodeService.getSelectedText();
    selectedText = stringUtils.toTitleCase(selectedText);

    let array = selectedText.match(GET_EACH_WORD_REGEX);
    if (!array) {
      throw new InformationMessage("Could not format string.");
    }

    array = array.map(
      (x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
    );

    vsCodeService.replaceSelectedText(array.join(""));
  }

  toCamelCase() {
    let selectedText = vsCodeService.getSelectedText();
    selectedText = stringUtils.toTitleCase(selectedText);

    let array = selectedText.match(GET_EACH_WORD_REGEX);
    if (!array) {
      throw new InformationMessage("Could not format string.");
    }

    array = array.map(
      (x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
    );

    let finalString = array.join("");
    finalString = finalString.charAt(0).toLowerCase() + finalString.slice(1);

    vsCodeService.replaceSelectedText(finalString);
  }

  toSentence() {
    let selectedText = vsCodeService.getSelectedText();

    let array = selectedText.match(GET_EACH_WORD_REGEX);
    if (!array) {
      throw new InformationMessage("Could not format string.");
    }

    array = array.map((x) => x.toLowerCase());

    vsCodeService.replaceSelectedText(array.join(" "));
  }

  toCustomVariable() {
    let selectedText = vsCodeService.getSelectedText();

    const capitalize = configurationService.get().variableFormatter
      .toCustomVariable.upperFirst;
    if (capitalize) {
      selectedText = stringUtils.toTitleCase(selectedText);
    }

    let array = selectedText.match(GET_EACH_WORD_REGEX);
    if (!array) {
      throw new InformationMessage("Could not format string.");
    }

    const config = configurationService.get();
    let joinString = config.variableFormatter.toCustomVariable.joinString;
    if (!joinString) {
      vsCodeService
        .showInputBox("String added in between words in the variable")
        .then((value) => {
          if (value === undefined || array === null) {
            return;
          }

          vsCodeService.replaceSelectedText(array.join(value));
        });
    }
  }
}

const variableFormatter = new VariableFormatter();
export default variableFormatter;
