const mongoose = require("mongoose");
require("dotenv").config();

const SOURCE_DB = process.env.SOURCE_DB || "ecommerceDB";
const TARGET_DB = process.env.TARGET_DB || "appointmentDB";
const COLLECTION = "appointments";

async function main() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in .env");
  }

  const sourceConn = await mongoose
    .createConnection(process.env.MONGO_URI, { dbName: SOURCE_DB })
    .asPromise();

  const targetConn = await mongoose
    .createConnection(process.env.MONGO_URI, { dbName: TARGET_DB })
    .asPromise();

  try {
    const sourceAppointments = await sourceConn
      .collection(COLLECTION)
      .find({})
      .toArray();
    let copied = 0;

    for (const appointment of sourceAppointments) {
      const { _id, ...rest } = appointment;
      const result = await targetConn.collection(COLLECTION).updateOne(
        { name: rest.name, email: rest.email, date: rest.date, time: rest.time, service: rest.service },
        { $setOnInsert: rest },
        { upsert: true }
      );

      if (result.upsertedCount > 0) {
        copied += 1;
      }
    }

    console.log(
      `Copied ${copied} appointment(s) from ${SOURCE_DB}.${COLLECTION} to ${TARGET_DB}.${COLLECTION}`
    );
  } finally {
    await sourceConn.close();
    await targetConn.close();
  }
}

main().catch((error) => {
  console.error("Migration failed:", error.message);
  process.exit(1);
});
