// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import InformationMessage from "./Models/InformationMessage";
import variableFormatter from "./Services/VariableFormatter";
import stringFormatter from "./Services/StringFormatter";
import escapeFormatter from "./Services/EscapeFormatter";
import {
  languageEscapeRules,
  languageUnescapeRules,
} from "./Models/EscapeRules";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("SmartFormatter is now active");

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  // #region String formatter

  // * Format string to upper case
  const toUpperCaseDisposable = vscode.commands.registerCommand(
    "stringFormatter.toUpperCase",
    () => {
      console.log(`String formatter: To upper case started`);

      try {
        stringFormatter.toUpperCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toUpperCaseDisposable);

  // * Format string to lower case
  const toLowerCaseDisposable = vscode.commands.registerCommand(
    "stringFormatter.toLowerCase",
    () => {
      console.log(`String formatter: To lower case started`);

      try {
        stringFormatter.toLowerCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toLowerCaseDisposable);

  // * Capitalize all first character for each word
  const toTitleCaseDisposable = vscode.commands.registerCommand(
    "stringFormatter.toTitleCase",
    () => {
      console.log(`String formatter: To title case started`);

      try {
        stringFormatter.toTitleCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toTitleCaseDisposable);

  // * Format string into single line
  const mergeLinesLineDisposable = vscode.commands.registerCommand(
    "stringFormatter.mergeLines",
    () => {
      console.log(`String formatter: Merge lines started`);

      try {
        stringFormatter.mergeLines();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(mergeLinesLineDisposable);

  // #endregion

  // #region Variable formatter

  // * Format string to variable, connect word with underscore
  const toSnakeCaseDisposable = vscode.commands.registerCommand(
    "variableFormatter.toSnakeCase",
    () => {
      console.log(`Variable formatter: To snake case started`);

      try {
        variableFormatter.toSnakeCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );

  context.subscriptions.push(toSnakeCaseDisposable);
  // * Format string to variable, capitalize each character and put underscore between them
  const toConstantCaseDisposable = vscode.commands.registerCommand(
    "variableFormatter.toConstantCase",
    () => {
      console.log(`Variable formatter: To constant case started`);

      try {
        variableFormatter.toConstantCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toConstantCaseDisposable);

  // * Format string to variable, capitalize each word
  const toPascalCaseDisposable = vscode.commands.registerCommand(
    "variableFormatter.toPascalCase",
    () => {
      console.log(`Variable formatter: To pascal case started`);

      try {
        variableFormatter.toPascalCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toPascalCaseDisposable);

  // * Format string to variable, capitalize each word but not the first
  const toCamelCaseDisposable = vscode.commands.registerCommand(
    "variableFormatter.toCamelCase",
    () => {
      console.log(`Variable formatter: To camel case started`);

      try {
        variableFormatter.toCamelCase();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toCamelCaseDisposable);

  // * Return variable to sentence
  const toSentenceDisposable = vscode.commands.registerCommand(
    "variableFormatter.toSentence",
    () => {
      console.log(`Variable formatter: To Sentence started`);

      try {
        variableFormatter.toSentence();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toSentenceDisposable);

  // * Format string to custom variable, get settings from configuration
  const toCustomVariableDisposable = vscode.commands.registerCommand(
    "variableFormatter.toCustomVariable",
    () => {
      console.log(`Variable formatter: To custom variable started`);

      try {
        variableFormatter.toCustomVariable();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toCustomVariableDisposable);

  // #endregion

  // #region Escape formatter

  // * Escape all characters by current file language id
  const escapeDisposable = vscode.commands.registerCommand(
    "escapeFormatter.escape",
    () => {
      console.log(`Escape formatter: Escape`);

      try {
        escapeFormatter.escapeWithCurrentLanguage(languageEscapeRules);
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(escapeDisposable);

  // * Unescape all characters by current file language id
  const unescapeDisposable = vscode.commands.registerCommand(
    "escapeFormatter.unescape",
    () => {
      console.log(`Escape formatter: Unescape`);

      try {
        escapeFormatter.escapeWithCurrentLanguage(languageUnescapeRules);
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(unescapeDisposable);

  // * Escape all characters using the selected language id
  const escapeWithLanguageDisposable = vscode.commands.registerCommand(
    "escapeFormatter.escapeWithLanguage",
    () => {
      console.log(`Escape formatter: Escape with language`);

      try {
        escapeFormatter.escapeWithLanguage(languageEscapeRules);
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(escapeWithLanguageDisposable);

  // * Unescape all characters using the selected language id
  const unescapeWithLanguageDisposable = vscode.commands.registerCommand(
    "escapeFormatter.unescapeWithLanguage",
    () => {
      console.log(`Escape formatter: Unescape with language`);

      try {
        escapeFormatter.escapeWithLanguage(languageUnescapeRules);
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(unescapeWithLanguageDisposable);

  // * Format to string, escape only `\` and `"`
  const toStringDisposable = vscode.commands.registerCommand(
    "escapeFormatter.escapeStringValue",
    () => {
      console.log(`Escape formatter: Escape string value started`);

      try {
        variableFormatter.escapeStringValue();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(toStringDisposable);

  // * Format from string, remove escape for `\` and `"`
  const fromStringDisposable = vscode.commands.registerCommand(
    "escapeFormatter.unescapeStringValue",
    () => {
      console.log(`Escape formatter: Unescape string value started`);

      try {
        variableFormatter.unescapeStringValue();
      } catch (catchable) {
        processCatchable(catchable);
      }
    }
  );
  context.subscriptions.push(fromStringDisposable);

  // #endregion
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
// "menus": {
//   "editor/context": [{
//       "command": "toString",
//       "group": "1_smartFormatter@0",
//       "when": "config.editorContextMenu"
//     },
//     {
//       "command": "fromString",
//       "group": "1_smartFormatter@1",
//       "when": "config.editorContextMenu"
//     }
//   ]
// },
