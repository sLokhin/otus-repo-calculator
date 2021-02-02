// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

import { TestComponent } from "./components/TestComponent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// type FIXME = any;

type FIXME<T> = T extends React.Component<infer Props> ? Props: never;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<T> => {
  return component.defaultProps;
};

console.log("EXECUTE medium-2 :", getDefaultProps(TestComponent))
