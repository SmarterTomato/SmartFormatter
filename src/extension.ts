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
  const toStringDisposable = vscode.commands.registerCommand(
    "smartFormatter.toString",
    () => {
      console.log(`Format to string started`);

      try {
        formatterService.formatToString();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toStringDisposable);

  // * Format from string, remove escape for `\` and `"`
  const fromStringDisposable = vscode.commands.registerCommand(
    "smartFormatter.fromString",
    () => {
      console.log(`Format from string started`);

      try {
        formatterService.formatFromString();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(fromStringDisposable);

  // * Format string to upper case
  const toUpperDisposable = vscode.commands.registerCommand(
    "smartFormatter.toUpper",
    () => {
      console.log(`To upper started`);

      try {
        formatterService.toUpper();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toUpperDisposable);

  // * Format string to lower case
  const toLowerDisposable = vscode.commands.registerCommand(
    "smartFormatter.toLower",
    () => {
      console.log(`To lower started`);

      try {
        formatterService.toLower();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toLowerDisposable);

  // * Capitalize first character of each sentence
  const capitalizeDisposable = vscode.commands.registerCommand(
    "smartFormatter.capitalize",
    () => {
      console.log(`Capitalize started`);

      try {
        formatterService.capitalize();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(capitalizeDisposable);

  // * Capitalize all first character for each word
  const capitalizeAllDisposable = vscode.commands.registerCommand(
    "smartFormatter.capitalizeAll",
    () => {
      console.log(`Capitalize all started`);

      try {
        formatterService.capitalizeAll();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(capitalizeAllDisposable);

  // * Format string to variable, connect word with underscore
  const toVariableUnderscore = vscode.commands.registerCommand(
    "smartFormatter.toVariableUnderscore",
    () => {
      console.log(`To variable underscore started`);

      try {
        formatterService.toVariableUnderscore();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toVariableUnderscore);

  // * Format string to variable, capitalize each word
  const toVariableCapitalizeDisposable = vscode.commands.registerCommand(
    "smartFormatter.toVariableCapitalize",
    () => {
      console.log(`To variable underscore started`);

      try {
        formatterService.toVariableCapitalize();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toVariableCapitalizeDisposable);

  // * Format string into single line
  const toSingleLineDisposable = vscode.commands.registerCommand(
    "smartFormatter.toSingleLine",
    () => {
      console.log(`To variable underscore started`);

      try {
        formatterService.toSingleLine();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toSingleLineDisposable);

  // * Escape all character by programming language
  const escapeDisposable = vscode.commands.registerCommand(
    "smartFormatter.escape",
    () => {
      console.log(`Escape started`);

      try {
      } catch (catchable) {
        processCatchable(catchable);
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
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(unescapeDisposable);
}

function processCatchable(catchable: any) {
  if (catchable instanceof InformationMessage) {
    vscode.window.showInformationMessage(catchable.message);
  } else if (catchable instanceof Error) {
    vscode.window.showErrorMessage(catchable.message);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
