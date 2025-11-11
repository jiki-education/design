/**
 * Implementation Notes System
 *
 * This script provides a floating button and modal for displaying implementation
 * notes on design pages. Designers can add technical notes, specifications, or
 * guidance for developers implementing the designs.
 *
 * Usage:
 * 1. Include this script in your HTML: <script src="../ui-kit/implementation-notes.js"></script>
 * 2. Define IMPLEMENTATION_NOTES constant in a script tag before including this file:
 *    <script>
 *      const IMPLEMENTATION_NOTES = `
 *        # Implementation Notes
 *
 *        ## Technical Requirements
 *        - Use responsive breakpoint at 968px
 *        - Implement form validation before submission
 *
 *        ## Design Specifications
 *        - Button hover states should have smooth transitions
 *        - Error messages appear with shake animation
 *      `;
 *    </script>
 */

(function() {
    'use strict';

    // Check if IMPLEMENTATION_NOTES is defined
    if (typeof IMPLEMENTATION_NOTES === 'undefined' || !IMPLEMENTATION_NOTES || IMPLEMENTATION_NOTES.trim() === '') {
        console.warn('IMPLEMENTATION_NOTES not defined or empty. Implementation notes button will not be shown.');
        return;
    }

    // Inject CSS styles
    const style = document.createElement('style');
    style.textContent = `
        /* Implementation Notes Button */
        .impl-notes-btn {
            position: fixed;
            bottom: 24px;
            right: 96px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #10b981;
            border: 3px solid white;
            box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .impl-notes-btn:hover {
            background: #059669;
            box-shadow: 0 6px 24px rgba(16, 185, 129, 0.5);
            transform: scale(1.05);
        }

        .impl-notes-btn svg {
            width: 24px;
            height: 24px;
        }

        /* Implementation Notes Modal */
        .impl-notes-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            padding: 20px;
        }

        .impl-notes-modal.active {
            opacity: 1;
            pointer-events: all;
        }

        .impl-notes-content {
            background: white;
            border-radius: 16px;
            max-width: 800px;
            width: 100%;
            max-height: 80vh;
            overflow: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }

        .impl-notes-modal.active .impl-notes-content {
            transform: scale(1);
        }

        .impl-notes-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 32px;
            border-bottom: 1px solid #e2e8f0;
        }

        .impl-notes-title {
            font-size: 24px;
            font-weight: 500;
            color: #1a365d;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .impl-notes-title svg {
            width: 28px;
            height: 28px;
            color: #10b981;
        }

        .impl-notes-close {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s ease;
        }

        .impl-notes-close:hover {
            background: #f7fafc;
        }

        .impl-notes-close svg {
            width: 24px;
            height: 24px;
            color: #718096;
        }

        .impl-notes-body {
            padding: 24px 32px;
            line-height: 1.7;
            color: #2d3748;
        }

        .impl-notes-body h1,
        .impl-notes-body h2,
        .impl-notes-body h3 {
            color: #1a365d;
            font-weight: 500;
            margin-bottom: 12px;
        }

        .impl-notes-body h1 {
            font-size: 28px;
            margin-bottom: 16px;
        }

        .impl-notes-body h2 {
            font-size: 22px;
            margin-bottom: 24px;
        }

        .impl-notes-body h3 {
            font-size: 18px;
            font-weight: 600;
        }

        .impl-notes-body p {
            margin-bottom: 16px;
        }

        .impl-notes-body strong {
            font-size: 16px;
            font-weight: 600;
            color: #1a365d;
        }

        .impl-notes-body ul,
        .impl-notes-body ol {
            margin-bottom: 16px;
            padding-left: 24px;
        }

        .impl-notes-body li {
            margin-bottom: 8px;
        }

        .impl-notes-body code {
            background: #f7fafc;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 14px;
            color: #e53e3e;
        }

        .impl-notes-body pre {
            background: #2d3748;
            color: #e2e8f0;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 16px;
        }

        .impl-notes-body pre code {
            background: transparent;
            color: inherit;
            padding: 0;
        }

        .impl-notes-body blockquote {
            border-left: 4px solid #10b981;
            padding-left: 16px;
            margin-bottom: 16px;
            color: #4a5568;
            font-style: italic;
        }

        .impl-notes-body hr {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 24px 0;
        }
    `;
    document.head.appendChild(style);

    // Simple markdown-like parser
    function parseNotes(text) {
        return text
            // Headers
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            // Bold
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Italic
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Code
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // Unordered lists
            .replace(/^\- (.*$)/gm, '<li>$1</li>')
            // Wrap lists
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            // Line breaks
            .replace(/\n\n/g, '</p><p>')
            // Wrap in paragraphs
            .replace(/^(?!<[hul]|<\/[hul])(.*$)/gm, '<p>$1</p>')
            // Clean up empty paragraphs
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<[uh])/g, '$1')
            .replace(/(<\/[uh][^>]*>)<\/p>/g, '$1');
    }

    // Create button and modal HTML
    function createImplementationNotes() {
        // Create button
        const button = document.createElement('div');
        button.className = 'impl-notes-btn';
        button.id = 'impl-notes-btn';
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3L8 21" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M16 3L16 21" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M3 8L21 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M3 16L21 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'impl-notes-modal';
        modal.id = 'impl-notes-modal';
        modal.innerHTML = `
            <div class="impl-notes-content">
                <div class="impl-notes-header">
                    <div class="impl-notes-title">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3L8 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M16 3L16 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M3 8L21 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M3 16L21 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Implementation Notes
                    </div>
                    <button class="impl-notes-close" id="impl-notes-close">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <div class="impl-notes-body" id="impl-notes-body"></div>
            </div>
        `;

        document.body.appendChild(button);
        document.body.appendChild(modal);

        return { button, modal };
    }

    // Initialize when DOM is ready
    function init() {
        const { button, modal } = createImplementationNotes();
        const closeBtn = document.getElementById('impl-notes-close');
        const bodyElement = document.getElementById('impl-notes-body');

        // Parse and insert notes
        bodyElement.innerHTML = parseNotes(IMPLEMENTATION_NOTES.trim());

        // Open modal
        button.addEventListener('click', () => {
            modal.classList.add('active');
        });

        // Close modal on close button
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
