import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

//class based component
export default class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  //called when info is typed in input box
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  //when submit button is clicked
  handleSubmit = (e) => {
    e.preventDefault(); //prevents from submitting to a page
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    //making changes to the state
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  //to clear the whole list
  clearList = (e) => {
    this.setState({
      items: [],
    });
  };

  //when delete icon is clicked
  handleDelete = (id) => {
    const filtereditems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filtereditems,
    });
  };

  //when edit icon is clicked
  handleEdit = (id) => {
    const filtereditems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filtereditems,
      item: selectedItem,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              <h3>
                <Todoinput
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}
                />
                <Todolist
                  items={this.state.items}
                  clearList={this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              </h3>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
