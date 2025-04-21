document.addEventListener('DOMContentLoaded', () => {
    console.log("Cashier KDS AI Initializing...");

    // --- DOM Element References ---
    const cashierView = document.getElementById('cashier-view');
    const kitchenView = document.getElementById('kitchen-view');
    const switchToCashierBtn = document.getElementById('switchToCashierView');
    const switchToKitchenBtn = document.getElementById('switchToKitchenView');
    const tableListContainer = document.getElementById('table-list-container');
    const cashierMenu = document.getElementById('cashier-menu');
    const kitchenMenu = document.getElementById('kitchen-menu');
    const sortButtons = document.querySelectorAll('.sort-button');
    const tableBlocksContainer = document.querySelector('#cashier-view .table-blocks-container');
    const kdsItemsList = document.querySelector('#kitchen-view .kds-items-list');


    let currentView = 'kitchen'; // Default view

    // --- Functions ---

    /**
     * Switches the main content view between Cashier and Kitchen.
     * @param {string} viewToShow - ID of the view to show ('cashier-view' or 'kitchen-view')
     */
    function switchView(viewToShow) {
        console.log(`Switching view to: ${viewToShow}`);
        // Hide all views
        cashierView.classList.remove('active');
        kitchenView.classList.remove('active');
        // Hide all bottom menus
        cashierMenu.classList.remove('active');
        kitchenMenu.classList.remove('active');
        // Deactivate all view buttons
        switchToCashierBtn.classList.remove('active');
        switchToKitchenBtn.classList.remove('active');

        // Show the selected view and its corresponding elements
        if (viewToShow === 'cashier-view') {
            cashierView.classList.add('active');
            cashierMenu.classList.add('active');
            switchToCashierBtn.classList.add('active');
            currentView = 'cashier';
             // Load data specific to cashier view if needed
            loadCashierData();
        } else { // Default to kitchen view
            kitchenView.classList.add('active');
            kitchenMenu.classList.add('active');
            switchToKitchenBtn.classList.add('active');
            currentView = 'kitchen';
            // Load data specific to kitchen view if needed
            loadKitchenData();
        }
        console.log(`Current view is now: ${currentView}`);
    }

    /** Placeholder: Load or refresh data for the Cashier View */
    function loadCashierData() {
        console.log("Loading/Refreshing Cashier View Data...");
        // TODO: Fetch active tables and their orders
        // TODO: Render table blocks in tableBlocksContainer
        tableBlocksContainer.innerHTML = '<div class="table-block-placeholder">(ตัวอย่าง) กำลังโหลดข้อมูลโต๊ะแคชเชียร์...</div>'; // Example
    }

     /** Placeholder: Load or refresh data for the Kitchen View */
     function loadKitchenData() {
        console.log("Loading/Refreshing Kitchen View Data...");
        // TODO: Fetch active order items for KDS
        // TODO: Render KDS item rows in kdsItemsList
        kdsItemsList.innerHTML = '<div class="kds-item-placeholder">(ตัวอย่าง) กำลังโหลดรายการอาหารสำหรับครัว...</div>'; // Example
    }

    /** Placeholder: Populate the sidebar table list */
    function populateTableList() {
         console.log("Populating table list...");
         tableListContainer.innerHTML = ''; // Clear placeholder/existing
         const maxTables = 30; // Example from requirements
         for (let i = 1; i <= maxTables; i++) {
            const tableEl = document.createElement('div');
            tableEl.classList.add('table-item');
            // TODO: Add 'active' or 'inactive' class based on actual table status
            if (i % 5 === 0) { // Example: make every 5th table inactive
                 tableEl.classList.add('inactive');
            } else {
                 // Example: add status color class for active tables
                 // tableEl.classList.add('active', 'status-yellow'); // Add status color based on oldest order
                 tableEl.classList.add('active'); // Just active for now
            }
            tableEl.dataset.tableNumber = i;
            tableEl.textContent = `โต๊ะ ${i}`;
            tableEl.addEventListener('click', () => handleTableClick(i));
            tableListContainer.appendChild(tableEl);
         }
     }

    /** Placeholder: Handle clicking on a table in the sidebar */
    function handleTableClick(tableNumber) {
        console.log(`Table ${tableNumber} clicked.`);
        // TODO: Implement logic (e.g., filter view, highlight selection)
    }

     /** Placeholder: Handle clicking on a sort button */
     function handleSortClick(sortType) {
        console.log(`Sort button clicked: ${sortType}`);
        // TODO: Implement sorting logic for the active view
        // Remove active class from all sort buttons
        sortButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        document.querySelector(`.sort-button[data-sort="${sortType}"]`).classList.add('active');
     }

    // --- Event Listeners ---
    switchToCashierBtn.addEventListener('click', () => switchView('cashier-view'));
    switchToKitchenBtn.addEventListener('click', () => switchView('kitchen-view'));

    sortButtons.forEach(button => {
        button.addEventListener('click', (e) => handleSortClick(e.currentTarget.dataset.sort));
    });


    // --- Initial Setup ---
    populateTableList(); // Populate sidebar
    switchView('kitchen-view'); // Set the initial view (e.g., kitchen)

    console.log("Initialization complete.");
});
