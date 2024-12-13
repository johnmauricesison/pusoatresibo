window.addEventListener('DOMContentLoaded', () => {
    
    const ngoProfileData = localStorage.getItem('ngoProfile');
    const contactInfoData = localStorage.getItem('contactInfo');
    const missionVisionGoalsData = localStorage.getItem('missionVisionGoals');

    
    if (ngoProfileData) {
        const ngoProfile = JSON.parse(ngoProfileData);
        document.getElementById('profile-ngo-name').textContent = ngoProfile.ngoName || 'N/A';
        document.getElementById('profile-registration-number').textContent = ngoProfile.registrationNumber || 'N/A';
        document.getElementById('profile-establishment-date').textContent = ngoProfile.establishmentDate || 'N/A';
        document.getElementById('profile-founding-team').textContent = ngoProfile.foundingTeam || 'N/A';
    }

   
    if (contactInfoData) {
        const contactInfo = JSON.parse(contactInfoData);
        document.getElementById('profile-official-address').textContent = contactInfo.officialAddress || 'N/A';
        document.getElementById('profile-contact-numbers').textContent = contactInfo.contactNumbers || 'N/A';
        document.getElementById('profile-official-email').textContent = contactInfo.officialEmail || 'N/A';
        document.getElementById('profile-website-url').textContent = contactInfo.websiteURL || 'N/A';
        document.getElementById('profile-social-media-handles').textContent = contactInfo.socialMediaHandles || 'N/A';
        document.getElementById('profile-sec-documents').textContent = contactInfo.secDocuments || 'View';
        document.getElementById('profile-tax-id').textContent = contactInfo.taxID || 'N/A';
        document.getElementById('profile-transparency-verification').textContent = contactInfo.verify || 'N/A';
        
    }

    
    if (missionVisionGoalsData) {
        const missionVisionGoals = JSON.parse(missionVisionGoalsData);
        document.getElementById('profile-mission-statement').textContent = missionVisionGoals.missionStatement || 'N/A';
        document.getElementById('profile-core-values').textContent = missionVisionGoals.coreValues || 'N/A';
        document.getElementById('profile-organizational-goals').textContent = missionVisionGoals.organizationalGoals || 'N/A';
        document.getElementById('profile-strategic-objectives').textContent = missionVisionGoals.strategicObjectives || 'N/A';
        document.getElementById('profile-advocacy-areas').textContent = missionVisionGoals.advocacyAreas || 'N/A';
    }
});

const totalDonationsOverview = document.getElementById('budgetOverview');
totalProjects = document.getElementById('profile-total-projects');


const donations = JSON.parse(localStorage.getItem('donations')) || [];
const utilizations = JSON.parse(localStorage.getItem('utilizations')) || [];


const totalDonations = donations.reduce((sum, donation) => sum + parseFloat(donation.amount), 0);
totalDonationsOverview.textContent = `Annual Budget Overview: ₱${totalDonations.toLocaleString()}`;

if (Array.isArray(utilizations)) {
    totalProjects.textContent = utilizations.length;  
} else {
    totalProjects.textContent = 0;  
}