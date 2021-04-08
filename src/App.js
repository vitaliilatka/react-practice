import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import Container from './Components/Container';
import Filter from './Components/Filter';
import IconButton from './Components/IconButton';
import Modal from './Components/Modal';
import Stats from './Components/Stats';
import TodoEditor from './Components/TodoEditor';
import TodoList from './Components/TodoList';
import TodoView from './Components/TodoView';
import ArticlesView from '';

const barStyles = {

};

class TodosView extends Component {
  state = {

  };

  componentDidMount() {
    // const todos = localStorage.getItem('todos');
    // const parsedTodos = JSON.parse(todos);

    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });
    // }

    axios.get('http://localhost:3000/todos').then(({ data }) =>
      this.setState({ todos: data })).catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {

    }
  }

  addTodo = text => {
    const todo = {
      text,
      completed: false,
    };

    axios.post('http://localhost:3000/todos', todo).then(console.log);

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = todoId => {

  };

  toggleCompleted = todoId => {

  };
}

const App = () => (
  <>
    <ul>
      <li>
        <Link to='/todos'>Заметки</Link>
      </li>
      <li>
        <Link to='/articles'>Статьи</Link>
      </li>
    </ul>

    <Switch>
      <Route path='/todos'>
        <TodosView />
      </Route>
      <Route path='/articles'>
        <ArticlesView />
      </Route>
    </Switch>
  </>
);

export default App;
