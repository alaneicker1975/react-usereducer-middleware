import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TodoList = ({ items, onStatusChange }) => (
  <ul className="todo-list">
    {items.map(({ id, userId, title, completed }) => (
      <li className="todo-list__item" key={`item-${id}`}>
        <div className="todo-list__title">{title}</div>
        <button
          onClick={() => onStatusChange(!completed)}
          className={classnames('todo-list__btn', {
            'is-completed': completed,
          })}
        >
          {completed ? 'completed' : 'not complete'}
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  onStatusChange: PropTypes.func,
};

TodoList.defaultProps = {
  items: [],
  onStatusChange: () => {},
};

export default TodoList;
