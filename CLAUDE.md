# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Getting Started

**Before working on any tasks, always read `README.md` in the repository root.** This provides an overview of the repository structure and links to key resources.

### Running the Development Server

Design files use JavaScript features (like `fetch()` for loading shared components) that require a web server to work properly. If you encounter CORS errors or files not loading when opening HTML files directly:

**Run the development server:**
```bash
./bin/dev
```

This starts an http-server on port 8000. Access designs at:
- http://localhost:8000/designs/
- http://localhost:8000/ui-kit/components.html

**Note:** Opening HTML files directly with `file://` protocol will cause errors due to browser security restrictions. Always use the development server for testing.

**Important:** The designer is not technical, so will need you to run `./bin/dev` for her if she can't get things working. Proactively propose doing this if she reports issues viewing designs and the server is not already running.

## Repository Purpose

This repository is used to create HTML design mockups that will later be implemented by a front-end developer. All designs are static HTML files with inline CSS that demonstrate the visual design and layout.

## Repository Structure

```
jiki-design/
├── designs/          # All design mockups live here as HTML files
│   ├── index.html       # Catalog page listing all designs by category
│   ├── login.html       # Example design file
│   └── README.md        # Guidelines for adding and organizing designs
├── ui-kit/          # Design system components and guidelines
│   ├── styles.css       # Shared CSS with variables and components
│   ├── components.html  # Visual reference of all UI components
│   └── README.md       # UI Kit rules and documentation
├── experimentation/ # Experimental designs and prototypes (not final)
│   └── README.md       # Guidelines for experimentation
└── CLAUDE.md        # This file
```

## Working with Designs

### Creating New Designs

1. All design files should be placed in the `designs/` directory
2. Each design should be a self-contained HTML file with inline CSS
3. Reference components and styles from the UI Kit (`ui-kit/components.html`)
4. Use semantic HTML and organize styles clearly
5. Name files descriptively (e.g., `login-page.html`, `dashboard-layout.html`)
6. Add new designs to `designs/index.html` in the appropriate category section

### Design Index

The `designs/index.html` file serves as a visual catalog of all designs:

- Organized into sections: Authentication & Onboarding, Dashboard & Main Views, Forms & Data Entry, Settings & Configuration, Components & Patterns
- When adding a new design, update the corresponding section in `index.html`
- If creating a design that doesn't fit existing sections, add a new section following the same structure
- See `designs/README.md` for detailed organization guidelines

### UI Kit Workflow

The `ui-kit/` folder contains the design system:

- **Before creating new designs**: Review `ui-kit/components.html` to use existing components and patterns
- **When adding new components**: First add them to `ui-kit/components.html` with examples of all states and variations
- **Document conventions**: Update `ui-kit/README.md` if introducing new patterns or rules

### Colors

Always use colors from the standard tailwind palletes of:
- blue-xxx
- emerald-xxx (but call it green-xxx)
- red-xxx
- amber-xxx
- slate-xxx (but call it gray-xxx)
- purple-xxx (for premium features and special states)

When creating a new file, add all these to the :root first.

The only time to use arbitary colors is in brand colors or sometimes gradiants, Do not use arbitary colors without permission. Ask if you want to use them.

### Design Philosophy

- Designs are static mockups, not functional applications
- Focus on visual presentation and layout
- Include comments in HTML to explain design decisions or component usage
- Demonstrate different states (hover, active, disabled) using multiple examples rather than JavaScript

### Implementation Notes

The UI Kit includes an **implementation notes system** (`ui-kit/implementation-notes.js`) that displays technical notes in a floating modal:

- Define notes in a `IMPLEMENTATION_NOTES` constant using markdown format
- Place the constant in a `<script>` tag in the `<head>` section
- Include `<script src="../ui-kit/implementation-notes.js"></script>` before closing `</body>`
- A green floating button appears in the bottom-right corner
- Clicking the button opens a modal with formatted notes
- Use markdown for formatting (headings, lists, code, bold, etc.)

**When to add implementation notes:**
- Document which UI Kit components are used
- Explain color variants and semantic meanings
- Note special patterns or conventions
- Describe JavaScript functionality
- Highlight important technical details for implementers

**Example:**
```html
<head>
    ...
    <script>
        const IMPLEMENTATION_NOTES = `
# Implementation Notes

- The tab's selected color is linked to the type (e.g. completed tab is green)
- The header and tabs are both UI components
        `;
    </script>
</head>
<body>
    ...
    <script src="../ui-kit/implementation-notes.js"></script>
</body>
```

### Page Variants

