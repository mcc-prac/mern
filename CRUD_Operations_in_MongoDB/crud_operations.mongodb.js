// MongoDB CRUD Operations (mongosh / MongoDB Shell)

// 1. Create New DB or Switch to Existing DB
use myPracticalDB;

// 2. Listing all the Databases
show dbs;

// 3. Check the DB currently in use
db;

// 4. Drop Database
db.dropDatabase();

// 5. Create Collection (Simple and Capped)
db.createCollection("myCollection");
db.createCollection("cappedCollection", { capped: true, size: 5242880, max: 5000 });

// 6. Drop Collection
db.myCollection.drop();

// 7. Insert Document into Collection
// Single record
db.products.insertOne({ code: "P0", product: "Sample", Qty: 10, status: "Active" });

// Multiple records
db.products.insertMany([
  { code: "P1", product: "bottles", Qty: 100, status: "Active" },
  { code: "P2", product: "bread", Qty: 200, status: "Active" },
  { code: "P3", product: "yogurt", Qty: 0, status: "Inactive" }
]);

// Bulk insertion (Unordered)
var bulk = db.products.initializeUnorderedBulkOp();
bulk.insert({ code: "P4", product: "Cheese", Qty: 150, status: "Active" });
bulk.insert({ code: "P5", product: "Snacks", Qty: 80, status: "Active" });
bulk.execute();

// 8. Retrieve Document from a Collection
db.products.find();
db.products.find({ Qty: { $eq: 100 } }).pretty();

// 9. Update Document in a Collection
db.products.update({ product: "bottles" }, { $set: { Qty: 10 } });

// 10. updateOne()
db.products.updateOne({ product: "bottles" }, { $set: { Qty: 40 } });

// 11. updateMany()
db.products.updateMany({ Qty: { $lt: 30 } }, { $set: { status: "Inactive" } });

// 12. Delete Document of a Collection
db.products.deleteOne({ product: "bread" });
db.products.deleteMany({ product: "bottles" });

// 13. remove() (Deprecated in newer MongoDB versions)
db.products.remove({ product: "yogurt" }, 1);

// 14. Retrieve Distinct
db.products.distinct("product");
db.products.distinct("product", { Qty: { $gte: 20 } });

// 15. Rename collection
db.products.renameCollection("Flare");
show collections;
