
```
  import { connect } from "react-redux";

  const TodoForm = ({ todos, onCreatePressed }) => {

  }

  const mapStateToProps = (state) => ({
    todos: state.todos
  });

  const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: (text) => dispatch(addTodoRequest(text)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
```

