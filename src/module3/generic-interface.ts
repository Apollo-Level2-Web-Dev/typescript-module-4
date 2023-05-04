// Generic Interface

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
  other: V;
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
  name: "Kate",
  husband: {
    name: "Persian",
    age: 30,
  },
  wife: {
    name: "Winslet",
    age: 40,
  },
};

const crush1: CrushInterface<boolean, string> = {
  name: "Kate Winslet",
  husband: true,
  wife: "Chokina",
};

const crush2: CrushInterface<string> = {
  name: "Kate Winslet",
  husband: "Persian",
};

interface HusbandInterface {
  name: string;
  salary: number;
}

const crush3: CrushInterface<HusbandInterface> = {
  name: "Kate Winslet",
  husband: {
    name: "Persian",
    salary: 0.01,
  },
};

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];

// type RelationWithSalaryType = { name: string; salary: number };

interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: "Persian",
    salary: 1000000000,
  },
  "Kate Winslet",
];

const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
  {
    name: "Persian",
    salary: 1000000000,
  },
  "Kate Winslet",
];

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rolllNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
  {
    name: "Mr. X",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];

add(x, y, z);
add(3, 4, 5);
