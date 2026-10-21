---
name: works-entry
description: Write or edit a portfolio entry (MDX in src/content/works/) for works.advtszn.xyz. Use whenever adding a new project to the site, expanding an existing entry's deep dive, or restructuring one. Covers the research-first workflow, frontmatter schema, voice rules, and the screenshot/video component patterns.
---

# Writing a works entry

A works entry is one MDX file at `src/content/works/<slug>.mdx`. The slug is the URL and the folder name used for every asset. Frontmatter renders the project header and card; the body is an optional deep dive.

## 1. Gather before drafting

Never draft from the repo alone. Ask Advait for his brain dump on the project plus any links (repo, tweets, Notion docs, live URL) before writing, and only skip the ask if he already pasted that context.

Then research what he pointed at:

- GitHub: `gh api repos/<owner>/<repo>/contents/<path> -H "Accept: application/vnd.github.raw"` (works for private repos too).
- Some projects are checked out locally under `~/Desktop/work/wldd/`.
- Notion pages: unauthenticated `loadPageChunk` POST.
- Tweets: `cdn.syndication.twimg.com`.
- Infra config (Caddyfiles, VM setup) usually lived on servers, not in the repos. Don't hunt for it.

Two rules that override the code:

- **His account wins.** The checked-out repo can lag reality. Teams took projects over, approaches changed after the last commit. When he describes how something worked, write his version. Don't re-grep the code to "correct" him.
- **Don't verify by running things.** No auto-starting the dev server, no Playwright screenshots of live sites. He runs the server and supplies his own screenshots.

## 2. Frontmatter

Validated by `src/content.config.ts`. Every field except `url` is required.

```yaml
---
title: orbe                  # lowercase unless it's a real proper name ("The Kimchi Premium")
category: product            # product | internship | assignment | freelance | work | side project | dev tool | experiment
role: fullstack              # fullstack | development | ...
tech:                        # lowercase slugs: typescript, nextjs, trpc, drizzle, hono, astro
  - typescript
  - nextjs
url: https://orbe.advtszn.xyz  # optional, omit the key entirely if there's nothing live
date: 2026-04-15             # a real date, not a string
thumbnail: /images/orbe/thumbnail.png
timeline: 3 months
overview: >-
  Two or three sentences. What it is and who it's for, in plain language. This
  is also the page meta description.
contribution: >-
  What *he* built, specifically. Name the pieces.
---
```

## 3. Body

Length is a judgment call, and the default is "ask." Some entries are frontmatter plus a demo video and nothing else (`rook.mdx`); big projects get a full deep dive (`orbe.mdx`). Don't pad a small project into a long one. If he gutted a draft once, that's the signal for that project.

When there is a deep dive, it opens with `## Deep Dive` and everything under it is `###`. Headings are rendered uppercase by CSS, so write them in normal title case.

Structure depends on where the project came from:

- **Products he conceived himself** (orbe): product-oriented. Market insight or problem first, then the idea, then a walkthrough feature by feature with screenshot grids, then an honest "what got cut" section, then competitive positioning (why not the obvious incumbents).
- **Client, internship, or assignment work** (kimchipremium, aeonik): lead with the problem and the constraint, then walk the system in the order data moves through it, then an honest closing section. Keep verdicts verbatim, including rejections. The aeonik entry prints the interview feedback that came with not getting the job; that candor is the point.

### Voice

- **No em dashes.** Use periods, commas, parentheses, or semicolons. This is a hard rule.
- First person, specific, no résumé padding. Name the actual library, the actual interval, the actual fallback.
- Be candid about what was rushed, hardcoded, vibe coded, or never built. Those sections land better than the polish.

## 4. Media

See `references/media.md` for the exact component snippets, paths, and ffmpeg settings.

## 5. Finish

Leave the dev server to him. Mention what you'd still want from him (screenshots, a thumbnail, a video) rather than inventing placeholders for assets that don't exist.
