const ticketModel = require("../models/ticketModel");

exports.getAll = (req, res) => {
  res.json(ticketModel.getAllTickets());
};

exports.getById = (req, res) => {
  const ticket = ticketModel.getTicketById(+req.params.id);
  if (!ticket) return res.status(404).json({ error: "Ticket not found" });
  res.json(ticket);
};

exports.create = (req, res) => {
  const newTicket = ticketModel.addTicket(req.body);
  res.status(201).json(newTicket);
};

exports.update = (req, res) => {
  const updated = ticketModel.updateTicket(+req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Ticket not found" });
  res.json(updated);
};

exports.delete = (req, res) => {
  const deleted = ticketModel.deleteTicket(+req.params.id);
  if (!deleted) return res.status(404).json({ error: "Ticket not found" });
  res.json({ message: "Ticket deleted", ticket: deleted });
};

exports.resolve = (req, res) => {
  const resolved = ticketModel.resolveTicket(+req.params.id);
  if (!resolved) return res.status(404).json({ error: "Ticket not found" });
  res.json(resolved);
};
