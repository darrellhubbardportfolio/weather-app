
const ratePlanForm = document.getElementById('ratePlanForm');
const ratePlanInput = document.querySelector('input[name="ratePlan"]');
const ratePlanBtns = document.querySelectorAll('.edit-rate-plan-btn');

ratePlanBtns.forEach(btn => {

    btn.addEventListener('click', (ev) => {
        
        const newRate = ev.target.dataset.value;

        // check actual value;
        console.log("Selected Rate Plan:", newRate);

        // change the rate plan value.
        ratePlanInput.value = newRate;

        toggleActiveClass();

        // toggle the class name of the target to active;
        ev.target.classList.add('active');
    });
});

// make sure there are no duplicate rates with class .active
function toggleActiveClass() {
    
    const activeBtns = document.querySelectorAll('.edit-rate-plan-btn.active');
    activeBtns.forEach(activeBtn => {
        activeBtn.classList.remove('active');
    });
}

ratePlanForm.addEventListener('submit', function(event) {

    event.preventDefault();
    const ratePlan = getRatePlan();
    updateRatePlanDisplay(ratePlan);
    // You can also send the rate plan to the server here if needed
});

function getRatePlan() {
    const ratePlan = document.querySelector('input[name="ratePlan"]').value;
    return ratePlan;
}

function setRatePlan(ratePlan) {
    const ratePlanInput = document.querySelector('input[name="ratePlan"]');
    ratePlanInput.value = ratePlan;
}

function clearRatePlan() {
    const ratePlanInput = document.querySelector('input[name="ratePlan"]');
    ratePlanInput.value = '';
}

function updateRatePlanDisplay(ratePlan) {
    const planList = document.getElementById('plan');
    planList.textContent = `Selected Rate Plan: ${ratePlan}`;
}