import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/*
  If you don't specify the second argument to connect(), your component will receive dispatch by default
  component receives props.dispatch when component was connet()
*/
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
/*
  https://react-redux.js.org/using-react-redux/connect-mapdispatch
  If you don't specify the second argument to connect(), your component will receive dispatch by default
*/
export default connect()(AddTodo)