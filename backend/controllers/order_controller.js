const db = require("../config/connection_db");

// for creating a farmer

const AddOrder = (req, res) => {
  const { id, input_type, amount, farmer_id } = req.body;

  const sql =
    "INSERT INTO orders (id, input_type, amount, farmer_id) VALUES (?,?,?,?)";
  db.query(sql, [id, input_type, amount, farmer_id], (error, result) => {
    if (!error) {
      console.log("you ordered successfully!");
    } else {
      console.log(error.message);
    }
  });
};

//for getting all farmers

const getAllOrders = (req, res) => {
  db.query(`
  SELECT o.input_type, o.amount, f.id, f.fname, f.mname, f.kebele_id
  FROM orders AS o
  INNER JOIN farmers AS f ON o.farmer_id = f.id
  INNER JOIN kebeles AS k ON f.kebele_id = k.id;
  `, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

// For getting the count of orders
const getOrderCount = (req, res) => {
  db.query('SELECT COUNT(*) AS orderCount FROM orders WHERE farmer_id=1', (err, rows, fields) => {
    if (!err) {
      res.send(rows[0]);
    } else {
      console.log(err);
    }
  });
};

// ...

 
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
  const {  input_type, amount, farmer_id } =
    req.body;

  const sql = `UPDATE orders SET input_type=? , amount = ?, farmer_id =?  WHERE id = ${id}`;
  db.query(
    sql,
    [ input_type, amount, farmer_id],
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
  getOrderCount,
  GetSingleOrder,
  UpdateOrder,
  DeleteOrder,
};
