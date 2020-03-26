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
    addKoala();
  });
  $('#viewKoalas').on('click', '.toggle', function () {
    console.log('toggle on click', this.id);
    updateStatus(this.id);
  });
  $('#viewKoalas').on('click', '.delete', function () {
    console.log('delete on click', this.id);
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
    renderKoalas(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
} // end getKoalas

function addKoala() {
  let koalaToAdd = {};
  koalaToAdd.name = $('#nameIn').val();
  koalaToAdd.age = $('#ageIn').val();
  koalaToAdd.gender = $('#genderIn').val();
  koalaToAdd.readyForTransfer = $('#readyForTransferIn').val();
  koalaToAdd.notes = $('#notesIn').val();
  console.log('in addKoala', koalaToAdd);
  // ajax call to server to get koalas
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#genderIn').val('');
  $('#readyForTransferIn').val('');
  $('#notesIn').val('');
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koalaToAdd,
    }).then(function(response) {
      console.log('Response from server.', response);
      getKoalas();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add koala at this time. Please try again later.');
    });
}

// Update status when you click on a book 
function updateStatus(koalaId) {
  console.log('updateStatus');
  
  $.ajax({
    method: "PUT",
    url: `/books/${koalaId}`,
    data: {status: 'Y'}
  }).then(function(response) {
    console.log('Got a response from server after item deleted', response);
    refreshBooks();
  }).catch(function(error) {
    console.log('Got an error', error);
  });
}

function renderKoalas(koalas) {
  $('#viewKoalas').empty();
  for (let koala of koalas) {
    $('#viewKoalas').append(`<tr>`);
    $('#viewKoalas').append(`<td>${koala.name}</td>`);
    $('#viewKoalas').append(`<td>${koala.age}</td>`);
    $('#viewKoalas').append(`<td>${koala.gender}</td>`);
    if (koala.ready_to_transfer === 'Y'){
      $('#viewKoalas').append(`<td>Ready</td>`);
    } else {
      $('#viewKoalas').append(`<td><button type="button" class="btn btn-outline-secondary toggle" id="${koala.id}">Set as Ready</button></td>`);
    }
    $('#viewKoalas').append(`<td>${koala.notes}</td>`);
    $('#viewKoalas').append(`<td><button type="button" class="btn btn-outline-secondary delete" id="${koala.id}">Delete</button></td>`);
    $('#viewKoalas').append(`</tr>`);
  }
}
