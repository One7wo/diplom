const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");

const ticketControllers = require("../controllers/ticketController");

router.post("", authMiddleware, ticketControllers.createTicket);
router.get("", authMiddleware, ticketControllers.getTickets);
router.delete("/", authMiddleware, ticketControllers.deleteTicket);
router.get("/search", authMiddleware, ticketControllers.searchTicket);

module.exports = router;
