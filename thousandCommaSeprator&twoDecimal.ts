///////////////////////////////////////////

let displayedAmount = this.totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })


///////////////////////////////////////////////////

  numberWithCommas(n) {
    const parts = parseFloat(n).toFixed(2).toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
  }

  let ress = numberWithCommas(1000000)
  console.log(ress) => 1,000,000.00
