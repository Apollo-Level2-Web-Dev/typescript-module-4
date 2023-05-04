// const searchStudent = (searchTerm: string | null) => {
//   if (searchTerm === null) {
//     console.log(`There is no search term.`);
//   } else {
//     console.log(`Searching.`);
//   }
// };

// searchStudent(null);

// const getSpeed = (param: unknown) => {
//   if (typeof param === "string") {
//     const speed = param.split(" ");
//     console.log(`Speed is ${speed[0]}`);
//   } else if (typeof param === "number") {
//     console.log(`Speed is ${param}`);
//   } else {
//     console.log(" Dure gia moro");
//   }
// };

// getSpeed(10);

// getSpeed("10 kmh^-1");

// type myCrush = {
//   name: string;
// };

// function fetchData() {
//   return new Promise<myCrush>((resolve, reject) => {
//     // perform some asynchronous operation, such as fetching data from a server
//     const data = "Some data fetched from the server";
//     if (data) {
//       resolve({ name: "Kate" });
//     } else {
//       reject("Failed to fetch data from the server");
//     }
//   });
// }

// async function fetchAndLogData() {
//   try {
//     const data = await fetchData();
//     console.log("Fetched data:", data);
//   } catch (error: unknown) {
//     console.error("Failed to fetch data:", error);
//   }
// }

// type customErr = {
//   message: string;
// };
// try {
// } catch (error) {
//   (error as customErr).message;
// }

// type Operation = "add" | "concat";

// const calculateMath = (num1: number, num2: number, operation: Operation) => {
//   if (operation === "add") {
//     return num1 + num2;
//   }
//   return num1.toString() + num2.toString();
// };

// const res: string = calculateMath(2, 2, "add") as string;
// const res2: string = calculateMath(2, 2, "concat") as string;

// let baby: any;
// baby = "hi";

// const l = (baby as string).length;
