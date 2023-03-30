const avatar = document.querySelector(".avatar");
const dialogs = document.querySelectorAll(".dialog");
const dialogState = document.querySelector(".dialog-state");
let numDialog = 1;
let dialogArrival = false;

avatar.addEventListener("click", () => {
	if (numDialog === dialogs.length || dialogArrival) return;

	dialogArrival = true;

	const prevDialog = dialogs[numDialog - 1];
	const nextDialog = dialogs[numDialog];
	prevDialog.classList.remove("active");
	nextDialog.classList.add("active");

	dialogState.innerHTML = `${numDialog}/${dialogs.length - 1}`;

	numDialog++;

	setTimeout(() => {
		dialogArrival = false;
	}, 1000);
});
