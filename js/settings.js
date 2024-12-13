document.getElementById('ngo-profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        ngoName: document.getElementById('ngoName').value,
        registrationNumber: document.getElementById('registrationNumber').value,
        establishmentDate: document.getElementById('establishmentDate').value,
        foundingTeam: document.getElementById('foundingTeam').value
    };
    localStorage.setItem('ngoProfile', JSON.stringify(formData));
    alert('NGO Profile saved!');
    document.getElementById('ngo-profile-form').reset();
});

// Contact Info form handling
document.getElementById('contact-info-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        officialAddress: document.getElementById('officialAddress').value,
        contactNumbers: document.getElementById('contactNumbers').value,
        officialEmail: document.getElementById('officialEmail').value,
        websiteURL: document.getElementById('websiteURL').value,
        socialMediaHandles: document.getElementById('socialMediaHandles').value,
        secDocuments: document.getElementById('secDocuments').files[0]?.name,
        taxID: document.getElementById('taxID').value,
        verify: document.getElementById('verify').value
    };
    localStorage.setItem('contactInfo', JSON.stringify(formData));
    alert('Contact Info saved!');
    document.getElementById('contact-info-form').reset();
});

// Mission, Vision, Goals form handling
document.getElementById('mission-vision-goals-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        missionStatement: document.getElementById('missionStatement').value,
        coreValues: document.getElementById('coreValues').value,
        organizationalGoals: document.getElementById('organizationalGoals').value,
        strategicObjectives: document.getElementById('strategicObjectives').value,
        advocacyAreas: document.getElementById('advocacyAreas').value
    };
    localStorage.setItem('missionVisionGoals', JSON.stringify(formData));
    alert('Mission, Vision, and Goals saved!');
    document.getElementById('mission-vision-goals-form').reset();
});