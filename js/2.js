// First task
let policyPasswordObjects = [];

// Get raw lines
const lines = $("pre").innerHTML.split('\n');

// Create individual objects
lines.forEach(line => createPolicyPasswordObject(line));
console.log(policyPasswordObjects);

// Count how many pass the first policy task
let count = 0;
policyPasswordObjects.forEach(p => checkPolicyForFirstTask(p));
console.log("Number of passwords that pass the first policy test: " + count);

// Count how many pass the second policy task
count = 0;
policyPasswordObjects.forEach(p => checkPolicyForSecondTask(p));
console.log("Number of passwords that pass the second policy test: " + count);

function createPolicyPasswordObject(line) {
	if(line == "" || line === null || line === undefined)
		return;
	var policyPasswordObject = new Object();
	policyPasswordObject.minCount = parseInt(line.split(' ')[0].split('-')[0]);
	policyPasswordObject.maxCount = parseInt(line.split(' ')[0].split('-')[1]);
	policyPasswordObject.policyLetter = line.split(' ')[1][0];
	policyPasswordObject.password = line.split(':')[1].trim();
	policyPasswordObjects.push(policyPasswordObject);
}

function checkPolicyForFirstTask(obj) {
	const c = obj.password.match(new RegExp(obj.policyLetter, 'g'));
	if(c === null)
		return;
	if(c.length >= obj.minCount && c.length <= obj.maxCount)
		count++;
}

function checkPolicyForSecondTask(obj) {
	if((obj.password[obj.minCount - 1] == obj.policyLetter &&
	   obj.password[obj.maxCount - 1] != obj.policyLetter) ||
	   (obj.password[obj.minCount - 1] != obj.policyLetter &&
	   obj.password[obj.maxCount - 1] == obj.policyLetter))
	   count++;
}
