// Creating Vehicle constructor

function Vehicle(name, description, type, cost_per_km) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost_per_km = cost_per_km;
}

// Creating TwoWheeler constructor
function TwoWheeler() {}

// Inheriting properties of Vehicle using prototype 
TwoWheeler.prototype = Object.create(Vehicle.prototype);
TwoWheeler.prototype.constructor = TwoWheeler;

// Creating FourWheeler constructor
function FourWheeler() {}

// Inheriting properties of Vehicle using prototype 
FourWheeler.prototype = Object.create(Vehicle.prototype);
FourWheeler.prototype.constructor = FourWheeler;

// Declaring vehicleObject variable
var vehicleObject;

// Fetching elements by it's ids
var vehicleBtn = document.getElementById('vehicleBtn');
var vname = document.getElementById('name');
var description = document.getElementById('desc');
var type = document.getElementById('type');
var cost_per_km = document.getElementById('cost_per_km');

// Function used to display contents after submitting the form
var displayContent = function (vehicleObject) {
    document.getElementById('displayForm').style.display = 'none';

    var displaycontainer = document.getElementById('displayContent');
    displaycontainer.style.display = 'block';

    // setting header according to the vehicle type
    if (vehicleObject.type == '4') {
        document.getElementById('header').innerText = 'Four Wheeler Details';
    } else {
        document.getElementById('header').innerText = 'Two Wheeler Details';
    }

    // setting contents to the respective elements
    document.getElementById('content_name').innerText = "Name: " + vehicleObject.name;
    document.getElementById('content_desc').innerText = "Description: " + vehicleObject.description;
    document.getElementById('cost').innerText = "Cost per Km: " + vehicleObject.cost_per_km;
    document.getElementById('content_type').innerText = "Vehicle type- " + vehicleObject.type + "Wheeler";

    // display fuel types 
    if (vehicleObject.type == '4') {
        var paragraph = document.createElement('p');
        paragraph.innerText = "Fuel Type- " + vehicleObject.fuelType;
        displaycontainer.appendChild(paragraph);
    }
};

// Attaching event handler on form submit
vehicleBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    if (type.value == '4') {
        // Creating FourWheeler object and assign it to vehicleObject as per the vehicle type
        vehicleObject = new FourWheeler();
        vehicleObject.name = vname.value;
        vehicleObject.description = description.value;
        vehicleObject.type = type.value;
        vehicleObject.cost_per_km = cost_per_km.value;

        document.getElementById('fuelForm').style.display = 'block';
        document.getElementById('vehicleBtn').style.display = 'none';

        var fuelSubmitBtn = document.getElementById('fuelSubmitBtn');

        fuelSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var fuel_type = document.getElementById('fuelType').value;
            vehicleObject.fuelType = fuel_type;
            displayContent(vehicleObject, '4');   // calling displayContent function
        });

    } else {
        // Creating TwoWheeler object and assign it to vehicleObject as per the vehicle type
        vehicleObject = new TwoWheeler();
        vehicleObject.name = vname.value;
        vehicleObject.description = description.value;
        vehicleObject.type =type.value;
        vehicleObject.cost_per_km = cost_per_km.value;
        displayContent(vehicleObject, '2');     // calling displayContent function
    }
});
