const form = document.getElementById('contact-form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  addContact(name, phone);
  form.reset();
});

function addContact(name, phone) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
  `;
  tbody.appendChild(newRow);
}
