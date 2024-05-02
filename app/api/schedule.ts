// mongodb username: zoekangdeveloper
// mongodb pw: ix3MHhPLXuDXcjaT

import { connectDB, getAllDocument } from "@/util/db-util";

// mongodb+srv://zoekangdeveloper:ix3MHhPLXuDXcjaT@schedules.hbxstud.mongodb.net/?retryWrites=true&w=majority&appName=Schedules

// export async function handler(req: Request, res: Response) {
//   let client;
//   try {
//     client = await connectDB();
//   } catch (error) {
//     throw Error("DB 연결 실패");
//   }

//   const schedules = await getAllDocument(client, 'schedules', {created_date: 1})

//   return schedules;
// }
