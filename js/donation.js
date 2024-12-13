

 document.getElementById('openDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.add('open');
});

document.getElementById('closeDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.remove('open');
});


document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const donationData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        city: document.getElementById('city').value,
        province: document.getElementById('province').value,
        occupation: document.getElementById('occupation').value,
        ageRange: document.getElementById('ageRange').value,
        amount: document.getElementById('amount').value,
        currency: document.getElementById('currency').value,
        type: document.getElementById('type').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        projectPreference: document.getElementById('projectPreference').value,
        anonymous: document.getElementById('anonymous').value,
        source: document.getElementById('source').value,
        reason: document.getElementById('reason').value,
        taxReceipt: document.getElementById('taxReceipt').value,
        consent: document.getElementById('consent').value,
        dodate: document.getElementById('dodate').value
    };

    let donations = JSON.parse(localStorage.getItem('donations')) || [];
    if (window.editingIndex !== undefined) {
        donations[window.editingIndex] = donationData;
        window.editingIndex = undefined;
    } else {
        donations.push(donationData);
    }
    localStorage.setItem('donations', JSON.stringify(donations));

    displayDonations();
    document.getElementById('donationForm').reset();
    document.getElementById('drawer').classList.remove('open');
});

// Display stored donations
function displayDonations() {
    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    const donationsTable = document.getElementById('donationsTable');
    donationsTable.innerHTML = '';

    donations.forEach((donation, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${donation.fullName}</td>
            <td>${donation.dodate}</td>
            <td>${donation.amount}</td>
            <td>${donation.currency}</td>
            <td>${donation.type}</td>
            <td>${donation.paymentMethod}</td>
            <td>${donation.projectPreference}</td>
            <td>${donation.source}</td>
            <td>${donation.reason}</td>
            <td>${donation.anonymous}</td>
            <td>${donation.taxReceipt}</td>
            <td>${donation.consent}</td>
            
            <td>
                <button class="btn btn-active" onclick="editDonation(${index})" style="color: white;">✏️</button>
                
            </td>
            <td>
                
                <button class="btn btn-active" onclick="deleteDonation(${index})" style="color: white;">⛔ </button>
            </td>
        `;
        donationsTable.appendChild(row);
    });
}

// Delete donation
function deleteDonation(index) {
    let donations = JSON.parse(localStorage.getItem('donations')) || [];

    
    const donation = donations[index];
    const donationIdentifier = donation.fullName || 'Unknown Donation';

    
    const confirmDelete = window.confirm(`Are you sure you want to delete the donation of ${donationIdentifier}?`);

    if (confirmDelete) {
        
        donations.splice(index, 1);

        
        localStorage.setItem('donations', JSON.stringify(donations));

        
        displayDonations();
    }
}

function editDonation(index) {
    let donations = JSON.parse(localStorage.getItem('donations')) || [];
    const donation = donations[index];

    
    document.getElementById('fullName').value = donation.fullName;
    document.getElementById('email').value = donation.email;
    document.getElementById('contactNumber').value = donation.contactNumber;
    document.getElementById('city').value = donation.city;
    document.getElementById('province').value = donation.province;
    document.getElementById('occupation').value = donation.occupation;
    document.getElementById('ageRange').value = donation.ageRange;
    document.getElementById('amount').value = donation.amount;
    document.getElementById('currency').value = donation.currency;
    document.getElementById('type').value = donation.type;
    document.getElementById('paymentMethod').value = donation.paymentMethod;
    document.getElementById('projectPreference').value = donation.projectPreference;
    document.getElementById('anonymous').value = donation.anonymous;
    document.getElementById('source').value = donation.source;
    document.getElementById('reason').value = donation.reason;
    document.getElementById('taxReceipt').value = donation.taxReceipt;
    document.getElementById('consent').value = donation.consent;
    document.getElementById('dodate').value = donation.dodate;

    
    window.editingIndex = index;

   
    document.getElementById('drawer').classList.add('open');
}

function addSampleData() {
    const sampleDonations = [
        {
            fullName: "John Doe",
            email: "john@example.com",
            contactNumber: "09171234567",
            city: "Manila",
            province: "Metro Manila",
            occupation: "Software Developer",
            ageRange: "25-34",
            amount: "5000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "Bank Transfer",
            projectPreference: "Education",
            anonymous: "No",
            source: "Corporate",
            reason: "Support education for underprivileged children",
            taxReceipt: "Yes",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Jane Smith",
            email: "jane@example.com",
            contactNumber: "09176543210",
            city: "Quezon City",
            province: "Metro Manila",
            occupation: "Teacher",
            ageRange: "35-44",
            amount: "2000",
            currency: "PHP",
            type: "Monthly",
            paymentMethod: "Credit Card",
            projectPreference: "Healthcare",
            anonymous: "Yes",
            source: "Individual",
            reason: "To help provide healthcare to those in need",
            taxReceipt: "No",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Carlos Gutierrez",
            email: "carlos@example.com",
            contactNumber: "09181234567",
            city: "Davao",
            province: "Davao del Sur",
            occupation: "Entrepreneur",
            ageRange: "45-54",
            amount: "10000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "Cash",
            projectPreference: "Environment",
            anonymous: "No",
            source: "Corporate",
            reason: "To support environmental conservation projects",
            taxReceipt: "Yes",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Maria Lopez",
            email: "maria@example.com",
            contactNumber: "09182345678",
            city: "Cebu City",
            province: "Cebu",
            occupation: "Nurse",
            ageRange: "30-39",
            amount: "3000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "PayPal",
            projectPreference: "Disaster Relief",
            anonymous: "Yes",
            source: "Individual",
            reason: "Help the victims of recent natural disasters",
            taxReceipt: "No",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Luis Fernandez",
            email: "luis@example.com",
            contactNumber: "09183456789",
            city: "Taguig",
            province: "Metro Manila",
            occupation: "Designer",
            ageRange: "25-34",
            amount: "1500",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "Debit Card",
            projectPreference: "Animal Welfare",
            anonymous: "No",
            source: "Individual",
            reason: "Support animal rescue and rehabilitation",
            taxReceipt: "Yes",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Rita Martinez",
            email: "rita@example.com",
            contactNumber: "09187654321",
            city: "Makati",
            province: "Metro Manila",
            occupation: "Marketing Manager",
            ageRange: "40-49",
            amount: "12000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "Bank Transfer",
            projectPreference: "Food Security",
            anonymous: "Yes",
            source: "Individual",
            reason: "Help provide food for homeless families",
            taxReceipt: "No",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Antonio Reyes",
            email: "antonio@example.com",
            contactNumber: "09190000000",
            city: "Baguio",
            province: "Benguet",
            occupation: "Civil Engineer",
            ageRange: "50-59",
            amount: "1500",
            currency: "PHP",
            type: "Monthly",
            paymentMethod: "Credit Card",
            projectPreference: "Infrastructure",
            anonymous: "No",
            source: "Corporate",
            reason: "Support the development of rural infrastructures",
            taxReceipt: "Yes",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Sandra Kim",
            email: "sandra@example.com",
            contactNumber: "09191122334",
            city: "Iloilo",
            province: "Iloilo",
            occupation: "Doctor",
            ageRange: "30-39",
            amount: "7000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "PayPal",
            projectPreference: "Healthcare",
            anonymous: "No",
            source: "Individual",
            reason: "To provide medical aid to rural areas",
            taxReceipt: "Yes",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Victor Ramirez",
            email: "victor@example.com",
            contactNumber: "09195566788",
            city: "Cagayan de Oro",
            province: "Misamis Oriental",
            occupation: "Photographer",
            ageRange: "20-24",
            amount: "2000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "Cash",
            projectPreference: "Animal Welfare",
            anonymous: "Yes",
            source: "Individual",
            reason: "Support animal rescue operations",
            taxReceipt: "No",
            consent: "Yes",
            dodate: "2024-12-07"
        },
        {
            fullName: "Grace Pangilinan",
            email: "grace@example.com",
            contactNumber: "09193334455",
            city: "Taguig",
            province: "Metro Manila",
            occupation: "Lawyer",
            ageRange: "35-44",
            amount: "8000",
            currency: "PHP",
            type: "One-time",
            paymentMethod: "Credit Card",
            projectPreference: "Human Rights",
            anonymous: "No",
            source: "Corporate",
            reason: "Support women's rights advocacy",
            taxReceipt: "Yes",
            consent: "Yes",
            dodate: "2024-12-07"
        }
    ];

    let donations = JSON.parse(localStorage.getItem('donations')) || [];
    if (donations.length === 0) {
        donations = sampleDonations;
        localStorage.setItem('donations', JSON.stringify(donations));
    }
}


addSampleData();

displayDonations();
