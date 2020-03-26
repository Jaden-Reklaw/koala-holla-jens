console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {};
    koalaToSend.name = $('#nameIn').val();
    koalaToSend.age = $('#ageIn').val();
    koalaToSend.gender = $('#genderIn').val();
    koalaToSend.readyForTransfer = $('#readyForTransferIn').val();
    koalaToSend.notes = $('#notesIn').val();
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log('getKoalas response is',response);
    renderKoalas(response)
  }).catch(function(error){
    console.log('error in GET', error);
  });
} // end getKoalas

function renderKoalas(koalas) {
  for (let koala of koalas) {
    $('#viewKoalas').append(`<tr>`)
    $('#viewKoalas').append(`<td>${koala.name}</td>`)
    $('#viewKoalas').append(`<td>${koala.age}</td>`)
    $('#viewKoalas').append(`<td>${koala.gender}</td>`)
    if (koala.ready_to_transfer === 'Y'){
      $('#viewKoalas').append(`<td></td>`)
    } else {
      $('#viewKoalas').append(`<td><button type="button" class="btn btn-outline-secondary" id="${koala.id}">Ready to Transfer</button></td>`)
    }
    $('#viewKoalas').append(`<td>${koala.notes}</td>`)
    $('#viewKoalas').append(`<td><button type="button" class="btn btn-outline-secondary" id="${koala.id}">Delete</button></td>`)
    $('#viewKoalas').append(`</tr>`)
  }
}

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#genderIn').val('');
  $('#readyForTransferIn').val('');
  $('#notesIn').val('');
  
}