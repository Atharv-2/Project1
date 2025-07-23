function addInputRow() {
  const container = document.getElementById("custom-input-rows");

  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.style.margin = "10px 40px";
  row.style.gap = "10px";

  // Create inputs
  const srNo = document.createElement("input");
  srNo.type = "text";
  srNo.placeholder = "Sr.No";
  srNo.style.width = "100px";
  srNo.style.border = "1px solid purple";
  srNo.style.outline = "none";

  const productName = document.createElement("input");
  productName.type = "text";
  productName.placeholder = "Product Name";
  productName.style.width = "250px";
  productName.style.border = "1px solid purple";
  productName.style.outline = "none";

  const hsn = document.createElement("input");
  hsn.type = "text";
  hsn.placeholder = "HSN/SAC";
  hsn.style.width = "120px";
  hsn.style.border = "1px solid purple";
  hsn.style.outline = "none";
  hsn.style.marginRight = "20px";

  const qty = document.createElement("input");
  qty.type = "number";
  qty.placeholder = "Qty";
  qty.style.width = "80px";
  qty.style.border = "1px solid purple";
  qty.style.outline = "none";

  const rate = document.createElement("input");
  rate.type = "number";
  rate.placeholder = "Rate";
  rate.style.width = "100px";
  rate.style.border = "1px solid purple";
  rate.style.outline = "none";
  rate.style.marginLeft = "50px"

  const total = document.createElement("input");
  total.type = "text";
  total.placeholder = "Total";
  total.style.width = "120px";
  total.style.border = "1px solid purple";
  total.style.outline = "none";
  total.readOnly = true;

  // Event: Auto-calculate total when qty or rate changes
  function calculateTotal() {
    const q = parseFloat(qty.value) || 0;
    const r = parseFloat(rate.value) || 0;
    total.value = (q * r).toFixed(2);
     updateGrandTotal();
  }

  qty.addEventListener("input", calculateTotal);
  rate.addEventListener("input", calculateTotal);

  // Append inputs to row
  row.appendChild(srNo);
  row.appendChild(productName);
  row.appendChild(hsn);
  row.appendChild(qty);
  row.appendChild(rate);
  row.appendChild(total);
  container.appendChild(row);
}

function updateGrandTotal() {
  let grandTotal = 0;

  const totalInputs = document.querySelectorAll('#custom-input-rows input[placeholder="Total"]');

  totalInputs.forEach(input => {
    const value = parseFloat(input.value) || 0;
    grandTotal += value;
  });

  // Display it (add this span in HTML if you haven't)
  document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
}
