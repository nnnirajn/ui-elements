const notificationBox = document.querySelector('.notification-box');

	let successMsg = '<i class="fa-solid fa-circle-check"></i> This is success message'; 
	let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> This is error message'; 
	let warningMsg = '<i class="fa-solid fa-circle-exclamation"></i> This is warning message'; 

function showToast(msg) {

	let toast = document.createElement('div');
	
	toast.classList.add('toast');
	notificationBox.appendChild(toast);
	toast.innerHTML = msg;

	msg.includes("success") ? toast.classList.add('success') : "";
	msg.includes("error") ? toast.classList.add('error') : "";
	msg.includes("warning") ? toast.classList.add('warning') : "";

	setTimeout(() => {
		toast.remove();
	}, 5000);
}




