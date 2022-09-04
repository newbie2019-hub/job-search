import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("button variants", () => {
  const wrapper = mount(ActionButton, {
    props: {
      btnType: "primary",
      text: "Hello World",
    },
  });

  it("renders the text props", () => {
    const btnText = wrapper.text();
    expect(btnText).toMatch("Hello World");
  });

  it("applies the corresponding css classes based on the btnType prop passed", () => {
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
