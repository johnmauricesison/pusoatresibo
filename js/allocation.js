document.getElementById('openDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.add('open');
});

document.getElementById('closeDrawerBtn').addEventListener('click', function() {
    document.getElementById('drawer').classList.remove('open');
});




document.getElementById('allocationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const allocationData = {
        registrationNumber: document.getElementById('registrationNumber').value,
        contactPerson: document.getElementById('contactPerson').value,
        totalBudget: document.getElementById('totalBudget').value,
        budgetPeriodStart: document.getElementById('budgetPeriodStart').value,
        budgetPeriodEnd: document.getElementById('budgetPeriodEnd').value,
        fundingSources: document.getElementById('fundingSources').value,
        projectName: document.getElementById('projectName').value,
        projectCategory: document.getElementById('projectCategory').value,
        allocatedBudget: document.getElementById('allocatedBudget').value,
        budgetPercentage: document.getElementById('budgetPercentage').value,
        geographicalArea: document.getElementById('geographicalArea').value,
        beneficiaries: document.getElementById('beneficiaries').value,
        projectDuration: document.getElementById('projectDuration').value,
        personnelCosts: document.getElementById('personnelCosts').value,
        equipmentCosts: document.getElementById('equipmentCosts').value,
        transportationCosts: document.getElementById('transportationCosts').value,
        trainingCosts: document.getElementById('trainingCosts').value,
        suppliesCosts: document.getElementById('suppliesCosts').value,
        overheadCosts: document.getElementById('overheadCosts').value,
        alignmentMission: document.getElementById('alignmentMission').value,
        riskAssessment: document.getElementById('riskAssessment').value,
        sustainabilityPlan: document.getElementById('sustainabilityPlan').value,
    };



    let allocations = JSON.parse(localStorage.getItem('allocations')) || [];
    if (window.editingIndex !== undefined) {
        allocations[window.editingIndex] = allocationData;
        window.editingIndex = undefined;
    } else {
        allocations.push(allocationData);
    }
    localStorage.setItem('allocations', JSON.stringify(allocations));

    displayAllocations();
    document.getElementById('allocationForm').reset();
    document.getElementById('drawer').classList.remove('open');
});

