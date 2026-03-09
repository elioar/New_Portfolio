document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();

    var form = this;
    var submitBtn = document.getElementById('js-submit');
    var errEl = document.querySelector('.c-error');
    var originalBtnText = submitBtn ? submitBtn.textContent : '';

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    // Advance to Thank You immediately
    if (typeof window.__contactSubmitSuccess === 'function') {
        window.__contactSubmitSuccess();
    }

    var formData = new FormData(form);

    fetch("https://formspree.io/f/xdkoebln", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            if (errEl) errEl.classList.remove('--visible');
        } else {
            throw new Error('Submission failed');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    })
    .finally(function() {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText || 'Send Message';
        }
    });
});