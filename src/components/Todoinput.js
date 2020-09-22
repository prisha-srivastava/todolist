import React, { Component } from "react";

export default class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <section>
        <h3 className="text capitalize">Add task to be Done</h3>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fa fa-book"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add todo item"
                value={item}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={item ? false : true}
                className={
                  editItem
                    ? "btn btn-success btn-block mt-4 text-uppercase"
                    : "btn btn-primary btn-block mt-4 text-uppercase"
                }
              >
                {editItem ? "edit item" : "add item"}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

// function of ternary operator above: to change text of button when edit item is clicked,classname when edit item is clicked
//disabled attribute disables the button when nothing is written in input box else enables it when text is entered.
