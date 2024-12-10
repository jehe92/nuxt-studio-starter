/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

export default {
  theme: {
    fontFamily: {
      main: ["GenosGFG", "Arial", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.375rem", // 22px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.25rem", // 36px
      "6xl": "2.5rem", // 40px
      "7xl": "3rem", // 48px
      "8xl": "3.25rem", // 52px
      "9xl": "3.5rem", // 56px
      "10xl": "3.75rem", // 60px
      "11xl": "4rem", // 64px
      "12xl": "4.5rem", // 72px
      "13xl": "5rem", // 80px
      "14xl": "6rem", // 96px
      "15xl": "8rem", // 128px
      big: "8rem", // 128px
      icon: "5rem", // 80px
    },
    container: {
      // default breakpoints
      screens: {
        sm: "640px", //640px
        md: "768px", //768px
        lg: "1024px", //1024px
        xl: "1280px", //1280px
        "2xl": "1536px", //1536px
      },
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
    },
    extend: {
      colors: {
        // Branding colors
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          950: "var(--color-secondary-950)",
        },
        tertiary: {
          DEFAULT: " var(--color-tertiary)",
          50: "var(--color-tertiary-50)",
          100: "var(--color-tertiary-100)",
          200: "var(--color-tertiary-200)",
          300: "var(--color-tertiary-300)",
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          600: "var(--color-tertiary-600)",
          700: "var(--color-tertiary-700)",
          800: "var(--color-tertiary-800)",
          900: "var(--color-tertiary-900)",
          950: "var(--color-tertiary-950)",
        },
        // Basic content stylings
        content: {
          text: {
            DEFAULT: "var(--color-content-text)",
            invert: "var(--color-content-text-invert)",
            light: "var(--color-content-text-light)",
            caption: "var(--color-content-text-caption)",
          },
          border: {
            DEFAULT: "var(--color-content-border)",
            focus: "var(--color-content-border-focus)",
          },
          link: {
            DEFAULT: "var(--color-content-link)",
            invert: "var(--color-content-link-invert)",
            hover: "var(--color-content-link-hover)",
            focus: "var(--color-content-link-focus)",
          },
          bullets: {
            DEFAULT: "var(--color-content-bullets)",
            invert: "var(--color-content-bullets-invert)",
          },
          "page-transition-bg": "var(--color-content-page-transition-bg)",
        },
        // Headings Styling
        headings: {
          h1: {
            DEFAULT: "var(--color-headings-h1)",
            invert: "var(--color-headings-h1-invert)",
          },
          h2: {
            DEFAULT: "var(--color-headings-h2)",
            invert: "var(--color-headings-h2-invert)",
          },
          h3: {
            DEFAULT: "var(--color-headings-h3)",
            invert: "var(--color-headings-h3-invert)",
          },
          h4: {
            DEFAULT: "var(--color-headings-h4)",
            invert: "var(--color-headings-h4-invert)",
          },
          h5: {
            DEFAULT: "var(--color-headings-h5)",
            invert: "var(--color-headings-h5-invert)",
          },
          h6: {
            DEFAULT: "var(--color-headings-h6)",
            invert: "var(--color-headings-h6-invert)",
          },
          icon: {
            title: "var(--color-headings-icon-title)",
            subtitle: "var(--color-headings-icon-subtitle)",
          },
        },
        // Button Styling
        btn: {
          primary: {
            bg: "var(--color-btn-primary-bg)",
            hover: "var(--color-btn-primary-hover)",
            active: "var(--color-btn-primary-active)",
            focus: "var(--color-btn-primary-focus)",
            text: "var(--color-btn-primary-text)",
            "text-hover": "var(--color-btn-primary-text-hover)",
          },
          secondary: {
            bg: "var(--color-btn-secondary-bg)",
            hover: "var(--color-btn-secondary-hover)",
            focus: "var(--color-btn-secondary-focus)",
            text: "var(--color-btn-secondary-text)",
            "text-hover": "var(--color-btn-secondary-text-hover)",
          },
          tertiary: {
            bg: "var(--color-btn-tertiary-bg)",
            hover: "var(--color-btn-tertiary-hover)",
            focus: "var(--color-btn-tertiary-focus)",
            text: "var(--color-btn-tertiary-text)",
            "text-hover": "var(--color-btn-tertiary-text-hover)",
          },
        },
        // Section color style
        section: {
          light: "var(--color-section-light)",
          dark: "var(--color-section-dark)",
          text: "var(--color-section-text)",
          "text-invert": "var(--color-section-text-invert)",
          "text-zitat": "var(--color-section-text-zitat)",
        },
        // Stepper Navigation Styling
        stepper: {
          // Stepper btn style
          btn: {
            bg: "var(--color-stepper-btn-bg)",
            hover: "var(--color-stepper-btn-hover)",
            disabled: "var(--color-stepper-btn-disabled)",
            text: "var(--color-stepper-btn-text)",
          },
          // Stepper Text Style
          index: {
            bg: "var(--color-stepper-index-bg)",
            text: "var(--color-stepper-index-text)",
          },
        },
        // menu Styling
        menu: {
          btn: {
            bg: "var(--color-menu-btn-bg)",
            hover: "var(--color-menu-btn-hover)",
            text: "var(--color-menu-btn-text)",
          },
          link: {
            active: "var(--color-menu-link-active)",
            "hover-text": "var(--color-menu-link-hover-text)",
            hover: "var(--color-menu-link-hover)",
            text: "var(--color-menu-link-text)",
            "number-text": "var(--color-menu-link-number-text)",
          },
          grid: {
            bg: "var(--color-menu-grid-bg)",
            text: "var(--color-menu-grid-text)",
            active: "var(--color-menu-grid-active)",
            more: "var(--color-menu-grid-more)",
            "more-text": "var(--color-menu-grid-more-text)",
          },
          sublist: {
            title: "var(--color-menu-sublist-title)",
            icon: "var(--color-menu-sublist-icon)",
            border: "var(--color-menu-sublist-border)",
          },
        },
        // Styling for differen content elements
        accordion: {
          title: "var(--color-accordion-title)",
          hover: "var(--color-accordion-hover)",
          focus: "var(--color-accordion-focus)",
        },
        card: {
          icon: "var(--color-card-icon)",
          title: "var(--color-card-title)",
          "icon-invert": "var(--color-card-icon-invert)",
          "title-invert": "var(--color-card-title-invert)",
          "teaser-text": "var(--color-card-teaser-text)",
          "teaser-link": "var(--color-card-teaser-link)",
          "teaser-link-text": "var(--color-card-teaser-link-text)",
        },
        counter: {
          number: "var(--color-counter-number)",
        },
        table: {
          border: {
            th: "var(--color-table-border-th)",
            td: "var(--color-table-border-td)",
          },
          bg: {
            DEFAULT: "var(--color-table-bg)",
            hover: "var(--color-table-bg-hover)",
            even: "var(--color-table-bg-even)",
            // odd: "var(--color-table-bg-odd)",
            head: "var(--color-table-bg-head)",
          },
          text: {
            "th-highlight": "var(--color-table-text-th-highlight)",
            th: "var(--color-table-text-th)",
            td: "var(--color-table-text-td)",
          },
        },
        testimonial: {
          quote: "var(--color-testimonial-quote)",
          "quote-text": "var(--color-testimonial-quote-text)",
        },
        hero: {
          start: {
            text: "var(--color-hero-start-text)",
          },
          detail: {
            bg: "var(--color-hero-detail-bg)",
            step: "var(--color-hero-detail-step)",
            subtitle: "var(--color-hero-detail-subtitle)",
            intro: "var(--color-hero-detail-intro)",
          },
        },
        download: {
          text: "var(--color-download-text)",
          btn: {
            bg: "var(--color-download-btn-bg)",
            hover: "var(--color-download-btn-hover)",
          },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.content.text.DEFAULT"), // text color
              "--tw-prose-body": theme("colors.content.text.DEFAULT"), // text color
              "--tw-prose-bold": theme("colors.content.text.DEFAULT"), // bold text color
              "--tw-prose-headings": theme("colors.tertiary.DEFAULT"), //"#012f63", // default heading color
              "--tw-prose-quotes": theme("colors.content.text.DEFAULT"),
              "--tw-prose-bullets": theme("colors.content.bullets.DEFAULT"), // color of bullet points
              "--tw-prose-counters": theme("colors.content.text.DEFAULT"), // color of list numbers
              "--tw-prose-links": theme("colors.content.link.DEFAULT"), // link color
              "--tw-prose-captions": theme("colors.content.text.caption"), // caption text color
              "--tw-prose-th-borders": theme("colors.table.border.th"),
              "--tw-prose-td-borders": theme("colors.table.border.td"),
              fontSize: theme("fontSize.lg"), // default font size
            },
          ],
        },
        darkBg: {
          css: {
            color: theme("colors.content.text.light"), // text color
            "--tw-prose-body": theme("colors.content.text.light"), // text color
            "--tw-prose-bold": theme("colors.content.text.light"), // bold text color
            "--tw-prose-headings": theme("colors.content.text.light"), // default heading color
            "--tw-prose-quotes": theme("colors.content.text.light"),
            "--tw-prose-quote-borders": theme("colors.content.text.light"),
            "--tw-prose-bullets": theme("colors.content.bullets.light"), // color of bullet points
            "--tw-prose-counters": theme("colors.content.text.light"), // color of list numbers
            "--tw-prose-links": theme("colors.content.link.light"), // link color
            "--tw-prose-captions": theme("colors.content.text.light"), // caption text color
            "--tw-prose-th-borders": theme("colors.table.border.th"),
            "--tw-prose-td-borders": theme("colors.table.border.td"),
          },
        },
        smallContent: {
          css: {
            fontSize: theme("fontSize.sm"), // default font size
          },
        },
      }),
      textShadow: {
        none: "none",
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 0 10px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      borderRadius: {
        btn: "var(--border-radius-btn)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  // safelist: ["lg:mb-20"],
};
