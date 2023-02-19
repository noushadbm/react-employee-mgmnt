import React from "react";
import { Template } from "webpack";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Failure = () => <Button variant="danger">Failure</Button>

// export const ButtonTemplate = Template.bind({})
// ButtonTemplate.args = {
//     variant: 'primary',
//     children: 'Primary Args'
// }