import * as vscode from "vscode";
import InformationMessage from "../Models/InformationMessage";
import { resolve } from "path";

export class VSCodeService {
  getSelectedText(): string {
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

  getLanguageId(): string {
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

  replaceSelectedText(text: string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      throw new InformationMessage("No active editor");
    }

    const selection = editor.selection;
    editor.edit((editBuilder) => editBuilder.replace(selection, text));
  }

  showInputBox(placeHolder: string): Thenable<string | undefined> {
    return vscode.window.showInputBox({ placeHolder: placeHolder });
  }

  showQuickPick(
    options: string[],
    placeHolder: string
  ): Thenable<string | undefined> {
    return vscode.window.showQuickPick(options, {
      placeHolder,
      canPickMany: false,
    });
  }
}

const vsCodeService = new VSCodeService();
export default vsCodeService;
