import * as vscode from "vscode";
import IConfiguration from "../Models/IConfiguration";

class ConfigurationService {
  get(): IConfiguration {
    const workspaceConfig = vscode.workspace.getConfiguration();
    const smartFormatterConfig = workspaceConfig.inspect("smartFormatter");

    if (!smartFormatterConfig) {
      throw new Error("Could not load configuration.");
    }

    try {
      const config = {
        ...(smartFormatterConfig.defaultValue as object),
        ...(smartFormatterConfig.globalValue as object),
        ...(smartFormatterConfig.workspaceValue as object),
      } as IConfiguration;

      return config;
    } catch (error) {
      throw new Error("Could not load configuration. " + error.message);
    }
  }
}

let configurationService = new ConfigurationService();
export default configurationService;