// Display stored allocations
function displayAllocations() {
    const allocations = JSON.parse(localStorage.getItem('allocations')) || [];
    const allocationsTable = document.getElementById('allocationsTable');
    allocationsTable.innerHTML = '';

    allocations.forEach((allocation, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${allocation.registrationNumber}</td>
            <td>${allocation.contactPerson}</td>
            <td>${allocation.projectName}</td>
            <td>${allocation.projectCategory}</td>
            
            <td>${allocation.geographicalArea}</td>
            
            <td>${allocation.projectDuration}</td>
            <td>${allocation.allocatedBudget}</td>
            <td>${allocation.equipmentCosts}</td>
            <td>${allocation.personnelCosts}</td>
            <td>${allocation.transportationCosts}</td>
            <td>${allocation.trainingCosts}</td>
            <td>${allocation.suppliesCosts}</td>
            <td>${allocation.overheadCosts}</td>
            <td>${allocation.beneficiaries}</td>
            <td>
                <button class="btn btn-active" onclick="editAllocation(${index})" style="color: white;">✏️</button>
                
            </td>
            <td>
                
                <button class="btn btn-active" onclick="deleteAllocation(${index})" style="color: white;">⛔ </button>
            </td>
        `;
        allocationsTable.appendChild(row);
    });
}

// Delete allocation with confirmation
function deleteAllocation(index) {
    let allocations = JSON.parse(localStorage.getItem('allocations')) || [];
    const selectedAllocation = allocations[index];

    if (selectedAllocation && selectedAllocation.registrationNumber) {
        const confirmDelete = confirm(`Are you sure you want to delete ${selectedAllocation.registrationNumber}?`);
        
        if (confirmDelete) {
            allocations.splice(index, 1);
            localStorage.setItem('allocations', JSON.stringify(allocations));
            displayAllocations();
        }
    } else {
        alert('Unable to find the selected allocation.');
    }
}



// Edit allocation
function editAllocation(index) {
    let allocations = JSON.parse(localStorage.getItem('allocations')) || [];
    const allocation = allocations[index];


    document.getElementById('registrationNumber').value = allocation.registrationNumber;
    document.getElementById('contactPerson').value = allocation.contactPerson;
    document.getElementById('totalBudget').value = allocation.totalBudget;
    document.getElementById('budgetPeriodStart').value = allocation.budgetPeriodStart;
    document.getElementById('budgetPeriodEnd').value = allocation.budgetPeriodEnd;
    document.getElementById('fundingSources').value = allocation.fundingSources;
    document.getElementById('projectName').value = allocation.projectName;
    document.getElementById('projectCategory').value = allocation.projectCategory;
    document.getElementById('allocatedBudget').value = allocation.allocatedBudget;
    document.getElementById('budgetPercentage').value = allocation.budgetPercentage;
    document.getElementById('geographicalArea').value = allocation.geographicalArea;
    document.getElementById('beneficiaries').value = allocation.beneficiaries;
    document.getElementById('projectDuration').value = allocation.projectDuration;
    document.getElementById('personnelCosts').value = allocation.personnelCosts;
    document.getElementById('equipmentCosts').value = allocation.equipmentCosts;
    document.getElementById('transportationCosts').value = allocation.transportationCosts;
    document.getElementById('trainingCosts').value = allocation.trainingCosts;
    document.getElementById('suppliesCosts').value = allocation.suppliesCosts;
    document.getElementById('overheadCosts').value = allocation.overheadCosts;
    document.getElementById('alignmentMission').value = allocation.alignmentMission;
    document.getElementById('riskAssessment').value = allocation.riskAssessment;
    document.getElementById('sustainabilityPlan').value = allocation.sustainabilityPlan;


    window.editingIndex = index;


    document.getElementById('drawer').classList.add('open');
}



function addSampleData(){
    const sampleData = [
        {
            registrationNumber: "AL0001", contactPerson: "Alice Smith", totalBudget: "3000000", 
            budgetPeriodStart: "2024-01-01", budgetPeriodEnd: "2024-12-31", fundingSources: "Donations, Fundraisers", 
            projectName: "Health Outreach Program", projectCategory: "Health", allocatedBudget: "1500000", 
            budgetPercentage: "50%", geographicalArea: "Urban Areas", beneficiaries: "1500 families", 
            projectDuration: "12 months", personnelCosts: "800000", equipmentCosts: "200000", 
            transportationCosts: "150000", trainingCosts: "100000", suppliesCosts: "250000", overheadCosts: "50000", 
            alignmentMission: "Improving healthcare accessibility", riskAssessment: "Possible delay in supplies", 
            sustainabilityPlan: "Partnership with local hospitals"
        },
        {
            registrationNumber: "AL0002", contactPerson: "John Doe", totalBudget: "5000000", 
            budgetPeriodStart: "2024-02-01", budgetPeriodEnd: "2024-11-30", fundingSources: "Government Grants, Corporate Sponsors", 
            projectName: "Clean Water for All", projectCategory: "Environment", allocatedBudget: "3000000", 
            budgetPercentage: "60%", geographicalArea: "Rural Areas", beneficiaries: "2000 households", 
            projectDuration: "10 months", personnelCosts: "1200000", equipmentCosts: "800000", 
            transportationCosts: "200000", trainingCosts: "300000", suppliesCosts: "150000", overheadCosts: "100000", 
            alignmentMission: "Providing clean water solutions", riskAssessment: "Possible flooding during construction", 
            sustainabilityPlan: "Community maintenance training"
        },
        {
            registrationNumber: "AL0003", contactPerson: "Emma Johnson", totalBudget: "750000", 
            budgetPeriodStart: "2024-03-01", budgetPeriodEnd: "2024-08-31", fundingSources: "Private Donations", 
            projectName: "School Supplies Drive", projectCategory: "Education", allocatedBudget: "500000", 
            budgetPercentage: "67%", geographicalArea: "Provincial Regions", beneficiaries: "1000 children", 
            projectDuration: "6 months", personnelCosts: "200000", equipmentCosts: "50000", 
            transportationCosts: "50000", trainingCosts: "30000", suppliesCosts: "100000", overheadCosts: "20000", 
            alignmentMission: "Supporting educational needs", riskAssessment: "Supply shortages", 
            sustainabilityPlan: "Annual drives with schools"
        },
        {
            registrationNumber: "AL0004", contactPerson: "Michael Lee", totalBudget: "1000000", 
            budgetPeriodStart: "2024-04-01", budgetPeriodEnd: "2024-12-31", fundingSources: "Crowdfunding, Sponsorship", 
            projectName: "Disaster Relief Fund", projectCategory: "Disaster Relief", allocatedBudget: "700000", 
            budgetPercentage: "70%", geographicalArea: "Coastal Areas", beneficiaries: "500 families", 
            projectDuration: "9 months", personnelCosts: "300000", equipmentCosts: "150000", 
            transportationCosts: "100000", trainingCosts: "50000", suppliesCosts: "50000", overheadCosts: "100000", 
            alignmentMission: "Immediate disaster response", riskAssessment: "Logistical issues in transport", 
            sustainabilityPlan: "Partnerships with relief organizations"
        },
        {
            registrationNumber: "AL0005", contactPerson: "David Brown", totalBudget: "1200000", 
            budgetPeriodStart: "2024-05-01", budgetPeriodEnd: "2024-12-31", fundingSources: "NGO Partnerships, Donations", 
            projectName: "Youth Empowerment Program", projectCategory: "Youth Empowerment", allocatedBudget: "800000", 
            budgetPercentage: "66%", geographicalArea: "Suburban Areas", beneficiaries: "700 youths", 
            projectDuration: "8 months", personnelCosts: "350000", equipmentCosts: "200000", 
            transportationCosts: "100000", trainingCosts: "150000", suppliesCosts: "70000", overheadCosts: "50000", 
            alignmentMission: "Empowering youth through education and skills", riskAssessment: "Youth disengagement", 
            sustainabilityPlan: "Ongoing workshops and mentorship programs"
        },
        {
            registrationNumber: "AL0006", contactPerson: "Sophia Carter", totalBudget: "2000000", 
            budgetPeriodStart: "2024-06-01", budgetPeriodEnd: "2024-12-31", fundingSources: "Corporate Donations", 
            projectName: "Reforestation Campaign", projectCategory: "Environment", allocatedBudget: "1500000", 
            budgetPercentage: "75%", geographicalArea: "Tropical Zones", beneficiaries: "10000 trees", 
            projectDuration: "6 months", personnelCosts: "500000", equipmentCosts: "200000", 
            transportationCosts: "150000", trainingCosts: "100000", suppliesCosts: "400000", overheadCosts: "100000", 
            alignmentMission: "Restoring local ecosystems", riskAssessment: "Drought affecting plant growth", 
            sustainabilityPlan: "Local community planting support"
        },
        {
            registrationNumber: "AL0007", contactPerson: "Lucas Williams", totalBudget: "600000", 
            budgetPeriodStart: "2024-07-01", budgetPeriodEnd: "2024-12-31", fundingSources: "Government and NGOs", 
            projectName: "Homeless Shelter Expansion", projectCategory: "Social", allocatedBudget: "400000", 
            budgetPercentage: "67%", geographicalArea: "Urban Areas", beneficiaries: "500 homeless individuals", 
            projectDuration: "5 months", personnelCosts: "200000", equipmentCosts: "80000", 
            transportationCosts: "50000", trainingCosts: "30000", suppliesCosts: "40000", overheadCosts: "40000", 
            alignmentMission: "Providing shelter and support for the homeless", riskAssessment: "Space limitations", 
            sustainabilityPlan: "Long-term government support"
        },
        {
            registrationNumber: "AL0008", contactPerson: "Olivia Martinez", totalBudget: "450000", 
            budgetPeriodStart: "2024-08-01", budgetPeriodEnd: "2024-11-30", fundingSources: "Crowdfunding", 
            projectName: "Clean Streets Initiative", projectCategory: "Environment", allocatedBudget: "300000", 
            budgetPercentage: "67%", geographicalArea: "Local Communities", beneficiaries: "50,000 residents", 
            projectDuration: "4 months", personnelCosts: "100000", equipmentCosts: "50000", 
            transportationCosts: "30000", trainingCosts: "20000", suppliesCosts: "50000", overheadCosts: "10000", 
            alignmentMission: "Promoting cleaner city environments", riskAssessment: "Vandalism risk", 
            sustainabilityPlan: "Community-led cleanups"
        },
        {
            registrationNumber: "AL0009", contactPerson: "Ethan Davis", totalBudget: "2000000", 
            budgetPeriodStart: "2024-09-01", budgetPeriodEnd: "2024-12-31", fundingSources: "International Grants", 
            projectName: "Nutrition and Health Awareness", projectCategory: "Health", allocatedBudget: "1000000", 
            budgetPercentage: "50%", geographicalArea: "International", beneficiaries: "3000 people", 
            projectDuration: "4 months", personnelCosts: "400000", equipmentCosts: "100000", 
            transportationCosts: "150000", trainingCosts: "200000", suppliesCosts: "200000", overheadCosts: "100000", 
            alignmentMission: "Improving nutrition awareness", riskAssessment: "Cultural barriers to health education", 
            sustainabilityPlan: "Follow-up health workshops"
        },
        {
        registrationNumber: "AL0010", contactPerson: "Isabella Green", totalBudget: "4000000", 
        budgetPeriodStart: "2024-10-01", budgetPeriodEnd: "2024-12-31", fundingSources: "Corporate Partnerships, Donations", 
        projectName: "Waste Management and Recycling", projectCategory: "Environment", allocatedBudget: "2500000", 
        budgetPercentage: "62.5%", geographicalArea: "Urban Areas", beneficiaries: "10000 residents", 
        projectDuration: "3 months", personnelCosts: "800000", equipmentCosts: "400000", 
        transportationCosts: "300000", trainingCosts: "200000", suppliesCosts: "50000", overheadCosts: "100000", 
        alignmentMission: "Reducing waste and promoting recycling", riskAssessment: "Possible public resistance", 
        sustainabilityPlan: "Collaboration with local waste management authorities"
    }

    ];

    let allocation = JSON.parse(localStorage.getItem('allocations')) || [];
    if (allocation.length === 0) {
        allocation = sampleData;
        localStorage.setItem('allocations', JSON.stringify(allocation));
    }
}

addSampleData();

displayAllocations();