/**
 * UI Kit - Tab Navigation System
 *
 * Handles tab switching and content visibility for .ui-page-tabs components.
 *
 * Usage:
 * 1. Add data-tab="tab-id" to each tab button
 * 2. Add data-tab-content="tab-id" to corresponding content sections
 * 3. Include this script before closing </body> tag
 *
 * Example:
 * <div class="ui-page-tabs">
 *   <button class="active" data-tab="all">All</button>
 *   <button data-tab="in-progress">In Progress</button>
 * </div>
 *
 * <div data-tab-content="all">All content...</div>
 * <div data-tab-content="in-progress" style="display: none;">In Progress content...</div>
 */

(function() {
    'use strict';

    // Initialize tabs on DOM ready
    function initTabs() {
        const tabContainers = document.querySelectorAll('.ui-page-tabs');

        tabContainers.forEach(container => {
            const tabs = container.querySelectorAll('button[data-tab]');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => handleTabClick(tab, tabs));
            });
        });
    }

    // Handle tab click
    function handleTabClick(clickedTab, allTabs) {
        const tabId = clickedTab.getAttribute('data-tab');

        // Remove active class from all tabs in this group
        allTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add active class to clicked tab
        clickedTab.classList.add('active');

        // Show/hide corresponding content sections
        const allContent = document.querySelectorAll('[data-tab-content]');
        allContent.forEach(content => {
            const contentId = content.getAttribute('data-tab-content');

            if (contentId === tabId) {
                content.style.display = '';
            } else {
                content.style.display = 'none';
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabs);
    } else {
        initTabs();
    }
})();
