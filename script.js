document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (this.checkValidity()) {
      window.location.href = "images/mp4.mp4";
    } else {
      this.reportValidity();
    }
  });