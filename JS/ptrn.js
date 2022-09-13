let list = [2,2,1,5,3];

for (let i=0; i<list.length; i++) {
  for (let j=0; j<list[i]; j++) {
    process.stdout.write("*"); // console.log without trailling new line
  }
  console.log();
}
