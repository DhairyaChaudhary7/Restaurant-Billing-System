const prices = {
  'Pancakes': 120,
  'Omelette': 100,
  'Toast': 60,
  'Rice & Curry': 200,
  'Thali': 220,
  'Dal Makhani': 180,
  'Paneer Butter Masala': 230,
  'Butter Naan': 40,
  'Biryani': 250,
  'Pizza': 250,
  'Burger': 150,
  'Fries': 100,
  'Noodles': 180,
  'Coke': 50,
  'Coffee': 80,
  'Tea': 40,
  'Juice': 60
};
&nbsp;
&nbsp;

function addItemRow() {
  const itemRow = document.createElement('div');
  itemRow.className = 'item-row';
  const options = '<option value="None">-- None --</option>' + Object.keys(prices).map(item => `<option value="${item}">${item} - ₹${prices[item]}</option>`).join('');
  itemRow.innerHTML = `
    <select class="food-select">
      ${options}
    </select>
    <input type="number" class="quantity" placeholder="Qty" min="1" value="1">
  `;
  document.getElementById('items').appendChild(itemRow);
}
&nbsp;
&nbsp;

function generateRestaurantBill() {
  const customer = document.getElementById('customer').value;
  const selects = document.querySelectorAll('.food-select');
  const quantities = document.querySelectorAll('.quantity');
&nbsp;
&nbsp;

  let billDetails = '';
  let total = 0;
&nbsp;
&nbsp;

  billDetails += `<h2>Bill for ${customer}</h2><ul>`;
&nbsp;
&nbsp;

  for (let i = 0; i < selects.length; i++) {
    const item = selects[i].value;
    if (item === 'None') continue;
    const qty = parseInt(quantities[i].value);
    const cost = prices[item] * qty;
    total += cost;
    billDetails += `<li>${item} x${qty} = ₹${cost}</li>`;
  }
&nbsp;
&nbsp;

  const tax = total * 0.05;
  const finalTotal = total + tax;
&nbsp;
&nbsp;

  billDetails += `</ul>`;
  billDetails += `<p><strong>Subtotal:</strong> ₹${total}</p>`;
  billDetails += `<p><strong>Tax (5%):</strong> ₹${tax.toFixed(2)}</p>`;
  billDetails += `<p><strong>Total Amount:</strong> ₹${finalTotal.toFixed(2)}</p>`;
&nbsp;
&nbsp;

  document.getElementById('bill').innerHTML = billDetails;
}
&nbsp;
&nbsp;

function clearBill() {
  document.getElementById('bill').innerHTML = '';
}
