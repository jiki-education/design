# UI Kit

This folder contains the design system components and guidelines for the jiki-design repository.

## Files

- **components.html** - A visual reference page showcasing all UI components with their various states and variations

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
- Color: Error 500
- Margin top: 4px
- Only displayed when field has `.ui-form-field-error` class
