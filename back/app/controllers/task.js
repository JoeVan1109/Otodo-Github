import { Task } from "../models/Task.js";



export async function getAllTasks(req, res) {
  // Récupérer la liste des tâches
  const tasks = await Task.findAll();

  // Renvoyer la liste des tâches au format JSON
  res.json(tasks);

};

export async function createTask(req, res) {

    // Récupérer les données de la requête
    const newTask = await Task.create(req.body);
    // Renvoyer la tâche créée au format JSON
    res.status(201).json(newTask);

}

export async function onUpdateTask(req, res) {
  // Récupérer l'ID de la tâche à mettre à jour
  const taskId = req.params.id;

  // Récupérer les données de la requête
  const updateTask = await Task.findByPk(taskId);

  // Mettre à jour les données de la tâche

  updateTask.name = req.body.name;

  res.json(updateTask);
}

export async function onDeleteTask(req, res) {
  // Récupérer l'ID de la tâche à supprimer
  const taskId = req.params.id;

  // Supprimer la tâche
  const deleteTask = await Task.destroy({
    where: {
      id: taskId
    }
  });

  // Renvoyer la tâche supprimée au format JSON

  res.json(deleteTask);
}
