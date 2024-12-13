        
        
        const donationsTable = document.getElementById('donationsTable');
        const allocationsTable = document.getElementById('allocationsTable');

        const totalDonationsElement = document.getElementById('totalDonations');
        const totalAllocationsElement = document.getElementById('totalAllocations');
        const totalUtilizationsElement = document.getElementById('totalUtilizations');

        const donations = JSON.parse(localStorage.getItem('donations')) || [];
        const allocations = JSON.parse(localStorage.getItem('allocations')) || [];
        const utilizations = JSON.parse(localStorage.getItem('utilizations')) || [];

        
        const recentDonations = donations.slice(-10);
        const recentAllocations = allocations.slice(-10);

        const totalDonations = donations.reduce((sum, donation) => sum + parseFloat(donation.amount), 0);
        const totalAllocations = allocations.reduce((sum, allocation) => sum + parseFloat(allocation.allocatedBudget), 0);
        
        

        totalDonationsElement.textContent = `₱${totalDonations.toLocaleString()}`;
        if (Array.isArray(allocations)) {
            totalAllocationsElement.textContent = allocations.length;  
        } else {
            totalAllocationsElement.textContent = 0; 
        }
        if (Array.isArray(utilizations)) {
            totalUtilizationsElement.textContent = utilizations.length; 
        } else {
            totalUtilizationsElement.textContent = 0;  
        }

        
        recentDonations.forEach(donation => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${donation.dodate}</td>
                <td>${donation.source}</td>
                
                <td>${donation.projectPreference}</td>
                <td>₱${parseFloat(donation.amount).toLocaleString()}</td>
            `;
            donationsTable.appendChild(row);
        });

        recentAllocations.forEach(allocation => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${allocation.projectName}</td>
                <td>${allocation.projectCategory}</td>
                <td>${allocation.geographicalArea}</td>
                <td>₱${parseFloat(allocation.allocatedBudget).toLocaleString()}</td>
                
            `;
            allocationsTable.appendChild(row);
        });



       
        const donationSources = donations.reduce((sources, donation) => {
            const donorType = donation.source; 
            sources[donorType] = (sources[donorType] || 0) + parseFloat(donation.amount);
            return sources;
        }, {});


        const pastelColors = [ 
            '#28A745','#FFD700', 
            '#FF0084', '#2D9CE0', 
            '#FF9900', '#17A2B8', 
            '#E83E8C', '#6F42C1', 
            '#20C997', '#FD7E14'

        ];


        
        const donationSourcesChartData = {
            labels: Object.keys(donationSources),
            datasets: [{
                label: 'Donation Sources',
                data: Object.values(donationSources),
                backgroundColor: ['#ff0084', '#2d9ce0'], 
                borderColor: '#fff',
                borderWidth: 1
            }]
        };

        const donationSourcesChartConfig = {
            type: 'pie',
            data: donationSourcesChartData
        };

        new Chart(document.getElementById('donationSourcesChart'), donationSourcesChartConfig);


        
        const geographicalAllocations = allocations.reduce((regions, allocation) => {
            const region = allocation.geographicalArea; 
            regions[region] = (regions[region] || 0) + parseFloat(allocation.allocatedBudget);
            return regions;
        }, {});

        const geoAllocationsChartData = {
            labels: Object.keys(geographicalAllocations),
            datasets: [{
                label: 'Geographical Allocations',
                data: Object.values(geographicalAllocations),
                backgroundColor: pastelColors,
                borderColor: '#fff',
                borderWidth: 1
            }]
        };

        const geoAllocationsChartConfig = {
            type: 'bar',
            data: geoAllocationsChartData,
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Location'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Allocated Budget (₱)'
                        }
                    }
                }
            }
        };

        new Chart(document.getElementById('geoAllocationsChart'), geoAllocationsChartConfig);



       
        const budgetDistribution = allocations.reduce((categories, allocation) => {
            const category = allocation.projectCategory; 
            categories[category] = (categories[category] || 0) + parseFloat(allocation.allocatedBudget);
            return categories;
        }, {});

        const budgetDistributionChartData = {
            labels: Object.keys(budgetDistribution),
            datasets: [{
                label: 'Budget Distribution in Allocations',
                data: Object.values(budgetDistribution),
                backgroundColor: pastelColors,
                borderColor: '#fff',
                borderWidth: 1
            }]
        };

        const budgetDistributionChartConfig = {
            type: 'pie',
            data: budgetDistributionChartData
        };

        new Chart(document.getElementById('budgetDistributionChart'), budgetDistributionChartConfig);






        window.addEventListener('DOMContentLoaded', () => {
    
            const ngoProfileData = localStorage.getItem('ngoProfile');
            
            if (ngoProfileData) {
                const ngoProfile = JSON.parse(ngoProfileData);
                document.getElementById('profile-ngo-name').textContent = 'Welcome, '+ngoProfile.ngoName+'!' || 'N/A';
            }
            
        });