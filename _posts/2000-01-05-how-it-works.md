---
title: "How it works"
bg: orange
color: black
fa-icon: cog
style: center
---

#### We wrote a little utility for VITacademics so we could figure out the captcha automatically and make the app as simple as a pull-to-refresh. In the process, we realised that it's small and fast enough to run on a browser as well, so it we ported it to an extension.

## *Brute force isn't that bad*

We use a very naive approach of just scanning the image against a known list of letters and digit shapes, and match them. With the right break-conditions, it's rather efficient.

If the inner workings of this algorithm interest you, or you want to improve on it, feel free to check it out on [GitHub]({{ site.source_link }})
