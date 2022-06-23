const fs = require("fs");

class ComponentCreator {
  constructor(currentDir, componentName) {
    this.componentName = componentName;
    this.currentDir = currentDir;
  }

  parsedComponentName(componentName) {
    return componentName
      .split("-")
      .map((name) => name.slice(0, 1).toUpperCase() + name.slice(1))
      .join("");
  }

  componentContent() {
    let realComponentName = this.parsedComponentName(this.componentName);

    const content = `import "./${this.componentName}.css";

const ${realComponentName} = () => {
  return <div className="${this.componentName}">${realComponentName}</div>;
};

export default ${realComponentName};`;

    return content;
  }

  cssContent() {
    return `.${this.componentName} {

}`;
  }

  generateComponent() {
    fs.mkdirSync(`${this.currentDir}/${this.componentName}`);
    fs.writeFile(
      `${this.currentDir}/${this.componentName}/${this.parsedComponentName(
        this.componentName
      )}.jsx`,
      this.componentContent(),
      function (err) {
        console.log(err);
      }
    );
    fs.writeFile(
      `${this.currentDir}/${this.componentName}/${this.componentName}.css`,
      this.cssContent(),
      function (err) {
        console.log(err);
      }
    );
  }
}

module.exports = { ComponentCreator };
