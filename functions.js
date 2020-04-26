const userId = document.getElementById('userId');
const firstName = document.getElementById('phonenumber');
const lastName = document.getElementById('address');
const age = document.getElementById('pincode');
const addBtn = document.getElementById('addBtn');


const database = firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(userId.value).set({
    contact_number: phonenumber.value,
    pickup_address: address.value,
    area_pincode: pincode.value
  });
});



addBtn.addEventListener('click',(e) => {
    e.preventDefault();
});