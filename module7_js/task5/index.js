const info = {
    name: "Globus",
    age: 14,
    gender: "male",
    country: "Ukraine",
}

let str = "";

for (const key in info) {
    console.log(`Key:${key}`);
    console.log(`Value:${info[key]}`);
    str += info[key];
};


console.log(str);