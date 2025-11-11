# UI Kit

This folder contains the design system components and guidelines for the jiki-design repository.

## Files

- **components.html** - A visual reference page showcasing all UI components with their various states and variations
- **styles.css** - Shared stylesheet containing all UI Kit component styles
- **variants.js** - Shared JavaScript for adding a variants menu to design pages

## UI Kit Rules

### Purpose
The UI Kit serves as the single source of truth for all design patterns, components, and styles used across designs in this repository.

### Guidelines

1. **Consistency** - All designs in the `designs/` folder should reference and use components defined in this UI Kit
2. **Component Documentation** - Each component in `components.html` should include:
   - Visual examples of all states (default, hover, active, disabled)
   - Variations (sizes, colors, themes)
   - Usage guidelines when applicable

3. **Updates** - When adding new components or styles:
   - First add them to `components.html`
   - Document any specific rules or guidelines in this README
   - Ensure consistency with existing patterns

### Structure
The `components.html` file is organized into sections by component type (buttons, typography, forms, etc.). Each section contains examples that can be referenced when creating new designs.

---

## Design System

### Typography

**Primary Font Family**: `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

All designs should use Poppins as the primary typeface, with system font fallbacks for optimal performance and accessibility.

### Color Palette

#### Primary Colors
- **Primary 500** (`--color-primary-500`): `#3b82f6` - Main primary color
- **Primary 600** (`--color-primary-600`): `#2563eb` - Darker primary for hover states and gradients

#### Neutral Colors
- **Gray 200** (`--color-gray-200`): `#e2e8f0` - Light gray for borders
- **Gray 700** (`--color-gray-700`): `#2d3748` - Medium gray for labels
- **Gray 800** (`--color-gray-800`): `#1a365d` - Dark gray for text

#### Error Colors
- **Error 500** (`--color-error-500`): `#ef4444` - Error states and messages

#### Shadow Colors
- **Primary Shadow** (`--color-primary-shadow`): `rgba(59, 130, 246, 0.3)` - Default shadow for primary elements
- **Primary Shadow Hover** (`--color-primary-shadow-hover`): `rgba(59, 130, 246, 0.2)` - Lighter shadow for hover states
- **Subtle Shadow** (`--color-shadow-subtle`): `rgba(0, 0, 0, 0.06)` - Light shadow for secondary elements

### Buttons

#### Button Variants

**Primary Button**
- Purpose: Main call-to-action buttons
- Background: Linear gradient from Primary 500 to Primary 600 (135deg)
- Text color: White
- Border: 2px solid Primary 500
- Box shadow: 0 2px 8px Primary Shadow
- Transition: all 0.3s ease
- Hover state:
  - Border color: Primary 600
  - Box shadow: 0 0 0 4px Primary Shadow Hover, 0 4px 16px rgba(59, 130, 246, 0.4)

**Secondary Button**
- Purpose: Secondary actions and alternative options (e.g., "Sign in with Google")
- Background: White
- Text color: Gray 800
- Border: 2px solid Gray 200
- Box shadow: 0 2px 8px Subtle Shadow
- Transition: all 0.3s ease
- Icon support: Optional icon with 12px gap between icon and text
- Hover state:
  - Border color: Primary 500
  - Box shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 16px rgba(59, 130, 246, 0.2)

#### Button Sizes

**Large Button**
- Padding: 16px 20px
- Font size: 17px
- Font weight: 500
- Border radius: 12px
- Border width: 2px

**Note**: Button width is contextual and should be set based on the container or use case (e.g., full-width in forms, auto-width in navigation).

#### Button States

**Loading State (`.ui-btn-loading`)**
- Purpose: Indicate processing or loading action
- Works with both Primary and Secondary variants
- Features:
  - Animated spinner using `::before` pseudo-element
  - Spinner size: 18px × 18px
  - Animation: 0.6s linear infinite rotation
  - Primary button: White spinner on gradient background
  - Secondary button: Blue spinner (Primary 500) on white background
  - Disabled interaction: `pointer-events: none`
  - Flexbox layout with 12px gap between spinner and text
