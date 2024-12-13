
document.getElementById('openDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.add('open');
});

document.getElementById('closeDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.remove('open');
});


document.getElementById('utilizationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const utilizationData = {
        referenceNumber: document.getElementById('referenceNumber').value,
        programName: document.getElementById('programName').value,
        totalAllocatedBudget: document.getElementById('totalAllocatedBudget').value,
        actualExpenditureAmount: document.getElementById('actualExpenditureAmount').value,
        remainingBudget: document.getElementById('remainingBudget').value,
        
        totalNumberOfBeneficiaries: document.getElementById('totalNumberOfBeneficiaries').value,
        primaryDemographicGroup: document.getElementById('primaryDemographicGroup').value,
        projectProgressPercentage: document.getElementById('projectProgressPercentage').value,
        status: document.getElementById('status').value,
        primaryChallenges: document.getElementById('primaryChallenges').value,
        authorizedSignatoryName: document.getElementById('authorizedSignatoryName').value,
        dateOfSubmission: document.getElementById('dateOfSubmission').value
    };

    let utilizations = JSON.parse(localStorage.getItem('utilizations')) || [];
    if (window.editingIndex !== undefined) {
        utilizations[window.editingIndex] = utilizationData;
        window.editingIndex = undefined;
    } else {
        utilizations.push(utilizationData);
    }
    localStorage.setItem('utilizations', JSON.stringify(utilizations));

    displayUtilizations();
    document.getElementById('utilizationForm').reset();
    document.getElementById('drawer').classList.remove('open');
});

