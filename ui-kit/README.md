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
- **Gray 800** (`--color-gray-800`): `#1a365d` - Dark gray for text

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
