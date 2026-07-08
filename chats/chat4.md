# Direction2 Text Updates

_Started 2026-06-11 17:23 UTC_

---

## User

Apply 5 direct edits:
1. In direction2.jsx (near line 117, <span>): change the text from "REACHED VIA CITY ACTIVATIONS" to "REACHED VIA CITY DEBREIFS".
<mentioned-element>
react:    App › Direction2 › D2_WhatIDo
dom:      body › div#root › … › section.wf-section[screen="02 WHAT I DO"] › div › div › div › span.kicker[2/2]
text:     "REACHED VIA CITY ACTIVATIONS"
children: text
selector: #root section:nth-child(3) div:nth-child(3) >.kicker
id:       cc-4
</mentioned-element>
2. In direction2.jsx (near line 117, <span>): change the text from "ATTENDEES · ADI" to "ATTENDEES · \nARWEAVE DAY\nINDIA".
<mentioned-element>
react:    App › Direction2 › D2_WhatIDo
dom:      body › div#root › … › section.wf-section[screen="02 WHAT I DO"] › div › div › div › span.kicker[2/2]
text:     "ATTENDEES · ADI"
children: text
selector: #root section:nth-child(3) div:nth-child(4) >.kicker
id:       cc-6
</mentioned-element>
3. In direction2.jsx (near line 62, <li>): change the text from "planning HH6 · consumer apps" to "Looking for the next long term project. ;)".
<mentioned-element>
react:    App › Direction2 › D2_Hero › Sticky
dom:      body › div#root › … › div › div.hero-stage › div.m-static › div.sticky › ul › li[1/3]
text:     "planning HH6 · consumer apps"
children: text
selector: .sticky li:nth-child(1)
id:       cc-10
</mentioned-element>
4. In direction2.jsx (near line 62, <li>): change the text from "reading: impro · johnstone" to "reading: Show your work.".
<mentioned-element>
react:    App › Direction2 › D2_Hero › Sticky
dom:      body › div#root › … › div › div.hero-stage › div.m-static › div.sticky › ul › li[3/3]
text:     "reading: impro · johnstone"
children: text
selector: .sticky li:nth-child(3)
id:       cc-11
</mentioned-element>
5. In direction2.jsx (near line 165, <p>): change the text from "IRL roots + URL coordination + permaweb memory." to "IRL roots + URL coordination + core memories.".
<mentioned-element>
react:    App › Direction2 › D2_Journey
dom:      body › … › section.wf-section[screen="03 JOURNEY"] › div › div.sketch-box › div.m2 › div › p[3/3]
text:     "IRL roots + URL coordination + permaweb memory."
children: text
selector: [spellcheck]
id:       cc-29
</mentioned-element>

## Assistant

_[tool: grep]_

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

All five strings live in `shared.jsx` (the data file), with one rendering tweak needed in `direction2.jsx` for the line breaks:

_[tool: done]_

All five edits applied. One heads-up: I kept "debreifs" exactly as you typed it — let me know if you meant "debriefs" and I'll fix the spelling.

## User

(https://docs.google.com/presentation/d/1dQgUFKFj_YPTx_eFN1zht55s7iUiwsJXzIzl4ENuYYM/edit?usp=sharing) use this google slide to go through the visuals and process of arweave india. 

can also use data from md file to make more clear work of proof

I still feel my work is not being communicated with the real impact it has, how can we structure the website more to show the impact.
Let's optimise Call to action ways or better ways to direct towards contact or socials. 
and let's reslve all the comments added as well.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: questions_v2]_

_[tool: web_fetch]_

_[tool: web_fetch]_

## User

Questions answered:
- audience: Ecosystems/foundations hiring an ecosystem lead, Investors / partners, Community builders & founders
- impact_structure: Big impact band right after hero (numbers + one-line proof each), Receipts wall — every claim links to a real X post from the audit, 2.5-year timeline of the whole arc (HH1 → ADI → Stealth House), 2.5 year can be one pager speratly. 
- proof_depth: Mix: curated up top, full archive on a subpage
- primary_cta: book a call and dm on X
- cta_style: CTA at the end of every major section, let's add X and in button on nav bar as well and CTA after proof of work section.
- availability: Soft — mention it but keep the logbook vibe primary
- x_analytics: Yes — content/reach stats deserve their own block
- slides_pdf: uploads/slides_pdf-1781204522852.pdf

## Assistant

_[tool: read_skill_prompt]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: read_file]_

