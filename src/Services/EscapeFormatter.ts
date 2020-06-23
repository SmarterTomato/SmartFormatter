import vsCodeService from "./VSCodeService";
import InformationMessage from "../Models/InformationMessage";
import {
  languageEscapeRules,
  languageUnescapeRules,
  LanguageEscapeRule,
} from "../Models/EscapeRules";
import LanguageId from "../Models/LanguageId";

export class EscapeFormatter {
  escapeWithCurrentLanguage(rules: LanguageEscapeRule[]) {
    // * Get the current language for the document
    let languageId = vsCodeService.getLanguageId();
    if (!languageId) {
      return new Error(
        'Could not get language id for current document. Try "Escape / Unescape With Language" command.'
      );
    }

    // * Find rules
    const rule = rules.find((x) => x.languageIds.some((y) => y === languageId));
    if (!rule) {
      throw new Error(
        'Current language is not supported. Try "Escape / Unescape With Language" command.'
      );
    }

    this.escapeWithRule(rule);
  }

  escapeWithLanguage(rules: LanguageEscapeRule[]) {
    let languages: LanguageId[] = [];
    languageEscapeRules.forEach(
      (x) => (languages = languages.concat(x.languageIds))
    );

    vsCodeService
      .showQuickPick(languages, "Please select a language")
      .then((languageId) => {
        if (languageId === undefined) {
          return;
        }

        // * Find rules
        const rule = rules.find((x) =>
          x.languageIds.some((y) => y === languageId)
        );
        if (!rule) {
          throw new Error(
            'Current language is not supported. Try "Escape With Language" command.'
          );
        }

        this.escapeWithRule(rule);
      });
  }

  private escapeWithRule(rule: LanguageEscapeRule) {
    let selectedText = vsCodeService.getSelectedText();

    for (const setting of rule.settings.sort((x) => x.order)) {
      selectedText = selectedText.replace(setting.search, setting.replaceWith);
    }

    vsCodeService.replaceSelectedText(selectedText);
  }
}

const escapeFormatter = new EscapeFormatter();
export default escapeFormatter;
