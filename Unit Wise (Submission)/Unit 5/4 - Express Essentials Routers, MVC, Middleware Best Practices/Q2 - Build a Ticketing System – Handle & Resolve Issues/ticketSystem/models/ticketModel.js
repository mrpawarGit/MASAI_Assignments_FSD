const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "db.json");

const readDB = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

const getAllTickets = () => readDB();

const getTicketById = (id) => {
  const tickets = readDB();
  return tickets.find((t) => t.id === id);
};

const addTicket = (ticket) => {
  const tickets = readDB();
  const newTicket = {
    id: Date.now(),
    status: "pending",
    ...ticket,
  };
  tickets.push(newTicket);
  writeDB(tickets);
  return newTicket;
};

const updateTicket = (id, updates) => {
  const tickets = readDB();
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tickets[index] = { ...tickets[index], ...updates };
  writeDB(tickets);
  return tickets[index];
};

const deleteTicket = (id) => {
  const tickets = readDB();
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) return null;
  const removed = tickets.splice(index, 1)[0];
  writeDB(tickets);
  return removed;
};

const resolveTicket = (id) => {
  const tickets = readDB();
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tickets[index].status = "resolved";
  writeDB(tickets);
  return tickets[index];
};

module.exports = {
  getAllTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
  resolveTicket,
};
