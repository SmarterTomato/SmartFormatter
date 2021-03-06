export default interface IConfiguration {
  editorContextMenu: boolean;
  stringFormatter: {
    enable: boolean;
    mergeLines: { joinString: string };
  };
  variableFormatter: {
    enable: boolean;
    toCustomVariable: { upperFirst: boolean; joinString: string | null };
  };
  escapeFormatter: {
    enable: boolean;
  };
}