The UI Kit includes a **variants system** (`ui-kit/variants.js`) for demonstrating different states of a design:

- Use variants to show error states, loading states, empty states, etc.
- Define variants in a `<script>` tag in the `<head>` section
- Create a `PAGE_VARIANTS_RESET` function that resets all elements to default state
- Create a `PAGE_VARIANTS` array with variant objects (`id`, `label`, `apply` function)
- The script automatically adds a floating menu to switch between variants
- A "Default" variant is automatically included

**When to use variants:**
- Demonstrating form validation errors
- Showing button loading states
- Displaying empty states vs. populated states
- Showing different user permission levels
- Any other state variations that aren't the default

**Example usage:**
```html
<script>
    const PAGE_VARIANTS_RESET = () => {
        // Reset all elements to default state
        document.getElementById('field').classList.remove('ui-form-field-error');
        document.getElementById('btn').classList.remove('ui-btn-loading');
    };

    const PAGE_VARIANTS = [
        {
            id: 'error',
            label: 'Form Error',
            apply: () => {
                document.getElementById('field').classList.add('ui-form-field-error');
            }
        }
    ];
</script>
<script src="../ui-kit/variants.js"></script>
```

See `ui-kit/README.md` for complete variants system documentation.

### CSS Styling Rules

- **Inline styles by default**: Use inline `style=""` attributes for all styling unless the class is used in multiple places
- **Create classes only for reuse**: Only define CSS classes in `<style>` tags when the same styles are applied to multiple elements
- **Exception for UI Kit**: UI Kit components (`.ui-*` classes) should always use classes, not inline styles
- **Text wrapping**: Always use `text-wrap-style: balance;` on text elements (paragraphs, headings, labels, etc.) to ensure balanced, visually appealing line breaks
- **Avoid margin-top**: Prefer `margin-bottom` for spacing or use flexbox with `gap`. This creates more predictable and maintainable layouts. Only use `margin-top` when truly necessary (e.g., negative margins for overlapping elements)

### Git Workflow

- **Do not commit unless explicitly requested**: Never commit changes automatically. Always wait for explicit user instruction to commit and push changes.

## File Organization

- Keep each design as a single HTML file with inline styles for easy sharing
- Use relative paths if referencing any assets
- Group related designs with consistent naming (e.g., `onboarding-1.html`, `onboarding-2.html`)

### Experimentation Folder

The `experimentation/` folder is for exploratory work:

- Use this space to try new concepts without committing to the UI Kit
- Experiments don't need to follow UI Kit standards
- Files can be rough, incomplete, or exploratory
- Once approved, refine experiments and move them to `designs/`
- See `experimentation/README.md` for detailed guidelines

---

## UI Kit Implementation Details

### Shared Stylesheet (`ui-kit/styles.css`)

All UI Kit components are defined in `ui-kit/styles.css` which should be imported into design files:

```html
<link rel="stylesheet" href="../ui-kit/styles.css">
```

**Key Features:**
- CSS variables for colors (`:root`)
- CSS nesting for component organization
- `.ui-body` class for global font and antialiasing
- All UI Kit classes prefixed with `.ui-` (e.g., `.ui-btn-large`, `.ui-form-field-large`, `.ui-link`)

### Component Structure Philosophy

**Nested Selectors:** UI Kit components use CSS nesting to minimize class requirements in HTML. Elements are styled based on their position within a parent `.ui-` class rather than requiring individual classes.

Example - Form fields only need the parent class:
```html
<div class="ui-form-field-large">
    <label for="email">Email</label>
    <div>
        <svg>...</svg>  <!-- Automatically styled -->
        <svg>...</svg>  <!-- Automatically styled -->
        <input type="email" id="email">  <!-- Automatically styled -->
    </div>
</div>
```

**See `ui-kit/README.md` for:**
- Complete color palette with variable names
- Button variants and sizes
- Form field structure and states
- Link styling
- Component documentation

### Design Tokens

- **Typography**: Poppins font family (applied via `.ui-body` class on `<body>`)
- **Colors**: All colors use CSS variables (see `ui-kit/styles.css` `:root` section)
- **Sizing**: Component sizes (Large, etc.) are distinct classes that handle all size-related properties
- **Variants**: Component variants (Primary, Secondary) are separate classes that handle only color/style differences

### Adding New Components

1. Define styles in `ui-kit/styles.css` using CSS nesting
2. Add visual examples to `ui-kit/components.html`
3. Document in `ui-kit/README.md`
4. Use `.ui-` prefix for all class names
5. Leverage nesting to minimize required classes in HTML
