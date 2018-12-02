// This file is in the entry point in your webpack config.

const addNewUser = () => {
  console.log("Now in the addNewUser function");
  fetch(`https://secret-ocean-30502.herokuapp.com/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: $("#email").val(),
      zip_code: $("#zip-code").val(),
      phone_number: $("#phone-number").val(),
      password_digest: $("#password").val(),
      password_confirmation: $("#password-confirm").val()
    })
  })
  .then(loginUser())
};

const logInfo = () => {
  console.log("FETCHED!");

};

$('#register-button').on('click', addNewUser);
