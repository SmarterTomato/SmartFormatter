# SmartFormatter README

SmartFormatter is all you need text formatter for VSCode. Similar functions to FreeFormatter.com

Use shortcut to bring up command palette: `Ctrl + Shift + P`
Search: `SmartFormatter`

## Features

Format string by select the string (without quote) and calling commands in `SmartFormatter`. There are three format options available: simple text format, variable format and escape string

Most used feature includes:

- Format simple text: To `lower case`, to `UPPER CASE`, to `Title Case` and to single line
- Format programming variables: To `PascalCase`, to `camelCase` and to `Custom variable` (define your rule)
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

### To Single Line

**To** single line connects multiple line text into a single line string. The `smartFormatter.stringFormatter.toSingleLine.joinString` can be configured in the settings. Default is " "

**From**: "this is an example of String.

you can format string by calling command"

**To**: "this is an example of String. you can format string by calling command"

### To Underscore_Variable

**From**: "This is an example of String"

**To**: "This_is_an_example_of_String"

### To PascalCase

**From**: "This is an example of String"

**To**: ThisIsAnExampleOfString

### To camelCase

**From**: "This is an example of String"

**To**: "thisIsAnExampleOfString"

### To Custom Variable

**To** custom variable format the string into variable with the characters you specified.

**From**: "This is an example of String"

**Enter**: "-"

**To**: "This-is-an-example-of-String"

You can capitalize each words by setting the configuration `smartFormatter.variableFormatter.toVariableCustom.capitalizeWords` to true

**From**: "This is an example of String"

**Enter**: "-"

**To**: "This-Is-An-Example-Of-String"

Also, you can set `smartFormatter.variableFormatter.toVariableCustom.joinString` so the variable will use that character instead of asking you every time.

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
- `smartFormatter.stringFormatter.toSingleLine.joinString`: The string to replace each line break. Default: " "
- `smartFormatter.variableFormatter.toVariableCustom.capitalizeWords`: If formatted variable should be capitalized in custom mode
- `smartFormatter.variableFormatter.toVariableCustom.joinString`: String added in between words in the variable. \nIf this is not set, will have a popup window ask for it

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

### 1.0.0

Initial release of SmartFormatter

#### New

##### String formatter

- To upper case
- To lower case
- To sentence case
- To title case
- To single line

##### Variable formatter

- To underscore variable
- To pascal case
- To camel case
- To custom variable

##### Escape formatter

- Escape with current document language
- Unescape with current document language
- Escape with selected document language
- Unescape with selected document language

### For more information

- [SmartFormatter GitHub](https://github.com/SmarterTomato/SmartFormatter/)
- [SmartFormatter Changelog](https://github.com/SmarterTomato/SmartFormatter/blob/master/CHANGELOG.md)
