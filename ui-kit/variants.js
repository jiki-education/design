/**
 * Page Variants Menu System
 *
 * This script provides a floating variants menu for design pages,
 * allowing designers to switch between different states and variations
 * of the same page (e.g., error states, loading states, etc.).
 *
 * Usage:
 * 1. Include this script in your HTML: <script src="../ui-kit/variants.js"></script>
 * 2. Define PAGE_VARIANTS_RESET and PAGE_VARIANTS in a script tag before including this file:
 *    <script>
 *      // Reset function called before each variant
 *      const PAGE_VARIANTS_RESET = () => {
 *        // Reset all elements to default state
 *        document.getElementById('password-field').classList.remove('ui-form-field-error');
 *        document.getElementById('password-error-message').style.display = 'none';
 *      };
 *
 *      const PAGE_VARIANTS = [
 *        {
 *          id: 'default',
 *          label: 'Default',
 *          apply: () => {
 *            // No additional changes needed for default
 *          }
 *        },
 *        {
 *          id: 'error',
 *          label: 'Password Error',
 *          apply: () => {
 *            // Apply error state
 *            document.getElementById('password-field').classList.add('ui-form-field-error');
 *            document.getElementById('password-error-message').style.display = 'block';
 *          }
 *        }
 *      ];
 *    </script>
 */

(function() {
    'use strict';

    // Check if PAGE_VARIANTS is defined
    if (typeof PAGE_VARIANTS === 'undefined' || !Array.isArray(PAGE_VARIANTS) || PAGE_VARIANTS.length === 0) {
        console.warn('PAGE_VARIANTS not defined or empty. Variants menu will not be shown.');
        return;
    }

    // Inject CSS styles
    const style = document.createElement('style');
    style.textContent = `
        /* Variants Menu */
        .variants-menu {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 1000;
        }

        .variants-toggle {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--color-primary-500);
            border: 3px solid white;
            box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .variants-toggle:hover {
            background: var(--color-primary-600);
            box-shadow: 0 6px 24px rgba(59, 130, 246, 0.5);
            transform: scale(1.05);
        }

        .variants-toggle svg {
            width: 28px;
            height: 28px;
        }

        .variants-submenu {
            position: absolute;
            bottom: 70px;
            right: 0;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            padding: 8px;
            min-width: 200px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px);
            transition: all 0.3s ease;
        }

        .variants-submenu.active {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
        }

        .variant-option {
            padding: 12px 16px;
            cursor: pointer;
            border-radius: 8px;
            font-size: 15px;
            color: #2d3748;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .variant-option:hover {
            background: #f7fafc;
        }

        .variant-option.active {
            background: #ebf5ff;
            color: var(--color-primary-500);
            font-weight: 500;
        }

        .variant-badge {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-primary-500);
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        .variant-option.active .variant-badge {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Create menu HTML
    function createVariantsMenu() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'variants-menu';

        // Create toggle button
        const toggle = document.createElement('div');
        toggle.className = 'variants-toggle';
        toggle.id = 'variants-toggle';
        toggle.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;

        // Create submenu
        const submenu = document.createElement('div');
        submenu.className = 'variants-submenu';
        submenu.id = 'variants-submenu';

        // Add variant options
        PAGE_VARIANTS.forEach((variant, index) => {
            const option = document.createElement('div');
            option.className = 'variant-option' + (index === 0 ? ' active' : '');
            option.dataset.variantId = variant.id;
            option.innerHTML = `
                <span class="variant-badge"></span>
                ${variant.label}
            `;
            submenu.appendChild(option);
        });

        menuContainer.appendChild(toggle);
        menuContainer.appendChild(submenu);
        document.body.appendChild(menuContainer);

        return { toggle, submenu };
    }

    // Initialize when DOM is ready
    function init() {
        const { toggle, submenu } = createVariantsMenu();

        // Toggle submenu
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            submenu.classList.toggle('active');
        });

        // Close submenu when clicking outside
        document.addEventListener('click', (e) => {
            if (!submenu.contains(e.target) && !toggle.contains(e.target)) {
                submenu.classList.remove('active');
            }
        });

        // Handle variant switching
        const variantOptions = submenu.querySelectorAll('.variant-option');
        let currentVariantIndex = 0;

        variantOptions.forEach((option, index) => {
            option.addEventListener('click', () => {
                const variantId = option.dataset.variantId;
                const variant = PAGE_VARIANTS.find(v => v.id === variantId);

                if (!variant) {
                    console.error(`Variant with id "${variantId}" not found`);
                    return;
                }

                // Update active state
                variantOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                // Call reset function if defined
                if (typeof PAGE_VARIANTS_RESET === 'function') {
                    PAGE_VARIANTS_RESET();
                }

                // Apply variant
                if (typeof variant.apply === 'function') {
                    variant.apply();
                }

                currentVariantIndex = index;

                // Close submenu
                submenu.classList.remove('active');
            });
        });
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
