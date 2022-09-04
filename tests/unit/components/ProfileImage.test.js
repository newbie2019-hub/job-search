import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage";

describe("ProfileImage", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