I made a bad edit to shared.jsx — fixing it now:

_[tool: str_replace_edit]_

Now the direction2.jsx restructure:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Restructured for impact. What changed:

**Home page**
- **Impact band right after the hero** — 6 big numbers, each one a clickable link to the real X post ("proof ↗")
- **Proof of Work rebuilt**: curated receipts wall (8 cards, dated, each opens the real post) → @arweaveindia analytics block (2,595 posts · 289K impressions/yr…) → footage slots → **big CTA** ("let's design the next one together" — book 15 min / DM)
- **CTAs at the end of every major section** (pillars, journey, case study, video, community) — consistent: book 15 min + DM on 𝕏
- **Nav**: 𝕏 and `in` buttons added next to the theme toggle
- **Soft availability** line under the manifesto ("ps — open to the next long-term project")

**New pages**
- **`Arweave India Timeline.html`** — the 2.5-year arc as a separate print-friendly one-pager (2023 setup → 2024 houses → 2025 flagship → now), linked from Journey and Proof
- **Archive subpage** (`subpages.html#archive`, also a tab) — the full record, organized like your audit: ~30 rows across 6 categories, every row opens the real post

Caveats:
- **The ADI deck PDF couldn't be processed** — the slides are huge full-bleed images and rendering times out. Screenshot the key slides as PNG/JPEG and drop them in, and I'll place real visuals into the polaroid/reel slots.
- **Comments still unresolved** — I can see where they're anchored but not their text. Paste them (or "send to chat" on each) and I'll handle them next.

## User

Address these comments from my teammates:

**prsn** (on `prasansingh wireframes.html` at `[data-comment-anchor="d728fe164c-div-562-11"]`):
<teammate-comment>let's remove newsletter for now.</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `[data-comment-anchor="6f9bb3793e-div-565-13"]`):
<teammate-comment>??</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `div:nth-child(2) >div:nth-child(1) >.kicker >:is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,strong,small,td,th,caption)`):
<teammate-comment>let's shift this section up</teammate-comment>
↳ reply from **prsn**:
<teammate-comment>under card stacks</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `#root > div:nth-child(1) > div:nth-child(1) > section:nth-child(8) > h2:nth-child(2) > span:nth-child(1)`):
<teammate-comment>Let's remove this section or let's find a way to optimise this section, ask questions</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `#root > div:nth-child(1) > div:nth-child(1) > section:nth-child(10) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`):
<teammate-comment>ask me to upload appropriate media files.</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `#root > div:nth-child(1) > div:nth-child(1) > section:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)`):
<teammate-comment>ask for links</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `#root > div:nth-child(1) > div:nth-child(1) > section:nth-child(9) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)`):
<teammate-comment>let's add appropriate thumbnails as well.</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `div:last-child >.dashed >.kicker >:is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,strong,small,td,th,caption)`):
<teammate-comment>what is this section?</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `#root > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4)`):
<teammate-comment>hyperlinks here as well.</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `#root > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4)`):
<teammate-comment>Add hyperlinks here. Ask for direct posts, or let's make a directory for links well organised.</teammate-comment>

**prsn** (on `prasansingh wireframes.html` at `[data-comment-anchor="e22e039e40-div-70-13"]`):
<teammate-comment>Make the video stick in the hero section with your recommended size</teammate-comment>

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

I have the comments now. Let me handle the clear-cut ones in code, then ask about the ones where the teammate explicitly said "ask me."

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

