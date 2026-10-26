# Media patterns

## Paths

| Asset | Location |
| --- | --- |
| Screenshots (imported, optimized) | `src/assets/images/<slug>/<name>.png` |
| Thumbnail (referenced by URL in frontmatter) | `public/images/<slug>/thumbnail.png` |
| Videos | `public/videos/<slug>/<name>.mp4` |

Screenshots go through Astro's `Image`, so they must be imported from `src/assets/`. The thumbnail is a plain URL string, so it lives in `public/`.

## Screenshots

Import every image at the top of the MDX, right after the Screenshot import, in the order they appear in the body:

```mdx
import Screenshot from "~/components/common/screenshot.astro";
import leads from "~/assets/images/orbe/leads.png";
import leadDetail from "~/assets/images/orbe/lead-detail.png";
```

One image, full width:

```mdx
<Screenshot src={pipelineDiagram} alt="Kimchi Premium ETL pipeline architecture" />
```

Two up (the default for a feature walkthrough, list view + detail view):

```mdx
<div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-12 place-items-center">
  <Screenshot src={leads} alt="Leads list with enrichment status" />
  <Screenshot src={leadDetail} alt="Enriched lead detail: business profile, ICP, and work description" />
</div>
```

Three up (onboarding steps, phone screens):

```mdx
<div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-12 place-items-center">
```

Alt text is descriptive, lowercase-ish sentence fragments naming what's on screen. Images are click-to-zoom via the global lightbox; the component wires that up, nothing to add.

## Video

Always `autoplay loop muted playsinline`, no controls.

```mdx
<figure class="my-12 flex flex-col items-center gap-2">
  <video class="rounded max-w-5xl w-full" src="/videos/rook/demo.mp4" autoplay loop muted playsinline />
  <figcaption class="text-muted-foreground text-sm">
    from the <a href="https://x.com/advtszn/status/..." target="_blank" rel="noopener">launch tweet</a>
  </figcaption>
</figure>
```

The `<figcaption>` is optional; drop it when there's nothing to credit.

Compress 4K sources before committing:

```sh
ffmpeg -i in.mov -vf "scale=2048:-2,fps=30" -c:v libx264 -crf 23 -preset slow -an out.mp4
```

## Tables

Wrap every table in a `<figure>` with a `<figcaption>` by hand. The blank lines around the markdown
are what let it parse inside the element.

```mdx
<figure class="my-12 flex flex-col items-center gap-3">

| Prompt | What came back | Time |
| --- | --- | --- |
| "build me a pitch for jio" | [Network of the Nation](/artifacts/...) | 2m 06s |

<figcaption>every deck linked as it came out, unedited</figcaption>
</figure>
```

Captions are lowercase, no "Table 1." label, and say what the reader is comparing rather than
restating the headers. Links inside a table sit in muted foreground and go
foreground with an underline on hover, so write them as plain markdown links.
