# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository is used to create HTML design mockups that will later be implemented by a front-end developer. All designs are static HTML files with inline CSS that demonstrate the visual design and layout.

## Repository Structure

```
jiki-design/
├── designs/          # All design mockups live here as HTML files
│   ├── index.html       # Catalog page listing all designs by category
│   └── README.md        # Guidelines for adding and organizing designs
├── ui-kit/          # Design system components and guidelines
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

### Design Philosophy

- Designs are static mockups, not functional applications
- Focus on visual presentation and layout
- Include comments in HTML to explain design decisions or component usage
- Demonstrate different states (hover, active, disabled) using multiple examples rather than JavaScript

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
