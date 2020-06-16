import * as vscode from "vscode";
import InformationMessage from "../Models/InformationMessage";
import String from "../Utils/StringUtils";
import stringUtils from "../Utils/StringUtils";

class FormatterService {
  formatToString() {
    const selectedText = this.getSelectedText();

    const backSlashRegex = /\\/g;
    const quoteRegex = /"/g;

    let output = selectedText.replace(backSlashRegex, "\\\\");
    output = output.replace(quoteRegex, `\\"`);

    this.replaceSelectedText(output);
  }

  formatFromString() {
    const selectedText = this.getSelectedText();

    const backSlashRegex = /\\\\/g;
    const quoteRegex = /\\"/g;

    let output = selectedText.replace(backSlashRegex, "\\");
    output = output.replace(quoteRegex, `\"`);

    this.replaceSelectedText(output);
  }

  toUpper() {
    const selectedText = this.getSelectedText();

    let output = selectedText.toUpperCase();
    this.replaceSelectedText(output);
  }

  toLower() {
    const selectedText = this.getSelectedText();

    let output = selectedText.toLowerCase();
    this.replaceSelectedText(output);
  }

  capitalize() {
    const selectedText = this.getSelectedText();

    let output = stringUtils.capitalize(selectedText);
    this.replaceSelectedText(output);
  }

  capitalizeAll() {
    const selectedText = this.getSelectedText();

    let output = stringUtils.capitalizeAll(selectedText);
    this.replaceSelectedText(output);
  }

  toVariableUnderscore() {
    const selectedText = this.getSelectedText();

    let output = selectedText.match(/[a-zA-Z0-9]+/g);
    if (!output) {
      throw new InformationMessage("Could not format string.");
    }

    this.replaceSelectedText(output.join("_"));
  }

  toVariableCapitalize() {
    let selectedText = this.getSelectedText();
    selectedText = stringUtils.capitalizeAll(selectedText);

    let output = selectedText.match(/[a-zA-Z0-9]+/g);
    if (!output) {
      throw new InformationMessage("Could not format string.");
    }

    this.replaceSelectedText(output.join(""));
  }

  private getSelectedText(): string {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      throw new InformationMessage("No active editor");
    }

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);

    if (!selectedText) {
      throw new InformationMessage("No text selected.");
    }

    return selectedText;
  }

  toSingleLine() {
    let selectedText = this.getSelectedText();

    let textMatch = selectedText.match(/.*[\r\n]+/g);
    if (!textMatch) {
      throw new InformationMessage("Could not format string.");
    }
    let output = textMatch.map((x) =>
      x
        // Remove new line
        .replace(/\r\n/g, "")
        // Remove white space
        .replace(/^\s+/g, "")
    );
    this.replaceSelectedText(output.join(""));
  }

  private getLanguageId(): string {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      throw new InformationMessage("No active editor");
    }

    const languageId = editor.document.languageId;
    if (!languageId) {
      throw new InformationMessage(
        "No programming language detected. Language id: " + languageId + "."
      );
    }

    return languageId;
  }

  private replaceSelectedText(text: string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      throw new InformationMessage("No active editor");
    }

    const selection = editor.selection;
    editor.edit((editBuilder) => editBuilder.replace(selection, text));
  }
}

const formatterService = new FormatterService();
export default formatterService;
