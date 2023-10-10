function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
  
    return {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status
    };
  }
  
  function isNumber(zipCode) {
    if (zipCode && !isNaN(zipCode)) {
      return true
    } else {
      return false
    }
  }
  
  function checkboxIsChecked() {
    var checkbox = document.getElementById("status");
    if (checkbox) {
      return checkbox.checked;
    } else {
      return false;
    }
  }
  
  function validateFormData(props) {
    if (props.name !== "" && props.city !== "" && props.email !== "" && isNumber(props.zipCode) && checkboxIsChecked(props.status)) {
      return true;
    } else {
      return false;
    }
  }
  
  function resetForm() {
    const form = document.querySelector('form');
  
    if (form) {
      const inputs = form.querySelectorAll('input');
  
      inputs.forEach(input => {
        if (input.type === 'text' || input.type === 'number') {
          input.value = '';
        } else if (input.type === 'checkbox') {
          input.checked = false;
        }
      });
    }
  }
  
  function submit() {
    if (!validateFormData(handleGetFormData())) {
      return (document.getElementById('warning').innerText = 'Periksa form anda sekali lagi');
    } else {
      return (document.getElementById('warning').innerText = '');
    }
  }
  
  document.getElementById("submit-form").addEventListener("click", function(event) {
    submit();
    event.preventDefault();
    resetForm()
  });
  