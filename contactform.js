document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Συλλογή όλων των δεδομένων της φόρμας
    const formData = new FormData(this);
    
    // Αποστολή στο Formspree
    fetch("https://formspree.io/f/xdkoebln", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Συνεχίζουμε με την υπάρχουσα ροή της φόρμας
            td.next_query();
            
            // Ανακατεύθυνση μετά από 3 δευτερόλεπτα
            setTimeout(() => {
                window.location.href = "https://www.instagram.com/elio.dev";
            }, 3000);
        } else {
            throw new Error('Submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.querySelector('.c-error').style.display = 'block';
    });
}); 