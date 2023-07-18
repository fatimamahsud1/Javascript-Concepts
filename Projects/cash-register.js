function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  const changeObj = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01,
  };

  const totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

  
  if (parseFloat(totalCashInDrawer) === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  const changeToGive = [];

 
  for (const [denomination, value] of cid.reverse()) {
    const denominationValue = changeObj[denomination];
    let numberOfNotes = Math.floor(value / denominationValue);

    if (changeDue >= denominationValue) {
      let notesToReturn = Math.min(numberOfNotes, Math.floor(changeDue / denominationValue));
      let amountToDeduct = notesToReturn * denominationValue;

      changeDue = (changeDue - amountToDeduct).toFixed(2);
      changeToGive.push([denomination, amountToDeduct]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeToGive };
}

const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

console.log(checkCashRegister(19.5, 20, cid));
