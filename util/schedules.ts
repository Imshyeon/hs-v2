// mongodb username: zoekangdeveloper
// mongodb pw: ix3MHhPLXuDXcjaT

import { connectDB } from "./db-util";
import { getAllDocument } from "./db-util";

// mongodb+srv://zoekangdeveloper:ix3MHhPLXuDXcjaT@schedules.hbxstud.mongodb.net/?retryWrites=true&w=majority&appName=Schedules

export async function getAllSchedules() {
  let client = await connectDB();

  try {
    client = await connectDB();
  } catch (error) {
    throw Error("DB 연결 실패");
  }

  const schedules = await getAllDocument(client, "comments", {
    date: 1,
  });

  return schedules;
}
