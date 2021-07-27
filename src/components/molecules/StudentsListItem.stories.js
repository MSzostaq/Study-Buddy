import StudentsListItem from "components/molecules/StudentsListItem";

export default {
  title: "Components/Molecules/StudentListItem",
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: "Adam Romański",
    attendance: "60%",
    average: 4.7,
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: "Adam Romański",
    attendance: "60%",
    average: 3.7,
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: "Adam Romański",
    attendance: "60%",
    average: 2.3,
  },
};

export const NoGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: "Adam Romański",
    attendance: "60%",
    average: null,
  },
};
