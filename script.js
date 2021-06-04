const slider = document.getElementById("slide");
const toggle = document.getElementById("toggle");
const views = document.getElementById("views-count");
const bill = document.getElementById("bill-month");

slider.addEventListener("input", (e) => {
  const max = 4;
  const targetValue = e.target.value;
  const targetPerc = (targetValue / max) * 100;

  e.target.style.background = `linear-gradient(90deg, 
    var(--softcyan) ${targetPerc}%, 
    var(--lightgrayblue) ${targetPerc}%)`;

  updatePrice(targetValue);

  toggle.checked = false;
});

/* slider range */
function updatePrice(targetValue) {
  if (targetValue === "0") {
    views.innerHTML = `10K`;
    bill.innerHTML = `$8.00`;
  } else if (targetValue === "1") {
    views.innerHTML = `50K`;
    bill.innerHTML = `$12.00`;
  } else if (targetValue === "2") {
    views.innerHTML = `100K`;
    bill.innerHTML = `$16.00`;
  } else if (targetValue === "3") {
    views.innerHTML = `500K`;
    bill.innerHTML = `$24.00`;
  } else {
    views.innerHTML = `1M`;
    bill.innerHTML = `$36.00`;
  }
}

/* slider checked */
toggle.addEventListener("click", (e) => {
  if (slider.value === "0") {
    if (e.target.checked) {
      views.innerHTML = `10K`;
      bill.innerHTML = `$${8 * 0.75}.00`;
    }
  } else if (slider.value === "1") {
    if (e.target.checked) {
      views.innerHTML = `50K`;
      bill.innerHTML = `$${12 * 0.75}.00`;
    }
  } else if (slider.value === "2") {
    if (e.target.checked) {
      views.innerHTML = `100K`;
      bill.innerHTML = `$${16 * 0.75}.00`;
    }
  } else if (slider.value === "3") {
    if (e.target.checked) {
      views.innerHTML = `500K`;
      bill.innerHTML = `$${24 * 0.75}.00`;
    }
  } else if (slider.value === "4") {
    if (e.target.checked) {
      views.innerHTML = `1M`;
      bill.innerHTML = `$${36 * 0.75}.00`;
    }
  }
});
