import vsCodeService from "./VSCodeService";
import InformationMessage from "../Models/InformationMessage";
import stringUtils from "../Utils/StringUtils";
import configurationService from "./ConfigurationService";
import { S_IFREG } from "constants";

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

  toUnderscoreVariable() {
    const selectedText = vsCodeService.getSelectedText();

    let output = selectedText.match(/[a-zA-Z0-9]+/g);
    if (!output) {
      throw new InformationMessage("Could not format string.");
    }

    vsCodeService.replaceSelectedText(output.join("_"));
  }

  toPascalCase() {
    let selectedText = vsCodeService.getSelectedText();
    selectedText = stringUtils.toTitleCase(selectedText);

    let output = selectedText.match(/[a-zA-Z0-9]+/g);
    if (!output) {
      throw new InformationMessage("Could not format string.");
    }

    vsCodeService.replaceSelectedText(output.join(""));
  }

  toCamelCase() {
    let selectedText = vsCodeService.getSelectedText();
    selectedText = stringUtils.toTitleCase(selectedText);

    let output = selectedText.match(/[a-zA-Z0-9]+/g);
    if (!output) {
      throw new InformationMessage("Could not format string.");
    }
    let finalString = output.join("");
    finalString = finalString.charAt(0).toLowerCase() + finalString.slice(1);

    vsCodeService.replaceSelectedText(finalString);
  }

  toCustomVariable() {
    let selectedText = vsCodeService.getSelectedText();

    const capitalize = configurationService.get().variableFormatter
      .toVariableCustom.capitalizeWords;
    if (capitalize) {
      selectedText = stringUtils.toTitleCase(selectedText);
    }

    let output = selectedText.match(/[a-zA-Z0-9]+/g);
    if (!output) {
      throw new InformationMessage("Could not format string.");
    }

    const config = configurationService.get();
    let joinString = config.variableFormatter.toVariableCustom.joinString;
    if (!joinString) {
      vsCodeService
        .showInputBox("String added in between words in the variable")
        .then((value) => {
          if (value === undefined || output === null) {
            return;
          }

          vsCodeService.replaceSelectedText(output.join(value));
        });
    }
  }
}

const variableFormatter = new VariableFormatter();
export default variableFormatter;
