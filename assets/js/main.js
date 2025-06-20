
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('registerSuccess').classList.remove('d-none');
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('loginPending').classList.remove('d-none');
});


document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('hidden.bs.modal', function() {
        const forms = modal.querySelectorAll('form');
        forms.forEach(form => form.reset());
        
        const registerForm = modal.querySelector('#registerForm');
        const registerSuccess = modal.querySelector('#registerSuccess');
        const loginForm = modal.querySelector('#loginForm');
        const loginPending = modal.querySelector('#loginPending');
        
        if (registerForm) registerForm.classList.remove('d-none');
        if (registerSuccess) registerSuccess.classList.add('d-none');
        if (loginForm) loginForm.classList.remove('d-none');
        if (loginPending) loginPending.classList.add('d-none');
    });
});

document.addEventListener('DOMContentLoaded', function () {
	const ageVerification = document.getElementById('age-verification')
	const ageYesBtn = document.getElementById('age-yes')
	const ageNoBtn = document.getElementById('age-no')

	const urlParams = new URLSearchParams(window.location.search)
	const isVerifiedInURL = urlParams.get('age-verification') === 'true'

	// Show modal if URL does not include the verification parameter
	if (!isVerifiedInURL) {
		ageVerification.style.display = 'flex'
	} else {
		ageVerification.style.display = 'none'
	}

	// User confirms they are 18+
	ageYesBtn.addEventListener('click', function () {
		// Add ?age-verification=true to URL and reload
		urlParams.set('age-verification', 'true')
		const newUrl = window.location.pathname + '?' + urlParams.toString()
		window.location.href = newUrl
	})

	// User is under 18
	ageNoBtn.addEventListener('click', function () {
		window.location.href = 'https://www.google.com'
	})
})