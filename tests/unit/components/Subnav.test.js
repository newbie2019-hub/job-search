import { mount } from "@vue/test-utils";
import Subnav from "@/components/Subnav";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("shows the job result count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on the job page", () => {
    it("does not display the job result count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
