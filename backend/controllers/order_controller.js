const db = require("../config/connection_db");

// for creating an order
const AddOrder = (req, res) => {
  const { fname, mname, input_type, amount, farmers_id, kebele_id, role } =
    req.body;

  // Set the initial status based on the user's role
  let status;
  if (role === "Farmer") {
    status = "Pending";
  } else if (role === "Woreda_Admin") {
    status = "Woreda Approval";
  } else if (role === "Zone_Admin") {
    status = "Zone Approval";
  } else if (role === "Region_Admin") {
    status = "Completed";
  } else {
    res.status(400).send("Invalid role");
    return;
  }

  const sql =
    "INSERT INTO orders (farmer_fname, farmer_mname, input_type, amount, farmer_id, kebele_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    fname,
    mname,
    input_type,
    amount,
    farmers_id,
    kebele_id,
    status,
  ];

  db.query(sql, values, (error, result) => {
    if (!error) {
      console.log("Order created successfully!");
      res.status(200).send("Order created successfully");
    } else {
      console.error(error);
      res.status(500).send(error.message);
    }
  });
};
// for getting all orders
const getAllOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
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
// for getting all orders of a specific woreda admin
const getAllOrdersByWoredaId = (req, res) => {
  const woredaId = req.params.id;
  const sql = `
    SELECT o.*
    FROM orders AS o
    JOIN farmers AS f ON o.farmer_id = f.id
    JOIN kebeles AS k ON f.kebele_id = k.id
    JOIN woredas AS w ON k.woreda_id = w.id
    WHERE o.status = 'Pending' AND w.id = ?
  `;
  db.query(sql, [woredaId], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

// for getting all orders of a specific zone admin
const getAllOrdersByZoneId = (req, res) => {
  const zoneId = req.params.id;
  console.log(zoneId);
  const sql = `
    SELECT o.*
    FROM orders AS o
    JOIN farmers AS f ON o.farmer_id = f.id
    JOIN kebeles AS k ON f.kebele_id = k.id
    JOIN woredas AS w ON k.woreda_id = w.id
    JOIN zones AS z ON w.zone_id = z.id
    WHERE o.status = 'Woreda Approval' AND z.id = ?
  `;
  db.query(sql, [zoneId], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

const getAllOrdersByRegionAdminId = (req, res) => {
  const regionId = req.params.id;

  const sql = `
    SELECT o.*
    FROM orders AS o
    JOIN farmers AS f ON o.farmer_id = f.id
    JOIN kebeles AS k ON f.kebele_id = k.id
    JOIN woredas AS w ON k.woreda_id = w.id
    JOIN zones AS z ON w.zone_id = z.id
    JOIN regions AS r ON z.region_id = r.id
    WHERE o.status = 'Zone Approval' AND r.id = ?
  `;

  db.query(sql, [regionId], (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

// for getting a single order
const GetSingleOrder = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM orders WHERE id = ?";
  db.query(sql, [id], (err, rows, field) => {
    if (!err) {
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.status(404).send("Order not found");
      }
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

// for updating an order
const UpdateOrder = (req, res) => {
  const orderId = req.params.id;
  const { role, status } = req.body;
  console.log(orderId, role, status);
  // Check the user's role to determine the allowed status updates
  let allowedStatuses = [];
  if (role === "Woreda_Admin") {
    allowedStatuses = ["Woreda Approval", "Rejected"];
  } else if (role === "Zone_Admin") {
    allowedStatuses = ["Rejected", "Zone Approval"];
  } else if (role === "Region_Admin") {
    allowedStatuses = ["Rejected", "Completed"];
  } else {
    res.status(403).send("Unauthorized");
    return;
  }

  // Check if the provided status is allowed for the user's role
  if (!allowedStatuses.includes(status)) {
    res.status(400).send("Invalid status for the user's role");
    return;
  }

  const sql = "UPDATE orders SET status = ? WHERE id = ?";
  db.query(sql, [status, orderId], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send(error.message);
    } else {
      res.status(200).send("Order status updated successfully");
    }
  });
};

// for deleting an order
const DeleteOrder = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM orders WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      res.status(200).json({ status: "Success" });
    }
  });
};

//count for zone approval
const countPendingOrdersForZoneAdmin = (req, res) => {
  const zoneId = req.params.id;
  const sql = `
    SELECT COUNT(*) AS count
    FROM orders AS o
    JOIN farmers AS f ON o.farmer_id = f.id
    JOIN kebeles AS k ON f.kebele_id = k.id
    JOIN woredas AS w ON k.woreda_id = w.id
    JOIN zones AS z ON w.zone_id = z.id
    WHERE o.status = 'Woreda Approval' AND z.id = ?
  `;
  db.query(sql, [zoneId], (err, result) => {
    if (!err) {
      const count = result[0].count;
      res.json({ count });
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

//woreda pending count
const countPendingOrdersForWoredaAdmin = (req, res) => {
  const woredaId = req.params.id;
  const sql = `
    SELECT COUNT(*) AS count
    FROM orders AS o
    JOIN farmers AS f ON o.farmer_id = f.id
    JOIN kebeles AS k ON f.kebele_id = k.id
    JOIN woredas AS w ON k.woreda_id = w.id
    WHERE o.status = 'Pending' AND w.id = ?
  `;
  db.query(sql, [woredaId], (err, result) => {
    if (!err) {
      const count = result[0].count;
      res.json({ count });
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

const countZoneApprovedOrdersForRegionAdmin = (req, res) => {
  const woredaId = req.params.id;
  const sql = `
    SELECT COUNT(*) AS count
    FROM orders AS o
    JOIN farmers AS f ON o.farmer_id = f.id
    JOIN kebeles AS k ON f.kebele_id = k.id
    JOIN woredas AS w ON k.woreda_id = w.id
    JOIN zones AS z ON w.zone_id = z.id
    JOIN regions AS r ON z.region_id = r.id
    WHERE o.status = 'Zone Approval' AND r.id = ?
  `;
  db.query(sql, [woredaId], (err, result) => {
    if (!err) {
      const count = result[0].count;
      res.json({ count });
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  AddOrder,
  getAllOrders,
  getAllOrdersByFarmerId,
  getAllOrdersByWoredaId,
  getAllOrdersByZoneId,
  getAllOrdersByRegionAdminId,
  countPendingOrdersForWoredaAdmin,
  countPendingOrdersForZoneAdmin,
  countZoneApprovedOrdersForRegionAdmin,
  GetSingleOrder,
  UpdateOrder,
  DeleteOrder,
};
