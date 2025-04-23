// 1.первая задача
const obj1 = {
    name: "Муаттар",
    age: 16,
    info: {
        city: "Samarkand",
        student: true
    }
};

const obj2 = {
    country: "Uzbekistan",
    profession: "Student"
};

// 2. 
const merged = { ...obj1, ...obj2 };

// 3. 
const ключи = Object.keys(merged);

// 4. 
const значения = Object.values(merged);

// 5. 
const объединено = [...ключи, ...значения];

// 6. 
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
};


объединено.forEach(item => {
    const type = typeof item;
    
    if (types.hasOwnProperty(type)) {
        types[type].push(item);
    }
});

console.log("Объединённый объект:", merged);
console.log("Ключи:", ключи);
console.log("Значения:", значения);  
console.log("Всё вместе:", объединено);
console.log("По типам:", types);
