import LanguageId from "./LanguageId";

export class EscapeRule {
  constructor(
    public search: RegExp,
    public replaceWith: string,
    public order: number
  ) {}
}

export class LanguageEscapeRule {
  constructor(
    public languageIds: LanguageId[],
    public settings: EscapeRule[]
  ) {}
}

const languageEscapeRules: LanguageEscapeRule[] = [
  new LanguageEscapeRule(
    [
      LanguageId.C,
      LanguageId.CPP,
      LanguageId.CSharp,
      LanguageId.Java,
      LanguageId.JSON,
      LanguageId.JSONWithComments,
      LanguageId.ObjectiveC,
      LanguageId.ObjectiveCPP,
      LanguageId.Ruby,
      LanguageId.Swift,
      LanguageId.VisualBasic,
    ],
    [
      new EscapeRule(/\\/gm, "\\\\", 1),
      new EscapeRule(/"/gm, '\\"', 2),
      new EscapeRule(/[\b]/gm, "\\b", 5),
      new EscapeRule(/\n/gm, "\\n", 5),
      new EscapeRule(/\t/gm, "\\t", 5),
      new EscapeRule(/\r/gm, "\\r", 5),
      new EscapeRule(/\f/gm, "\\f", 5),
      new EscapeRule(/\v/gm, "\\v", 5),
    ]
  ),
  new LanguageEscapeRule(
    [
      LanguageId.JavaScript,
      LanguageId.JavaScriptReact,
      LanguageId.TypeScript,
      LanguageId.TypeScriptReact,
      LanguageId.Python,
      LanguageId.Go,
      LanguageId.Lua,
      LanguageId.PowerShell,
    ],
    [
      new EscapeRule(/\\/gm, "\\\\", 9),
      new EscapeRule(/"/gm, '\\"', 8),
      new EscapeRule(/'/gm, "\\'", 8),
      new EscapeRule(/\t/gm, "\\t", 5),
      new EscapeRule(/\v/gm, "\\v", 5),
      new EscapeRule(/\0/gm, "\\0", 5),
      new EscapeRule(/[\b]/gm, "\\b", 5),
      new EscapeRule(/\f/gm, "\\f", 5),
      new EscapeRule(/\n/gm, "\\n", 5),
      new EscapeRule(/\r/gm, "\\r", 5),
    ]
  ),
  new LanguageEscapeRule(
    [LanguageId.HTML],
    [
      new EscapeRule(/&/gm, "&amp;", 1),
      new EscapeRule(/"/gm, "&quot;", 5),
      new EscapeRule(/</gm, "&lt;", 5),
      new EscapeRule(/>/gm, "&gt;", 5),
    ]
  ),
  new LanguageEscapeRule(
    [LanguageId.XML],
    [
      new EscapeRule(/&/gm, "&amp;", 1),
      new EscapeRule(/'/gm, "&apos;", 5),
      new EscapeRule(/"/gm, "&quot;", 5),
      new EscapeRule(/</gm, "&lt;", 5),
      new EscapeRule(/>/gm, "&gt;", 5),
    ]
  ),
  new LanguageEscapeRule(
    [LanguageId.PHP],
    [
      new EscapeRule(/\\/gm, "\\\\", 1),
      new EscapeRule(/"/gm, '\\"', 2),
      new EscapeRule(/\n/gm, "\\n", 5),
      new EscapeRule(/\t/gm, "\\t", 5),
      new EscapeRule(/\r/gm, "\\r", 5),
      new EscapeRule(/\f/gm, "\\f", 5),
      new EscapeRule(/\v/gm, "\\v", 5),
      new EscapeRule(/\e/gm, "\\e", 5),
      new EscapeRule(/\$/gm, "\\$", 5),
    ]
  ),
];

const languageUnescapeRules: LanguageEscapeRule[] = [
  new LanguageEscapeRule(
    [
      LanguageId.C,
      LanguageId.CPP,
      LanguageId.CSharp,
      LanguageId.Java,
      LanguageId.JSON,
      LanguageId.JSONWithComments,
      LanguageId.ObjectiveC,
      LanguageId.ObjectiveCPP,
      LanguageId.Ruby,
      LanguageId.Swift,
      LanguageId.VisualBasic,
    ],
    [
      new EscapeRule(/\\\\/gm, "\\", 9),
      new EscapeRule(/\\"/gm, '"', 8),
      new EscapeRule(/\\b/gm, "\b", 5),
      new EscapeRule(/\\n/gm, "\n", 5),
      new EscapeRule(/\\t/gm, "\t", 5),
      new EscapeRule(/\\r/gm, "\r", 5),
      new EscapeRule(/\\f/gm, "\f", 5),
      new EscapeRule(/\\v/gm, "\v", 5),
    ]
  ),
  new LanguageEscapeRule(
    [
      LanguageId.JavaScript,
      LanguageId.JavaScriptReact,
      LanguageId.TypeScript,
      LanguageId.TypeScriptReact,
      LanguageId.Python,
      LanguageId.Go,
      LanguageId.Lua,
      LanguageId.PowerShell,
    ],
    [
      new EscapeRule(/\\\\/gm, "\\", 9),
      new EscapeRule(/\\"/gm, '"', 8),
      new EscapeRule(/\\'/gm, "'", 8),
      new EscapeRule(/\\t/gm, "\t", 5),
      new EscapeRule(/\\v/gm, "\v", 5),
      new EscapeRule(/\\0/gm, "\0", 5),
      new EscapeRule(/\\b/gm, "\b", 5),
      new EscapeRule(/\\f/gm, "\f", 5),
      new EscapeRule(/\\n/gm, "\n", 5),
      new EscapeRule(/\\r/gm, "\r", 5),
    ]
  ),
  new LanguageEscapeRule(
    [LanguageId.HTML],
    [
      new EscapeRule(/&amp;/gm, "&", 9),
      new EscapeRule(/&quot;/gm, '"', 5),
      new EscapeRule(/&lt;/gm, "<", 5),
      new EscapeRule(/&gt;/gm, ">", 5),
    ]
  ),
  new LanguageEscapeRule(
    [LanguageId.XML],
    [
      new EscapeRule(/&amp;/gm, "&", 9),
      new EscapeRule(/&apos;/gm, "'", 5),
      new EscapeRule(/&quot;/gm, '"', 5),
      new EscapeRule(/&lt;/gm, "<", 5),
      new EscapeRule(/&gt;/gm, ">", 5),
    ]
  ),
  new LanguageEscapeRule(
    [LanguageId.PHP],
    [
      new EscapeRule(/\\\\/gm, "\\", 1),
      new EscapeRule(/\\"/gm, '"', 2),
      new EscapeRule(/\\n/gm, "\n", 5),
      new EscapeRule(/\\t/gm, "\t", 5),
      new EscapeRule(/\\r/gm, "\r", 5),
      new EscapeRule(/\\f/gm, "\f", 5),
      new EscapeRule(/\\v/gm, "\v", 5),
      new EscapeRule(/\\e/gm, "e", 5),
      new EscapeRule(/\\$/gm, "$", 5),
    ]
  ),
];

export { languageEscapeRules, languageUnescapeRules };
