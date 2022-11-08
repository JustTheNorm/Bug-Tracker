const Ticket = require('../../models/tickets');
// const Item = require('../../models/item');


// A cart is the unpaid ticket for a user
async function ticketList(req, res) {
    try{
        const ticket = await Ticket.find({})
        res.status(200).json(ticket);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
}


async function addTicket(req, res) {
    try{
        const ticket = await Ticket.create(req.body);
        //  await ticket.addTicket(req.params.id);
         res.status(200).json(ticket);
  }catch(e){
        console.log(e)
        res.status(400).json({ msg: e.message });
    }
}

// Update the cart's isPaid property to true
// async function checkout(req, res) {
//     try{
//         const cart = await Order.getCart(req.user._id);
//         cart.isPaid = true;
//         await cart.save();
//         res.status(200).json(cart);
//     }catch(e){
//         res.status(400).json({ msg: e.message });
//     }  
// }

// Remove ticket by ID
async function removeTicket(req, res) {
    try{
        const Tickets = await Ticket.findByIdAndRemove({ _id})
        
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
    
    }

    module.exports = {
        removeTicket,
        addTicket,
        ticketList
      };
  