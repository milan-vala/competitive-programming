let n=5;
for (let i=1; i<=10; i++) {
  for (let k=1; k<=n; k++) {
    for (let j=1; j<=10; j++) {
      if (i==1) {
        if (j>4) {
          process.stdout.write("*");
        } else {
          process.stdout.write(" ");
        }
      } else if (i==10) {
        if (j<6 || j==10) {
          process.stdout.write("*");
        } else {
          process.stdout.write(" ");
        }
      } else {
        if (j==5 || j==10) {
          process.stdout.write("*");
        } else {
          process.stdout.write(" ");
        }
      }
    }
   }
   console.log();
}
