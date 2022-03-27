import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
/*
describes how to transform the current Redux store "state" into the props 
you want to pass to a presentational component you are wrapping.
*/
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/*
 mapDispatchToProps() receives the dispatch() method and returns callback props 
 that you want to inject into the presentational component. 
 
 For example, we want the VisibleTodoList to inject a prop called toggleTodo into 
 the TodoList component, and we want toggleTodo to dispatch a TOGGLE_TODO action:
 */
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)