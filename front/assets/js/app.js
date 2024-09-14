import * as taskManager from "./task.js";


document.addEventListener("DOMContentLoaded", init);


async function init() {
  // Fetch et afficher les tâches
  await taskManager.fetchAndInsertTasks();

  // Ecouter la soumission du formulaire d"ajout de tâche
  const createTaskForm = document.querySelector("#create-task");
  createTaskForm.addEventListener("submit", taskManager.handleCreateForm);
}
