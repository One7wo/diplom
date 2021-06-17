const ticketService = require("../services/ticketServise");
const User = require("../models/User");
const Ticket = require("../models/Ticket");

class TicketController {
  async createTicket(req, res) {
    try {
      const { name, type, key } = req.body;
      const ticket = new Ticket({
        name,
        type,
        key: Math.floor(Math.random() * (1000 - 100)) + 100,
        user: req.user.id,
      });

      ticket.path = name;
      await ticketService.createTicket(ticket);
      await ticket.save();
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getTickets(req, res) {
    try {
      const tickets = await Ticket.find({ user: req.user.id });
      return res.json(tickets);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Can not get tickets" });
    }
  }

  async deleteTicket(req, res) {
    try {
      const ticket = await Ticket.findOne({
        _id: req.query.id,
        user: req.user.id,
      });
      if (!ticket) {
        return res.status(400).json({ message: "ticket not found" });
      }
      ticketService.deleteTicket(ticket);
      await ticket.remove();
      return res.json({ message: "Ticket was deleted" });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Ticket is not empty" });
    }
  }

  async searchTicket(req, res) {
    try {
      const searchName = req.query.search;
      let files = await Ticket.find({ user: req.user.id });
      files = files.filter((file) => file.name.includes(searchName));
      return res.json(files);
    } catch (error) {
      console.log(e);
      return res.status(400).json({ message: "Search error" });
    }
  }
}

module.exports = new TicketController();
