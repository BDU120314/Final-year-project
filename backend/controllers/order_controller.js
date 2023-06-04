const db = require("../config/connection_db");

// for creating a farmer

const AddOrder = (req, res) => {
  const { fname,mname, input_type, amount, farmers_id } =
    req.body;
console.log(req.body)
  const sql =
    "INSERT INTO orders (farmer_fname, farmer_mname,input_type, amount, farmer_id) VALUES (?,?,?,?,?)";
  db.query(
    sql,
    [fname, mname, input_type, amount, farmers_id],
    (error, result) => {
      if (!error) {
        console.log("you ordered successfully!");
      } else {
        console.log(error.message);
      }
    }
  );
};

//for getting all farmers

const getAllOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

// for getting all orders of a specific farmer
const getAllOrdersByFarmerId = (req, res) => {
  const farmerId = req.params.id;
  const sql = "SELECT * FROM orders WHERE farmer_id = ?";
  db.query(sql, [farmerId], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

//for getting single farmers

const GetSingleOrder = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM orders where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateOrder = (req, res) => {
  const id = req.params.id;
  const {
    farmer_fname,
    farmer_mname,
    woreda_name,
    cluster_name,
    farmers_id,
    input_type,
    amount,
  } = req.body;

  const sql = `UPDATE orders SET farmer_fname =?, mname = ?, woreda_name=?, cluster_name = ?, farmers_id =?, input_type=? , amount = ? WHERE id = ${id}`;
  db.query(
    sql,
    [
      farmer_fname,
      farmer_mname,
      woreda_name,
      cluster_name,
      farmers_id,
      input_type,
      amount,
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).send("Order data updated successfully");
      }
    }
  );
};

//for deleting
const DeleteOrder = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM orders WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    return res.json({ Status: "Success" });
  });
};

module.exports = {
  AddOrder,
  getAllOrders,
  getAllOrdersByFarmerId,
  GetSingleOrder,
  UpdateOrder,
  DeleteOrder,
};
