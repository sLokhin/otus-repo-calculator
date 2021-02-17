// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
import React from "react";
import { TestComponent } from "./components/TestComponent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// type FIXME = any;

// Version 1
// type FIXME<T> = T extends React.Component<infer U> ? U: never;

// Version 2
type FIXME<T> = T extends { defaultProps: infer U } ? U : never;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<T> => {
  return component.defaultProps as FIXME<T>;
};

console.log("EXECUTE medium-2 :", getDefaultProps(TestComponent))
