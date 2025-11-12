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
- **Blue 500** (`--color-blue-500`): `#3b82f6` - Main blue color
- **Blue 600** (`--color-blue-600`): `#2563eb` - Darker blue for hover states and gradients
- **Purple 500** (`--color-purple-500`): `#a855f7` - Purple accent (e.g., "In Progress" states)
- **Green 500** (`--color-green-500`): `#10b981` - Green accent (e.g., "Complete" states)

#### Lynch Gray Scale
- **Lynch 50** (`--color-lynch-50`): `#f6f7f9` - Lightest gray for backgrounds
- **Lynch 100** (`--color-lynch-100`): `#eceef2` - Very light gray
- **Lynch 200** (`--color-lynch-200`): `#d5d9e2` - Light gray for borders
- **Lynch 300** (`--color-lynch-300`): `#b1bbc8` - Light-medium gray
- **Lynch 400** (`--color-lynch-400`): `#8695aa` - Medium gray (used for "Locked" active state)
- **Lynch 500** (`--color-lynch-500`): `#64748b` - Medium gray (subtitles, default tab text)
- **Lynch 600** (`--color-lynch-600`): `#526077` - Medium-dark gray
- **Lynch 700** (`--color-lynch-700`): `#434e61` - Dark gray for labels
- **Lynch 800** (`--color-lynch-800`): `#3a4252` - Darker gray
- **Lynch 900** (`--color-lynch-900`): `#343a46` - Very dark gray
- **Lynch 950** (`--color-lynch-950`): `#23272e` - Darkest gray for headings and primary text

#### Error Colors
- **Error 500** (`--color-error-500`): `#ef4444` - Error states and messages

#### Shadow Colors
- **Blue Shadow** (`--color-blue-shadow`): `rgba(59, 130, 246, 0.3)` - Default shadow for blue elements
- **Blue Shadow Hover** (`--color-blue-shadow-hover`): `rgba(59, 130, 246, 0.2)` - Lighter shadow for hover states
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

### Page Header

**Page Header Component (`.ui-page-header`)**

Standard page header used at the top of main content areas.

**Structure:**
- H1 title with optional icon
- Subtitle paragraph

**Styling:**
- H1: 34px, font-weight 600, color Lynch 950, flexbox with 12px gap for icon
- Icon: 34px × 34px, color Blue 500
- Subtitle: 16px, color Lynch 500
- Both title and subtitle use text-wrap-style: balance

**Usage:**
```html
<header class="ui-page-header">
    <h1>
        <svg>...</svg>
        Page Title
    </h1>
    <p>Subtitle description text</p>
</header>
```

### Page Tabs

**Page Tabs Component (`.ui-page-tabs`)**

Horizontal tab navigation for filtering or switching page views.

**Structure:**
- Container with flexbox layout (24px gap, wraps)
- Button elements for each tab
- Optional SVG icons in tabs

**Tab States:**
- Default: Lynch 500 text color
- Hover: Blue 500 text color
- Active: Colored with 2px underline indicator

**Color Variants:**
- **Blue (default)**: No data attribute needed - use for primary navigation (e.g., "All")
- **Purple**: `data-color="purple"` - use for "In Progress" states
- **Green**: `data-color="green"` - use for "Complete" states
- **Gray**: `data-color="gray"` - use for "Locked" states (Lynch 400)

**Styling:**
- Font size: 15px, font-weight 450
- Padding: 8px 0
- Icon size: 16px × 16px
- Gap between icon and text: 8px
- Active underline: 2px height, border-radius 2px

**Usage:**
```html
<div class="ui-page-tabs">
    <button class="active" data-tab="all">
        <svg>...</svg>
        All
    </button>
    <button data-color="purple" data-tab="in-progress">
        <svg>...</svg>
        In Progress
    </button>
    <button data-color="green" data-tab="complete">
        <svg>...</svg>
        Complete
    </button>
    <button data-color="gray" data-tab="locked">
        <svg>...</svg>
        Locked
    </button>
</div>

<!-- Tab content sections -->
<div data-tab-content="all">
    Content for All tab
</div>
<div data-tab-content="in-progress" style="display: none;">
    Content for In Progress tab
</div>
<!-- etc... -->

<!-- Include tabs.js script -->
<script src="../ui-kit/tabs.js"></script>
```

**Tab Functionality (tabs.js):**

The UI Kit includes a `tabs.js` script that provides automatic tab switching functionality.

**How it works:**
1. Add `data-tab="unique-id"` attribute to each tab button
2. Add `data-tab-content="unique-id"` attribute to corresponding content sections
3. Include `<script src="../ui-kit/tabs.js"></script>` before closing `</body>` tag
4. The script automatically handles:
   - Adding/removing `.active` class on tabs
   - Showing/hiding content sections based on selected tab
   - Preserving color variants (data-color attributes)

**Initial State:**
- Set `class="active"` on the default tab button
- Set `style="display: none;"` on all non-default content sections

---

## Page Variants System

The UI Kit includes a shared variants menu system (`variants.js`) that allows design pages to demonstrate different states and variations (e.g., error states, loading states, empty states).

### Usage

1. **Include the script** in your HTML file (before the closing `</body>` tag):
   ```html
   <script src="../ui-kit/variants.js"></script>
   ```

2. **Define a reset function and variants** in a `<script>` tag in the `<head>` section, before the variants.js import:
   ```html
   <script>
       // Reset function called before each variant
       const PAGE_VARIANTS_RESET = () => {
           // Reset all elements to default state
           const passwordField = document.getElementById('password-field');
           const passwordErrorMessage = document.getElementById('password-error-message');
           const submitBtn = document.getElementById('submit-btn');

           passwordField.classList.remove('ui-form-field-error');
           passwordErrorMessage.style.display = 'none';
           submitBtn.classList.remove('ui-btn-loading');
           submitBtn.textContent = 'Log In';
       };

       const PAGE_VARIANTS = [
           {
               id: 'error',
               label: 'Password Error',
               apply: () => {
                   // Apply error state
                   document.getElementById('password-field').classList.add('ui-form-field-error');
                   document.getElementById('password-error-message').style.display = 'block';
               }
           },
           {
               id: 'processing',
               label: 'Button Processing',
               apply: () => {
                   // Apply processing state
                   document.getElementById('submit-btn').classList.add('ui-btn-loading');
                   document.getElementById('submit-btn').textContent = 'Logging in...';
               }
           }
       ];
   </script>
   ```

3. **The variants menu will automatically appear** in the bottom-right corner of the page with a floating button. A "Default" variant is automatically added as the first option - you don't need to define it manually.

### Reset Function

The `PAGE_VARIANTS_RESET` function is called before each variant is applied. This function should reset all page elements to their default state, making variant implementations cleaner since they only need to apply changes, not undo previous states.

### Variant Object Structure

Each variant object must have:
- `id` (string): Unique identifier for the variant
- `label` (string): Display name shown in the menu
- `apply` (function): Function that applies the variant's changes to the page (after reset has been called)

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
