import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, alertShow } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.alertShow("Post name can't be empty!");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Post header</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Create
        </button>
        {this.props.alert && <Alert text={this.props.alert} />}
      </form>
    );
  }
}

export default connect((state) => ({ alert: state.app.alert }), { createPost, alertShow })(PostForm);
