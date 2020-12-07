var unityInstance;
var savedForm = new Array(9).fill("");

function assignUnityInstance(instance){
	unityInstance = instance;
}

async function openDialog() {
    const {
        value: formValues
    } = await Swal.fire({

        position: 'top',
        allowOutsideClick: false,
        title: 'Enter your contact informations',
        html: `
            <div style="display:flex;flex-direction:row;flex-wrap: wrap;" onload="recoverInputs();" id="main_node">

              <div style="flex: 1 0 39%;">
                <input id="firstName" type="text" name="firstname" placeholder="First name" class="swal2-input">
              </div>
              <div style="flex: 1 0 2%;"></div>
              <div style="flex: 1 0 59%;">
                <input id="lastName" name="lastname" placeholder="Last name" class="swal2-input">
              </div>

              <div style="flex: 0 1 100%">
                <input id="email" name="email" type="email" placeholder="email" class="swal2-input">
                <input id="phone" name="phone" type="tel" placeholder="phone" class="swal2-input">
              </div>
              <div style="flex: 0 1 69%">
               <input id="add_street" name="add_street" type="text" placeholder="street name" class="swal2-input">
              </div>

              <div style="flex: 0 1 2%;"></div>
              <div style="flex: 0 1 29%">
                <input id="add_st_number" name="add_number" type="number" placeholder="number" class="swal2-input">
              </div>
              <div style="flex: 0 1 100%">
                <input id="add_city" name="add_city" type="text" placeholder="City" class="swal2-input">
              </div>
              <div style="flex: 0 1 69%">
               <input id="add_state" name="add_state" type="text" placeholder="State/Province" class="swal2-input">
              </div>

              <div style="flex: 0 1 2%;"></div>
              <div style="flex: 0 1 29%">
                <input id="add_zip" name="add_zip" type="number" placeholder="zip code" class="swal2-input">
              </div>


            </div>
            `,
        //focusConfirm: false,  
        showConfirmButton: true,
        confirmButtonText: "Submit",        
        preConfirm: () => {
            let mailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
            if (!(	document.getElementById("firstName").value &&
                    document.getElementById("lastName").value &&
                    document.getElementById("email").value &&
                    document.getElementById("phone").value &&

                    document.getElementById("add_street").value &&
                    document.getElementById("add_st_number").value &&

                    document.getElementById("add_city").value &&
                    document.getElementById("add_state").value &&

                    document.getElementById("add_zip").value &&
                    (document.getElementById("email").value) && document.getElementById("email").value.match(mailRegex))) {
                Swal.showValidationMessage("Please fill out all required fields correctly");
            } else {
                return [
                    document.getElementById("firstName").value,
                    document.getElementById("lastName").value,
                    document.getElementById("email").value,
                    document.getElementById("phone").value,

                    document.getElementById("add_street").value,
                    document.getElementById("add_st_number").value,


                    document.getElementById("add_city").value,


                    document.getElementById("add_state").value,
                    document.getElementById("add_zip").value,
                ];
            }
        },
    }).then(recoverInputs());





    if (formValues) {
    	saveInputs(formValues);
        var player = JSON.stringify({
            first_name: formValues[0],
            last_name: formValues[1],
            email: formValues[2],
            phone_number: formValues[3],

            add_street: formValues[4],
            add_st_number: formValues[5],

            add_city: formValues[6],

            add_state: formValues[7],
            add_zip: formValues[8]
        });
        unityInstance.SendMessage('CONTENT MANAGER', 'ReceivePlayerData', player);
    }
}

function recoverInputs(){
	var x = document.getElementById("main_node").querySelectorAll(".swal2-input"); 

	for (var i = 0; i < x.length; i++) {
  		x[i].value = savedForm[i];
	}
}

function saveInputs(form){
	savedForm = form;
}