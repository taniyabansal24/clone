let totalPrice = 174900.00;
let selectedBox1 = "box1";
let selectedBox2 = "box3";

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

function toggleBorderPricing1(box) {
    if (selectedBox1 !== box.id) {
        const boxes = document.querySelectorAll('#pricing1 .box');
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
        selectedBox1 = box.id;
        if (box.id === "box2") {
            totalPrice += 20000;
        } else {
            totalPrice -= 20000;
        }
        document.getElementById('price').innerText = totalPrice.toFixed(2);
    }
}

function toggleBorderPricing2(box) {
    if (selectedBox2 !== box.id) {
        const boxes = document.querySelectorAll('#pricing2 .box');
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
        selectedBox2 = box.id;
        if (box.id === "box4") {
            totalPrice += 20000;
        } else {
            totalPrice -= 20000;
        }
        document.getElementById('price').innerText = totalPrice.toFixed(2);
    }
}

function toggleBorderPricing3(box) {
    if (selectedBox2 !== box.id) {
        const boxes = document.querySelectorAll('#pricing3 .box');
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
        selectedBox2 = box.id;
        if (box.id === "box5") {
            totalPrice += 20000;
        } else {
            totalPrice -= 20000;
        }
        document.getElementById('price').innerText = totalPrice.toFixed(2);
    }
}
