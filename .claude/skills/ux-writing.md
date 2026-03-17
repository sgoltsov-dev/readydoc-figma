# UX Writing — Section Titles & Documentation Copy

Guidelines for writing clear, readable section headings and labels in the Component Readme Generator plugin.

## Core principles

1. **Spell out numbers** for 1–10 (One, Two, Three…), use numerals for 11+
2. **Name the thing** — don't just say "active", say "active state" or "active states"
3. **Be consistent** — use the same grammatical structure across all headings in a group
4. **Avoid adverbs** — "simultaneously" is redundant when "states" already implies co-existence
5. **Prefer nouns over verbs** in titles — "Two active states" not "Two activated"

## Section title patterns

### Boolean/toggle combination sections
| Count | Title |
|---|---|
| 1 | `One active state` |
| 2 | `Two active states` |
| 3 | `Three active states` |
| N | `{Word} active states` |

### Property sections (variant values)
- Use the property name as-is (e.g. `Size`, `Type`, `Variant`)
- Do not append "options", "states", or "values" — the context makes it clear

### Special sections
| Section | Title |
|---|---|
| Real BOOLEAN properties | `Boolean options` |
| Usage guidance | `Usage` |
| Accessibility | `Accessibility` |

## Number words reference
One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten — capitalize, spell out.
For 11+, use numerals: `11 active states`.

## What to avoid
- `1 active` — missing noun, numeral not word
- `2 active simultaneously` — adverb is redundant, numeral
- `Options for Size` — verbose, just use `Size`
- `True/False states` — exposes implementation detail, not user-facing
