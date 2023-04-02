const Customer = require("../models/customer");
const Order = require("../models/order");

exports.get_post = (req, res) => {
  res.send("This is my post");
};

// Q) Example for Promise.all, resolve , reject
const promisesArray = [
  Promise.resolve("test 1"),
  Promise.resolve("test 2"),
  //Uncomment for below comment for reject example
  //Promise.reject(new Error("Something went wrong")),
  Promise.resolve("test 3"),
];

Promise.all(promisesArray)
  .then((results) => {
    console.log("All promises successfully resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

//Q) Example for Aggregate Lookup property
exports.lookupExample = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: "customers",
          localField: "customerId",
          foreignField: "_id",
          as: "customer",
        },
      },
    ]);
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Q) Example for populate on a array field (where show ref id in a array)
exports.populateExample = async (req, res) => {
  try {
    const customerId = req.body.customerId;
    const customer = await Customer.findOne({ _id: customerId })
      .populate({
        path: "orders",
        populate: {
          path: "customerId",
          model: "Customer",
        },
      })
      .exec();

    console.log("The customer orders are:", customer.orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Q) Example to add index to schema

//Add below line to customer model
//customerSchema.index({ email: 1 });
