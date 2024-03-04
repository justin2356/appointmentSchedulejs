const form = document.getElementById("AppointmentForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const address = document.getElementById("address");
const appointmentDate = document.getElementById("AppointmentDate");
const purpose = document.getElementById("purpose");
const career = document.getElementById("career");
const growth = document.getElementById("growth");
const button = document.getElementById("button"); 
const submitButton = document.getElementById("submitButton");

// firstName.addEventListener("click",function (){
// 	console.log(firstName);

// }
// )



// purpose.addEventListener("change", function() {
  
// 	if (purpose.value === "Career") {
//     career.style.display = "block";
// 		growth.style.display = "none";
// 		profChangeCouns.style.display = "none";
// 	} else if (purpose.value === "Growth") {
// 		growthCouns.style.display = "block";
// 		careerCouns.style.display = "none";
// 		profChangeCouns.style.display = "none";
// 	} else if (purpose.value === "Change Of Profession") {
// 		profChangeCouns.style.display = "block";
// 		growthCouns.style.display = "none";
// 		careerCouns.style.display = "none";
// 	} else {
// 		mySelect.style.display = "block";
//     counsError.style.display = "block"
// 		careerCouns.style.display = "none";
// 		growthCouns.style.display = "none";
// 		profChangeCouns.style.display = "none";
// 	}
// });

// form.addEventListener("submit",function(event){
// 	event.preventDefault();

// 	formValidation();

// 	checkAvailability();

// 	let allChecksPassed = true;
// })

// 	 if (
// 	 	fNameError.innerHTML ||
// 	 	phoneNumberError.innerHTML ||
// 	 	emailError.innerHTML ||
// 		addressError.innerHTML ||
// 	 	dateError.innerHTML ||
// 		timeError.innerHTML ||
// 	 	purposeError.innerHTML ||
// 	 	counsError.innerHTML
// 	 ) {
// 	 	allChecksPassed = false;
// 	 }





// 	const availableSlots = [
// 		{ date: "2024-03-21", time: "03:00" },
// 		{ date: "2024-03-23", time: "09:00" },
// 		{ date: "2024-03-25", time: "12:00" },
// 		{ date: "2024-03-30", time: "13:00" },
// 		{ date: "2024-03-31", time: "16:00" },
// 		{ date: "2024-03-04", time: "11:00" },
// 		{ date: "2024-03-05", time: "14:00" },
// 		{ date: "2024-03-08", time: "08:00" },
// 		{ date: "2024-03-10", time: "12:00" },
// 		{ date: "2024-03-15", time: "04:00" },
// 		{ date: "2024-03-16", time: "15:00" },
// 		{ date: "2024-03-18", time: "12:00" },
// 		{ date: "2024-03-20", time: "08:00" },
// 		{ date: "2024-03-25", time: "10:00" },
// 		{ date: "2024-03-28", time: "11:00" },
// 		{ date: "2024-03-30", time: "01:00" },
// 		{ date: "2024-03-05", time: "12:00" },
// 		{ date: "2024-03-09", time: "14:00" },
// 		{ date: "2024-03-15", time: "09:00" },
// 	];
	
// 	function checkAvailability() {
// 		const appointmentDateInput = document.getElementById("datetime");
// 		const appointmentDateval = appointmentDateInput.value;
// 		const appointmentTimeval = appointmentTimeInput.value;
	
// 		let slotFound = false;
	
// 		for (let i = 0; i < availableSlots.length; i++) {
// 			const availableSlot = availableSlots[i];
// 			if (
// 				availableSlot.date === appointmentDateval &&
// 				availableSlot.time === appointmentTimeval
// 			) {
// 				slotFound = true;
// 				break;
// 			}
// 		}
	
// 		const dateError = document.getElementById("dateError");
// 		const timeError = document.getElementById("timeError");
	
// 		if (slotFound) {
// 			dateError = "";
// 			timeError = "";
// 		} else {
// 			appointmentDateInput.value = "";
// 			appointmentTimeInput.value = "";
// 			dateError.innerHTML = "This slot is not available";
// 			dateError.style.color = "red";
// 		dateError.style.fontSize = ".8rem";
// 			timeError.innerHTML = "This slot is not available";
// 			timeError.style.color = "red";
// 		timeError.style.fontSize = ".8rem";
// 		}
// 	}


// button.addEventListener=('click', function(){
// 	console.log('button clicked');
// })