import React from "react";

const AddTask = () => (
  <section>
    <h1 className="m-3">Nouvelle tâche</h1>
    <div className="card mx-3">
      <form className="card-body" onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label form="taskName">Nom de la tâche</label>
          <input type="text" className="form-control mt-2" name="taskName" id="taskName"/>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Créer</button>
      </form>
    </div>
  </section>
);

export default AddTask;