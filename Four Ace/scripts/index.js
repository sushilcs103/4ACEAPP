function EditDetails(){
    var Name = $('#lblFullName').text();
    var email = $('#lblEmail').text();
    var mobile = $('#lblMobile').text();
    /*var gender = $('#lblGender').text();*/
    var dob = $('#lblDOB').text();
    var emergencycontact = $('#lblEmergencyContact').text();
    
    $('#lblFullName').hide();
    $('#lblEmail').hide();
    $('#lblMobile').hide();
    $('#lblGender').hide();
    $('#lblDOB').hide();
    $('#lblEmergencyContact').hide();
    $('#btnEdit').hide();
    $('#btnSave').show();
    $('#btnCancel').show();
    
    $('#txtFullname').val(Name);
    
    $('#txtEditEmail').val(email);
    
    $('#txtMobile').val(mobile);
    
    $('#txtDOB').val(dob);
    $('#txtEmergencyContact').val(emergencycontact);
    
    $('#txtFullname').show();
    $('#txtEditEmail').show();
    $('#selGender').show();
    $('#txtDOB').show();
    $('#txtMobile').show();
    $('#txtEmergencyContact').show();
}

function CancelDetails()
{
    $('#lblFullName').show();
    $('#lblEmail').show();
    $('#lblMobile').show();
    $('#lblGender').show();
    $('#lblDOB').show();
    $('#lblEmergencyContact').show();
    $('#btnEdit').show();
    $('#btnSave').hide();
    $('#btnCancel').hide();
     $('#txtFullname').hide();
    $('#txtEditEmail').hide();
    $('#selGender').hide();
    $('#txtDOB').hide();
    $('#txtMobile').hide();
    $('#txtEmergencyContact').hide();
}
function SaveDetails(){
    
}