import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ items, onComplete, onDelete }) => (
  <ul className="todo-list">
    {items.map(({ id, title, completed }) => (
      <li className="todo-list__item" key={`item-${id}`}>
        <div className="todo-list__title">{title}</div>
        <button
          onClick={() => onComplete(id, !completed)}
          className={classnames('todo-list__update-btn', {
            'is-completed': completed,
          })}
        >
          {completed ? 'completed' : 'not complete'}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="todo-list__delete-btn"
          aria-label="delete todo"
        >
          <Icon icon={faTimes} />
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
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

TodoList.defaultProps = {
  items: [],
  onComplete: () => {},
  onDelete: () => {},
};

export default TodoList;
