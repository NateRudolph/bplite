import two from "./two";

class Thing1 {
    name = two;
};

const test = `
multi line
string comin
atcha
`;

let materials = [
	"thing1",
	"blah",
	"differendddddddddddtlong thing",
	"1"
];

const lengths = materials.map(material => material.length);

console.log(`Does this work??? ${test}`);
console.log(lengths);