import FormField from "components/molecules/FormField";

export default {
  title: "Components/Molecules/FormField",
  component: FormField,
};

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Login",
};

export const LongLabel = Template.bind({});
Default.args = {
  label: "Very long label to see how it looks.",
};
