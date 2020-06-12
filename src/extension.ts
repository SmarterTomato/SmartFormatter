// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import formatterService from "./Services/FormatterService";
import InformationMessage from "./Models/InformationMessage";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("SmartFormatter is now active");

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  // * Format to string, escape only `\` and `"`
  const formatToStringDisposable = vscode.commands.registerCommand(
    "smartFormatter.formatToString",
    () => {
      console.log(`Format to string started`);

      try {
        formatterService.formatToString();
      } catch (msg) {
        if (msg instanceof InformationMessage) {
          vscode.window.showInformationMessage(msg.message);
        } else if (msg instanceof Error) {
          vscode.window.showErrorMessage(msg.message);
        }
      }
    }
  );
  context.subscriptions.push(formatToStringDisposable);

  // * Format from string, remove escape for `\` and `"`
  const formatFromStringDisposable = vscode.commands.registerCommand(
    "smartFormatter.formatFromString",
    () => {
      console.log(`Format from string started`);

      try {
        formatterService.formatFromString();
      } catch (msg) {
        if (msg instanceof InformationMessage) {
          vscode.window.showInformationMessage(msg.message);
        } else if (msg instanceof Error) {
          vscode.window.showErrorMessage(msg.message);
        }
      }
    }
  );
  context.subscriptions.push(formatFromStringDisposable);

  // * Escape all character by programming language
  const escapeDisposable = vscode.commands.registerCommand(
    "smartFormatter.escape",
    () => {
      console.log(`Escape started`);

      try {
      } catch (msg) {
        if (msg instanceof InformationMessage) {
          vscode.window.showInformationMessage(msg.message);
        } else if (msg instanceof Error) {
          vscode.window.showErrorMessage(msg.message);
        }
      }
    }
  );
  context.subscriptions.push(escapeDisposable);

  // * Unescape all character by programming language
  const unescapeDisposable = vscode.commands.registerCommand(
    "smartFormatter.unescape",
    () => {
      console.log(`Unescape started`);

      try {
      } catch (msg) {
        if (msg instanceof InformationMessage) {
          vscode.window.showInformationMessage(msg.message);
        } else if (msg instanceof Error) {
          vscode.window.showErrorMessage(msg.message);
        }
      }
    }
  );
  context.subscriptions.push(unescapeDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
