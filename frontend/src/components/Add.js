import React, { Component } from "react";

export default class Add extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Agregar una tarea con edición desde VSC </h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2> Viendo si otra línea funciona </h2>
      </div>
    )
  }
}
