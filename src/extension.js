const vscode = require("vscode");
const path = require("path");
const { ComponentCreator } = require("./ComponentCreator");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "generate-react-functional-component-with-css.createComponent",
    async function (uri) {
      const componentName = await vscode.window.showInputBox({
        placeHolder: "Enter Component Name",
        prompt:
          "Lower case or Hyphen separated if multiple words e.g. my-new-component",
        value: "",
      });

      let currentDir = uri?.path;
      if (!currentDir) {
        const currentFile = vscode.window.activeTextEditor.document.fileName;
        currentDir = path.dirname(currentFile);
      }

      const componentCreator = new ComponentCreator(currentDir, componentName);
      componentCreator.generateComponent();
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
