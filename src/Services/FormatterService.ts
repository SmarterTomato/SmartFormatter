import * as vscode from "vscode";
import LanguageId from "../Models/LanguageId";
import InformationMessage from "../Models/InformationMessage";

class FormatterService {
  formatToString() {
    const selectedText = this.getSelectedText();

    const backSlashRegex = /\\/gm;
    const quoteRegex = /"/gm;

    let output = selectedText.replace(backSlashRegex, "\\\\");
    output = output.replace(quoteRegex, `\\"`);

    this.replaceSelectedText(output);
  }

  formatFromString() {
    const selectedText = this.getSelectedText();

    const backSlashRegex = /\\\\/gm;
    const quoteRegex = /\\"/gm;

    let output = selectedText.replace(backSlashRegex, "\\");
    output = output.replace(quoteRegex, `\"`);

    this.replaceSelectedText(output);
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
