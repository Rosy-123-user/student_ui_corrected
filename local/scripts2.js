// Function to load module content dynamically
function loadModuleContent(moduleFile) {
    console.log(`Loading module content from: ${moduleFile}`);
    fetch(moduleFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('module-content').innerHTML = data;
            openSlideIn('module-details');
        })
        .catch(error => console.error('Error loading module content:', error));
}

// Function to open slide-in
function openSlideIn(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            const slideInContainer = document.getElementById('slide-in-container');
            slideInContainer.innerHTML = data;
            const slideIn = slideInContainer.querySelector('.slide-in');
            slideIn.style.width = '100%';
            slideInContainer.style.display = 'block';
        })
        .catch(error => console.error('Error loading slide-in content:', error));
}

// Function to close slide-in
function closeSlideIn(id) {
    const slideIn = document.getElementById(id);
    if (slideIn) {
        slideIn.style.width = '0';
        setTimeout(() => {
            slideIn.parentElement.style.display = 'none';
            slideIn.remove();
        }, 500); // Remove from DOM after transition
    }
}

function showDetails(type) {
    const detailsContent = document.getElementById('details-content');
    let content = '';
    if (type === 'teachers') {
        content = `
            <h3>Teacher Accounts</h3>
            <div class="account-actions">
                <button class="action-button">View</button>
                <button class="action-button">Edit</button>
                <button class="action-button">Deactivate</button>
            </div>
            <p>Details about teachers will be displayed here.</p>
        `;
    } else if (type === 'students') {
        content = `
            <h3>Student Accounts</h3>
            <div class="account-actions">
                <button class="action-button">View</button>
                <button class="action-button">Edit</button>
                <button class="action-button">Deactivate</button>
            </div>
            <p>Details about students will be displayed here.</p>
        `;
    } else if (type === 'bulk') {
        content = `
            <h3>Bulk Operations</h3>
            <p>Interface to upload multiple user accounts via CSV or Excel will be here.</p>
        `;
    }
    detailsContent.innerHTML = content;
}

// for the data submission page

function uploadData() {
    // Placeholder for data upload functionality
    alert('Data upload interface opened.');
}

function scheduleBackup() {
    // Placeholder for scheduling backups
    alert('Backup schedule set.');
}

function syncData() {
    // Placeholder for data synchronization functionality
    alert('Data synchronization initiated.');
}

function generateReport() {
    // Placeholder for generating reports
    alert('Report generation initiated.');
}
