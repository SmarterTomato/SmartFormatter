# SmartFormatter README

SmartFormatter is all you need text formatter for VSCode.

Use shortcut to bring up command palette: `Ctrl + Shift + P`
Search: `SmartFormatter`

## What's new

- To "CONSTANT_CASE"

## Features

Format string by select the string (without quote) and calling commands in `SmartFormatter`. There are three format options available: simple text format, variable format and escape string

Most used feature includes:

- Format simple text: `lower case`, `UPPER CASE`, `Title Case` and merge line
- Format programming variables: To `PascalCase`, `snake_case`, `camelCase`, `CONSTANT_CASE` and `Custom variable` (define your rule)
- Escape string: auto detect current document type or format to a specific language

### To UPPER CASE

**From**: "This is an example of String"

**To**: "THIS IS AN EXAMPLE OF STRING"

### To lower case

**From**: "This is an example of String"

**To**: "this is an example of string"

### To Sentence case

**From**: "this is an example of String. you can format string by calling command"

**To**: "This is an example of String. You can format string by calling command"

### Merge lines

Merge multiple line text into a single line string. The `smartFormatter.stringFormatter.mergeLines.joinString` can be configured in the settings. Default is " "

**From**: "this is an example of String.

you can format string by calling command"

**To**: "this is an example of String. you can format string by calling command"

### To snake_case

**From**: "SmartFormatter"

**To**: "smart_formatter"

### To CONSTANT_CASE

**From**: "SmartFormatter"

**To**: "SMART_FORMATTER"

### To PascalCase

**From**: "smart_formatter"

**To**: "SmartFormatter"

### To camelCase

**From**: "smart_formatter"

**To**: "smartFormatter"

### To Custom Variable

**To** custom variable format the string into variable with the characters you specified.

**From**: "SmartFormatter"

**Enter**: "-"

**To**: "Smart-Formatter"

You can capitalize each words by setting the configuration `smartFormatter.variableFormatter.toVariableCustom.isFirstCharUpper` to true

**From**: "smart_formatter"

**Enter**: "-"

**To**: "Smart-Formatter"

Also, you can set `smartFormatter.variableFormatter.toCustomVariable.joinString` so the variable will use that character instead of asking you every time.

### Escape

Escape selected text and auto detect programming language id in this document. Make sure you **DO NOT** select the quote around the string.

If any error or language is not supported, please try "Escape With Language"

**From**: "\ This is an

"C#" escape"

**To**: "\\ This is an\n\n\"C#\" escape"

### Unescape

**From**: "\\ This is an\n\n\"C#\" escape"

**To**: "\ This is an

"C#" escape"

### Escape/Unescape With Language

Escape with language will allows you select a language from a range of available ones.

If you can't find the language you are looking for, maybe try one with similar identity. E.g. Escape C is the same as C#, C++, Java.

If you still can not format text properly, please send me an email.

### Escape String Value / Unescape String Value

Escape string value will format string so it can be assigned to a string variable.

Only escapes the quote (") and backslash (\). Common use case is the file path in Windows. E.g.

**From**: "C:\Users\SmarterTomato\Downloads\Test.doc"

**To**: "C:\\Users\\SmarterTomato\\Downloads\\Test.doc"

## Extension Settings

- `smartFormatter.stringFormatter.enable`: Enable/disable string formatter commands
- `smartFormatter.variableFormatter.enable`: Enable/disable variable formatter commands
- `smartFormatter.escapeFormatter.enable`: Enable/disable escape formatter commands
- `smartFormatter.stringFormatter.mergeLines.joinString`: The string to replace each line break. Default: " "
- `smartFormatter.variableFormatter.toCustomVariable.capitalizeWords`: If formatted variable should be capitalized in custom mode
- `smartFormatter.variableFormatter.toCustomVariable.joinString`: String added in between words in the variable. \nIf this is not set, will have a popup window ask for it

## Known Issues

For some escape/unescape may contains error, please send me a email or create a issue in the GitHub (specified the language id). I will fix ASAP.

## Contacts

For any issues or suggestions, contact me via following method:

Email: smartertomato@gmail.com

GitHub: [SmartFormatter GitHub](https://github.com/SmarterTomato/SmartFormatter/)

## Future Plans

- Encode/decode url
- Context menu options

## Release Notes

### v1.1.0 - 2020-07-01

#### New

- To "CONSTANT_CASE"
- Format variable now detect word that connects to each other. Like `SmartFormatter` will break into Smart and Formatter

#### Update

- Rename `To "Underscore_Variable"` to `To "snake_case"`
- Rename `To Single Line` to `Merge Lines`

### For more information

- [SmartFormatter GitHub](https://github.com/SmarterTomato/SmartFormatter/)
- [SmartFormatter Changelog](https://github.com/SmarterTomato/SmartFormatter/blob/master/CHANGELOG.md)
