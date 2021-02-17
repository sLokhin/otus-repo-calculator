import React, { FC } from "react";

interface ITestFunctionalComponentProps {
  name: string;
  value: number;
  onClick: () => void;
  children?: string;
}

export const TestComponent: FC<ITestFunctionalComponentProps> = (props) => {
  return (
    <button className={props.name} onClick={props.onClick}>
      {`${props.children} : ${props.value}`}
    </button>
  );
};

TestComponent.defaultProps = {
  name: "test-component",
  value: 99,
  children: "No description",
}