- Usage: Add `.ui-btn-loading` class to button along with variant class
- Text recommendation: Use messages like "Logging in...", "Processing...", "One moment please..."

### Form Fields

#### Form Field Structure

A form field consists of:
1. Field wrapper (`.ui-form-field-large`)
2. Label (`.ui-form-field-label-large`)
3. Input wrapper (`.ui-form-field-input-wrapper-large`)
4. Input (`.ui-form-field-input-large`)
5. Optional icons (`.ui-form-field-icon-large`)
6. Optional error message (`.ui-form-field-error-message`)

#### Field Components

**Label - Large**
- Font size: 15px
- Font weight: 600
- Color: Gray 700
- Margin bottom: 8px
- Focus state: Changes to Primary 500
- Transition: color 0.3s ease

**Input - Large**
- Padding: 14px 16px (or 14px 16px 14px 48px with icon)
- Border: 2px solid Gray 200
- Border radius: 12px
- Font size: 16px
- Background: white
- Transition: all 0.3s ease
- Hover state:
  - Border color: Primary 500
  - Box shadow: 0 0 0 2px rgba(59, 130, 246, 0.1)
- Focus state:
  - Border color: Primary 500
  - Box shadow: 0 0 0 4px rgba(59, 130, 246, 0.15)
- Error state:
  - Border color: Error 500
  - Shake animation
  - Focus box shadow: 0 0 0 4px rgba(239, 68, 68, 0.15)

**Icons (Optional)**
- Size: 18px × 18px
- Position: absolute, left 16px
- Two states: gray (default) and blue (focus)
- Gray icon: opacity 1 → 0 on focus
- Blue icon: opacity 0 → 1 on focus
- When icon is present, add `.ui-form-field-input-with-icon` class to input

**Error Message**
- Font size: 14px
- Font weight: 500
- Color: Error 500
- Margin top: 4px
- Only displayed when field has `.ui-form-field-error` class

### Links

**Link Component (`.ui-link`)**
- Color: Primary 500
- Text decoration: none
- Font weight: 500
- Hover state: underline

**Note**: Font size is not specified - links inherit the font size from their context

---

## Page Variants System

The UI Kit includes a shared variants menu system (`variants.js`) that allows design pages to demonstrate different states and variations (e.g., error states, loading states, empty states).

### Usage

1. **Include the script** in your HTML file (before the closing `</body>` tag):
   ```html
   <script src="../ui-kit/variants.js"></script>
   ```

2. **Define variants** in a `<script>` tag in the `<head>` section, before the variants.js import:
   ```html
   <script>
       const PAGE_VARIANTS = [
           {
               id: 'default',
               label: 'Default',
               apply: () => {
                   // Reset to default state
               }
           },
           {
               id: 'error',
               label: 'Password Error',
               apply: () => {
                   // Apply error state
                   document.getElementById('password-field').classList.add('ui-form-field-error');
                   document.getElementById('password-error-message').style.display = 'block';
               }
           }
       ];
   </script>
   ```

3. **The variants menu will automatically appear** in the bottom-right corner of the page with a floating button.

### Variant Object Structure

Each variant object must have:
- `id` (string): Unique identifier for the variant
- `label` (string): Display name shown in the menu
- `apply` (function): Function that applies the variant's changes to the page

### Features

- **Automatic menu injection**: The script automatically creates and styles the floating menu
- **Active state tracking**: Shows which variant is currently active
- **Click-outside to close**: Menu closes when clicking anywhere outside of it
- **Smooth transitions**: All state changes are animated
- **No CSS required**: All styles are injected automatically by the script

### When to Use

Use the variants system when you want to demonstrate:
- Error states (form validation, network errors, etc.)
- Loading states
- Empty states (no data, no results, etc.)
- Different user permissions or roles
- Alternative layouts or content arrangements

### Example

See `designs/login.html` for a complete working example of the variants system.
