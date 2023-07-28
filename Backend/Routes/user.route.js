const express = require("express");
const UserModel = require("../Models/User.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await UserModel.find({});
    console.log(products)
    res.send(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

productRouter.post("/create", async (req, res) => {
  const payload = req.body;
  console.log(payload);

  try {
    const new_product = new UserModel(payload);
    await new_product.save();
    res.send({ msg: "Product Posted Successfully" });
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

productRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      payload,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong please try again" });
  }
});

productRouter.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong please try again" });
  }
});

module.exports = { productRouter };

// const express = require("express");
// const { UserModel } = require("../Models/User.model"); // Import the correct Product model

// const productRouter = express.Router();

// productRouter.get('/', async (req, res) => {
//   try {
//     const products = await UserModel.find();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// });

// productRouter.post('/create', async (req, res) => {
//     const payload = req.body;

//     try {
//         const new_product = new UserModel(payload); // Use the correct Product model
//         await new_product.save();
//         res.send({ "msg": "Product Posted Successfully" });
//     } catch (err) {
//         console.log(err);
//         res.send("Something went wrong");
//     }
// });

// productRouter.put('/update/:id', async (req, res) => {
//     const payload = req.body;
//     try {
//         const updatedProduct = await UserModel.findByIdAndUpdate(req.params.id, payload, { new: true });
//         res.json(updatedProduct);
//     } catch (err) {
//         res.status(500).json({ error: 'Something went wrong please try again' });
//     }
// });

// productRouter.delete('/delete/:id', async (req, res) => {
//     try {
//         const deletedProduct = await UserModel.findByIdAndRemove(req.params.id);
//         res.json(deletedProduct);
//     } catch (err) {
//         res.status(500).json({ error: 'Something went wrong please try again' });
//     }
// });

// module.exports = { productRouter };
