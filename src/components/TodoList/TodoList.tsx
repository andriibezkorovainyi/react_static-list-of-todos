// Add the required types and props
import React from 'react';
// import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">

    {todos.map(todo => (
      <TodoInfo todo={todo} />
    ))}
  </section>
);
