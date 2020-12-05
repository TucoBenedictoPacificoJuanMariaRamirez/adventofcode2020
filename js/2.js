// First task
let policyPasswordObjects = [];

// Get raw lines
const lines = $("pre").innerHTML.split('\n');

// Create individual objects
lines.forEach(line => createPolicyPasswordObject(line));
console.log(policyPasswordObjects);

// Count how many pass the policy
let count = 0;
policyPasswordObjects.forEach(p => checkPolicy(p));
console.log("Number of passwords that pass the policy test: " + count);

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

function checkPolicy(obj) {
	const c = obj.password.match(new RegExp(obj.policyLetter, 'g'));
	if(c === null)
		return;
	if(c.length >= obj.minCount && c.length <= obj.maxCount)
		count++;
}
