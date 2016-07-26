function deadlines(grandOpeningDate) {
  deadlines = {};

  deadlines.promosAndCondToDig = new Date(grandOpeningDate - 28*24*60*60*1000).toString();
  deadlines.signInfoToSigns    = new Date(grandOpeningDate - 26*24*60*60*1000).toString();
  deadlines.signProofDeadline  = new Date(grandOpeningDate - 24*24*60*60*1000).toString();
  deadlines.activation         = new Date(grandOpeningDate -  3*24*60*60*1000).toString();

  return deadlines;
}

console.log(deadlines(new Date(2016, 6, 1)));
