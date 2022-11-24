import PropTypes from 'prop-types'

import TaskFilter from '../TasksFilter'

import './Footer.css'

const Footer = ({ itemsLeft, deletedCompletedTask, filter, onFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" type="button" onClick={deletedCompletedTask}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  itemsLeft: 0,
  deletedCompletedTask: () => {},
  filter: 'all',
  onFilterChange: () => {},
}
Footer.propTypes = {
  itemsLeft: PropTypes.number,
  deletedCompletedTask: PropTypes.func,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export default Footer
