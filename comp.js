let template = `
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>`;

export default {
  name: "Comp",
  template: template,
  props: {
    msg: String
  }
};
