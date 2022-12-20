import PropTypes from 'prop-types'

import './TaskFilter.css'

export default function TaskFilter({ filter, onFilterChange }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]
  const buttonsFilter = buttons.map(({ name, label }) => {
    const isActive = filter === name
    const selected = isActive ? 'selected' : ''
    return (
      <li key={name}>
        <button type="button" className={selected} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    )
  })

  return <ul className="filters">{buttonsFilter}</ul>
}

TaskFilter.defaultProps = {
  filter: 'all',
  onFilterChange: () => {},
}
TaskFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}
