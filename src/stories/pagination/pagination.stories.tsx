import useState from "storybook-addon-state";
import { ComponentStory, ComponentMeta, addParameters } from "@storybook/react";

import { Pagination } from "../../index";
// import "./styles.css";
import reactRouterDecorator from "../../../.storybook/decorators/react-router";

export default {
  title: "Components/Pagination",
  component: Pagination,
  options: {
    pageIndex: 0,
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [pageIndex, setPageIndex] = useState("pageIndex", 0);
  return (
    <Pagination
      {...args}
      pageIndex={pageIndex}
      updatePageIndex={(val) => setPageIndex(val)}
    />
  );
};

export const Primary = Template.bind({});
Primary.decorators = [reactRouterDecorator];
Primary.args = {
  pageCount: 16,
  pageIndex: 0,
  totalCount: 64,
  pageSize: 4,
};
