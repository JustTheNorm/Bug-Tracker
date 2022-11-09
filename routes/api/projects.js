const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../../controllers/api/tickets');


router.post(`/new`, ticketsCtrl.addTicket)
router.get(`/`, ticketsCtrl.ticketList)

module.exports = router;