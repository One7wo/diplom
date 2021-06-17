const Ticket = require("../models/Ticket");
const fs = require("fs");
const { rejects } = require("assert");
const config = require("config");

class TicketService {
  createTicket(ticket) {
    const ticketPath = `${config.get("ticketPath")}\\${ticket.user}\\${
      ticket.path
    }`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(ticketPath)) {
          fs.mkdirSync(ticketPath);
          return resolve({ message: "Ticket was created" });
        } else {
          return reject({ message: "Ticlet already exist" });
        }
      } catch (e) {
        return reject({ message: "Ticket error" });
      }
    });
  }
  deleteTicket(ticket) {
    const path = this.getPath(ticket);
    fs.rmdirSync(path);
  }
  getPath(ticket) {
    return config.get("ticketPath") + "\\" + ticket.user + "\\" + ticket.path;
  }
}

module.exports = new TicketService();
