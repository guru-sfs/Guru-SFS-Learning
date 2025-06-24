const formMeta = {
  components: [
    { type: "textField", label: "Enter name", key: "name" },
    { type: "number", label: "age", key: "age" },
  ],
};

for (let i = 0; i < formMeta.components.length; i++) {
  const component = formMeta.components[i];
  for (let key in component) {
    console.log(`${key}: ${component[key]}`);
  }
}
