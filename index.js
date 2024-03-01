const fname = document.getElementById('form-name');
const lname = document.getElementById('form-email');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "16794895-bf3c-4e71-bb27-75293a6e60d8", //add your token here
        To : 'harikishore651@gmail.com', 
        From : "harikishore651@gmail.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});