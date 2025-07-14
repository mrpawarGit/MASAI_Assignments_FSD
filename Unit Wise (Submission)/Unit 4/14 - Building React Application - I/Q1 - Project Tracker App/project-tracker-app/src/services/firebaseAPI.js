import axios from "axios";

const BASE_URL =
  "https://project-tracker-718ba-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const addProject = async (project) => {
  const res = await axios.post(`${BASE_URL}/projects.json`, project);
  return res.data;
};

export const getProjects = async () => {
  const res = await axios.get(`${BASE_URL}/projects.json`);
  return res.data;
};

export const addTask = async (projectId, task) => {
  const res = await axios.post(
    `${BASE_URL}/projects/${projectId}/tasks.json`,
    task
  );
  return res.data;
};

export const deleteProject = async (projectId) => {
  return axios.delete(`${BASE_URL}/projects/${projectId}.json`);
};

export const updateProject = async (projectId, updates) => {
  return axios.patch(`${BASE_URL}/projects/${projectId}.json`, updates);
};

export const updateTask = async (projectId, taskId, updates) => {
  return axios.patch(
    `${BASE_URL}/projects/${projectId}/tasks/${taskId}.json`,
    updates
  );
};

export const deleteTask = async (projectId, taskId) => {
  return axios.delete(`${BASE_URL}/projects/${projectId}/tasks/${taskId}.json`);
};
