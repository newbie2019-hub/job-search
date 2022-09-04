import { shallowMount } from "@vue/test-utils";
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
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Google Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
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

  describe("when user is logged out", () => {
    it("prompts user to sign-in", () => {
      const wrapper = shallowMount(MainNav);

      /**
       *  findComponent is not really recommended
       *  as it limits or decouples us to the
       *  name of the component thus if a change
       *  on the name happends it will fail the
       *  test.
       */
      // const loginButton = wrapper.findComponent({ name: "ActionButton" });
      // const profileImage = wrapper.findComponent({ name: "ProfileImage" });

      /**
       *  Re-written the above code changing the
       *  findComponent() method into find() method
       */

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("profile image component is shown", async () => {
      const wrapper = shallowMount(MainNav);

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
