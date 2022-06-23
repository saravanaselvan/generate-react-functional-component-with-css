Extension to generate React Functional component with a CSS file inside a folder. Example:

**Folder Structure:**

```
src
 └- components
```

1. Right click components folder and select 'Create React Component with CSS'.
2. Type a component name in lower case or hyphen separate if multiple words and press Enter e.g. my-new-component

**New Folder Structure:**

```
src
 └- components
    my-new-component
    |-- my-new-component.css
    └-- MyNewComponent.jsx
```

**MyNewComponent.jsx**

```javascript
import "./my-new-component.css";

const MyNewComponent = () => {
  return <div className="my-new-component">MyNewComponent</div>;
};

export default MyNewComponent;
```

**my-new-component.css**

```css
.my-new-component {
}
```
