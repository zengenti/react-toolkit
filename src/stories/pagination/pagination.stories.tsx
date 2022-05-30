import useState from "storybook-addon-state";
import { ComponentStory, ComponentMeta, addParameters } from "@storybook/react";

import { Pagination } from "../../index";
import "./styles.css";
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

const Chevron = ({ isFlipped = false }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="butt"
      strokeLinejoin="bevel"
      transform={`rotate(${isFlipped ? 180 : 0})`}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};

export const Primary = Template.bind({});
Primary.decorators = [reactRouterDecorator];
Primary.parameters = {
  controls: {
    exclude: [
      "className",
      "NextPageComponent",
      "PreviousPageComponent",
      "updatePageIndex",
    ],
  },
};
Primary.args = {
  pageCount: 5,
  pageIndex: 0,
  totalCount: 30,
  pageSize: 6,
  hideNext: false,
  hidePrevious: false,
};

export const Secondary = Template.bind({});
Secondary.decorators = [reactRouterDecorator];
Secondary.parameters = {
  controls: {
    exclude: [
      "className",
      "NextPageComponent",
      "PreviousPageComponent",
      "updatePageIndex",
    ],
  },
};
Secondary.args = {
  pageCount: 7,
  pageIndex: 0,
  totalCount: 28,
  pageSize: 4,
  hideNext: false,
  hidePrevious: false,
  NextPageComponent: <Chevron isFlipped={false} />,
  PreviousPageComponent: <Chevron isFlipped={true} />,
};

export const Tertiary = Template.bind({});
Tertiary.decorators = [reactRouterDecorator];
Tertiary.parameters = {
  controls: {
    exclude: [
      "className",
      "NextPageComponent",
      "PreviousPageComponent",
      "updatePageIndex",
    ],
  },
};
Tertiary.args = {
  pageCount: 16,
  pageIndex: 0,
  totalCount: 64,
  pageSize: 4,
  hideNext: true,
  hidePrevious: true,
};
