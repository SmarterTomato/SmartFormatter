export default interface IConfiguration {
  editorContextMenu: boolean;
  stringFormatter: {
    enable: boolean;
    toSingleLine: { joinString: string };
  };
  variableFormatter: {
    enable: boolean;
    toVariableCustom: { capitalizeWords: boolean; joinString: string | null };
  };
  escapeFormatter: {
    enable: boolean;
  };
}
