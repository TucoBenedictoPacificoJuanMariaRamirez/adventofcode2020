// First task
const lines = $("pre").innerHTML.split('\n');
for (let i = 0;i < lines.length;i++)
	for(let j = i + 1; j < lines.length;j++)
		if (parseInt(lines[i]) + parseInt(lines[j]) == 2020)
			console.log("Result: " + lines[i] + " * " + lines[j] + " = " + (parseInt(lines[i]) * parseInt(lines[j])));

// Second task
const lines = $("pre").innerHTML.split('\n');
for (let i = 0;i < lines.length;i++)
	for(let j = i + 1; j < lines.length;j++)
		if (parseInt(lines[i]) + parseInt(lines[j]) < 2020)
			for(let k = j + 1; k < lines.length;k++)
				if (parseInt(lines[i]) + parseInt(lines[j]) + parseInt(lines[k]) == 2020)
					console.log("Result: " + lines[i] + " * " + lines[j] + " * " + lines[k] + " = " + (parseInt(lines[i]) * parseInt(lines[j]) * parseInt(lines[k])));
