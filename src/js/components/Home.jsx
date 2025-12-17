import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (tarea.trim() === "") {
        alert("Debes escribir una tarea, no seas flojo");
        return;
      }
      setTareas([...tareas, { id: Date.now(), text: tarea }]);
      setTarea("");
    }
  };

  const deleteTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Lista</h1>
          
          <div className="card shadow">
            <div className="card-body">
              <input
                type="text"className="form-control form-control-lg"placeholder="¿Qué necesitas hacer?"value={tarea}onChange={(e) => setTarea(e.target.value)}onKeyDown={handleKeyPress}
              />
              
              <ul className="list-group list-group-flush mt-3">
                {tareas.length === 0 ? (
                  <li className="list-group-item text-center text-muted">No hay tareas, añadir tareas</li>
                ) : (
                  tareas.map((t) => (
                    <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center todo-item">
                      <span>{t.text}</span>
                      <button className="btn btn-link text-danger delete-btn p-0" onClick={() => deleteTarea(t.id)}>❌</button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;