import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays a brand name", () => {
    /**
     *  mount() from test-utils -> added when unit test is
     *  included upon creating our vue app using the vue
     *  cli.
     *
     *  mount() accepts two arguments
     *  @params {Object} component - component being tested
     *  @params {Object} options - a javascript object (e.g., {
     *   data() {
     *     return {
     *       company: "Company Name"
     *     }
     *   }
     *  })
     *  that will override any existing properties.This isn't
     *  recommended when writing tests.
     *
     */
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Google Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    /**
     *  find(), findAll() allows us to search for elements,
     *  id, classes or anything
     */
    const navMenuItems = wrapper.findAll("li");
    const navMenuTexts = navMenuItems.map((item) => item.text());
    expect(navMenuTexts).toEqual([
      "Teams",
      "How we hire",
      "Locations",
      "Life at Google",
      "Students",
      "Jobs",
    ]);
  });
});