// Display stored utilizations
function displayUtilizations() {
    const utilizations = JSON.parse(localStorage.getItem('utilizations')) || [];
    const utilizationsTable = document.getElementById('utilizationsTable');
    utilizationsTable.innerHTML = '';

    utilizations.forEach((utilization, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${utilization.referenceNumber}</td>
            <td>${utilization.programName}</td>
            <td>${utilization.totalAllocatedBudget}</td>
            <td>${utilization.actualExpenditureAmount}</td>
            <td>${utilization.remainingBudget}</td>
            
            <td>${utilization.totalNumberOfBeneficiaries}</td>
            <td>${utilization.primaryDemographicGroup}</td>
            <td>${utilization.projectProgressPercentage}</td>
            <td>${utilization.status}</td>
            <td>${utilization.primaryChallenges}</td>
            <td>${utilization.dateOfSubmission}</td>
            <td>${utilization.authorizedSignatoryName}</td>
            <td>
                <button class="btn btn-active" onclick="editUtilization(${index})" style="color: white;">✏️</button>
                
            </td>
            <td>
                
                <button class="btn btn-active" onclick="deleteUtilization(${index}) " style="color: white;">⛔ </button>
            </td>
        `;
        utilizationsTable.appendChild(row);
    });
}

// Delete utilization with confirmation
function deleteUtilization(index) {
    let utilizations = JSON.parse(localStorage.getItem('utilizations')) || [];
    const selectedUtilization = utilizations[index];

    if (selectedUtilization && selectedUtilization.referenceNumber) {
       
        const confirmDelete = confirm(`Are you sure you want to delete ${selectedUtilization.referenceNumber}?`);

        if (confirmDelete) {
            utilizations.splice(index, 1);
            localStorage.setItem('utilizations', JSON.stringify(utilizations));
            displayUtilizations();
        }
    } else {
        alert('Unable to find the selected utilization.');
    }
}

// Edit utilization
function editUtilization(index) {
    let utilizations = JSON.parse(localStorage.getItem('utilizations')) || [];
    const utilization = utilizations[index];

   
    document.getElementById('referenceNumber').value = utilization.referenceNumber;
    document.getElementById('programName').value = utilization.programName;
    document.getElementById('totalAllocatedBudget').value = utilization.totalAllocatedBudget;
    document.getElementById('actualExpenditureAmount').value = utilization.actualExpenditureAmount;
    document.getElementById('remainingBudget').value = utilization.remainingBudget;
   
    document.getElementById('totalNumberOfBeneficiaries').value = utilization.totalNumberOfBeneficiaries;
    document.getElementById('primaryDemographicGroup').value = utilization.primaryDemographicGroup;
    document.getElementById('projectProgressPercentage').value = utilization.projectProgressPercentage;
    document.getElementById('status').value = utilization.status;
    document.getElementById('primaryChallenges').value = utilization.primaryChallenges;
    document.getElementById('authorizedSignatoryName').value = utilization.authorizedSignatoryName;
    document.getElementById('dateOfSubmission').value = utilization.dateOfSubmission;

    
    window.editingIndex = index;

    
    document.getElementById('drawer').classList.add('open');
}


function addSampleData(){


    const sampleData = [
        {
            referenceNumber: "UL001",
            programName: "Education Support",
            totalAllocatedBudget: 500000,
            actualExpenditureAmount: 450000,
            remainingBudget: 50000,
            totalNumberOfBeneficiaries: 150,
            primaryDemographicGroup: "Students",
            projectProgressPercentage: 80,
            status: "Completed",
            primaryChallenges: "Delayed supplies delivery",
            authorizedSignatoryName: "Juan Dela Cruz",
            dateOfSubmission: "2024-12-05"
        },
        {
            referenceNumber: "UL002",
            programName: "Health Outreach",
            totalAllocatedBudget: 300000,
            actualExpenditureAmount: 250000,
            remainingBudget: 50000,
            totalNumberOfBeneficiaries: 200,
            primaryDemographicGroup: "Low-income families",
            projectProgressPercentage: 70,
            status: "Completed",
            primaryChallenges: "Weather delays in the area",
            authorizedSignatoryName: "Maria Reyes",
            dateOfSubmission: "2024-12-06"
        },
        {
            referenceNumber: "UL003",
            programName: "Clean Water Initiative",
            totalAllocatedBudget: 450000,
            actualExpenditureAmount: 420000,
            remainingBudget: 30000,
            totalNumberOfBeneficiaries: 500,
            primaryDemographicGroup: "Rural communities",
            projectProgressPercentage: 93,
            status: "Completed",
            primaryChallenges: "Logistical issues in remote areas",
            authorizedSignatoryName: "Carlos Gutierrez",
            dateOfSubmission: "2024-12-07"
        },
        {
            referenceNumber: "UL004",
            programName: "Nutrition Support",
            totalAllocatedBudget: 250000,
            actualExpenditureAmount: 230000,
            remainingBudget: 20000,
            totalNumberOfBeneficiaries: 300,
            primaryDemographicGroup: "Children",
            projectProgressPercentage: 85,
            status: "Completed",
            primaryChallenges: "Supply chain interruptions",
            authorizedSignatoryName: "Lucia Tan",
            dateOfSubmission: "2024-12-07"
        },
        {
            referenceNumber: "UL005",
            programName: "Emergency Relief Fund",
            totalAllocatedBudget: 600000,
            actualExpenditureAmount: 500000,
            remainingBudget: 100000,
            totalNumberOfBeneficiaries: 800,
            primaryDemographicGroup: "Disaster victims",
            projectProgressPercentage: 75,
            status: "Ongoing",
            primaryChallenges: "Unpredictable disaster areas",
            authorizedSignatoryName: "Antonio Silva",
            dateOfSubmission: "2024-12-08"
        },
        // New 5 additional sample data entries
        {
            referenceNumber: "UL006",
            programName: "Women's Empowerment Program",
            totalAllocatedBudget: 400000,
            actualExpenditureAmount: 370000,
            remainingBudget: 30000,
            totalNumberOfBeneficiaries: 250,
            primaryDemographicGroup: "Women Entrepreneurs",
            projectProgressPercentage: 92,
            status: "Completed",
            primaryChallenges: "Limited access to funding resources",
            authorizedSignatoryName: "Elena Cruz",
            dateOfSubmission: "2024-12-08"
        },
        {
            referenceNumber: "UL007",
            programName: "Sustainable Farming Initiative",
            totalAllocatedBudget: 520000,
            actualExpenditureAmount: 480000,
            remainingBudget: 40000,
            totalNumberOfBeneficiaries: 450,
            primaryDemographicGroup: "Farmers",
            projectProgressPercentage: 88,
            status: "Completed",
            primaryChallenges: "Crop failure due to pests",
            authorizedSignatoryName: "Roberto Villanueva",
            dateOfSubmission: "2024-12-09"
        },
        {
            referenceNumber: "UL008",
            programName: "Disaster Risk Reduction Program",
            totalAllocatedBudget: 700000,
            actualExpenditureAmount: 650000,
            remainingBudget: 50000,
            totalNumberOfBeneficiaries: 1000,
            primaryDemographicGroup: "Communities in High-Risk Areas",
            projectProgressPercentage: 95,
            status: "Completed",
            primaryChallenges: "High frequency of natural disasters",
            authorizedSignatoryName: "Rafael Santos",
            dateOfSubmission: "2024-12-10"
        },
        {
            referenceNumber: "UL009",
            programName: "Child Protection Advocacy",
            totalAllocatedBudget: 350000,
            actualExpenditureAmount: 320000,
            remainingBudget: 30000,
            totalNumberOfBeneficiaries: 600,
            primaryDemographicGroup: "Children in Conflict Areas",
            projectProgressPercentage: 90,
            status: "Ongoing",
            primaryChallenges: "Access to conflict zones",
            authorizedSignatoryName: "Grace Mendoza",
            dateOfSubmission: "2024-12-11"
        },
        {
            referenceNumber: "UL010",
            programName: "Tech for All Initiative",
            totalAllocatedBudget: 550000,
            actualExpenditureAmount: 500000,
            remainingBudget: 50000,
            totalNumberOfBeneficiaries: 350,
            primaryDemographicGroup: "Students from Underserved Areas",
            projectProgressPercentage: 89,
            status: "Completed",
            primaryChallenges: "Technology adoption and accessibility issues",
            authorizedSignatoryName: "Mark Rivera",
            dateOfSubmission: "2024-12-12"
        }
    ];


    let utilization = JSON.parse(localStorage.getItem('utilizations')) || [];
    if (utilization.length === 0) {
        utilization = sampleData;
        localStorage.setItem('utilizations', JSON.stringify(utilization));
    }
}

addSampleData();

displayUtilizations();