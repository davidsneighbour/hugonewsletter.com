---
title: "Analysing Collections"
date: 2021-03-07T06:18:13+07:00
draft: true
description: "This is meta description"
---

## Introduction

When working with maps and slices in Hugo we often want to 

So we end up with four different functions to work with collections:

- [Intersect](#intersect)
- [Union](#union)
- [Symdiff](#symdiff)
- [Complement](#complement)

## Intersect

Returns the common elements of two arrays or slices, in the same order as the first array.
Syntax
intersect SET1 SET2
An useful example is to use it as AND filters when combined with where:

AND filter in where query

{{< highlight go-html-template >}}
{{ $pages := where .Site.RegularPages "Type" "not in" (slice "page" "about") }}
{{ $pages := $pages | union (where .Site.RegularPages "Params.pinned" true) }}
{{ $pages := $pages | intersect (where .Site.RegularPages "Params.images" "!=" nil) }} 
{{< /highlight >}}

The above fetches regular pages not of page or about type unless they are pinned. And finally, we exclude all pages with no images set in Page params.

See union for OR.

{{< doclink url="https://gohugo.io/functions/intersect/" function="intersect" >}}

## Union

Given two arrays or slices, returns a new array that contains the elements or objects that belong to either or both arrays/slices.
Syntax
union SET1 SET2
Given two arrays (or slices) A and B, this function will return a new array that contains the elements or objects that belong to either A or to B or to both. The elements supported are strings, integers, and floats (only float64).

{{< highlight go-html-template >}}
{{ union (slice 1 2 3) (slice 3 4 5) }}
<!-- returns [1 2 3 4 5] -->

{{ union (slice 1 2 3) nil }}
<!-- returns [1 2 3] -->

{{ union nil (slice 1 2 3) }}
<!-- returns [1 2 3] -->

{{ union nil nil }}
<!-- returns an error because both arrays/slices have to be of the same type -->
{{< /highlight >}}

OR filter in where query
This is also very useful to use as OR filters when combined with where:

{{< highlight go-html-template >}}
{{ $pages := where .Site.RegularPages "Type" "not in" (slice "page" "about") }}
{{ $pages := $pages | union (where .Site.RegularPages "Params.pinned" true) }}
{{ $pages := $pages | intersect (where .Site.RegularPages "Params.images" "!=" nil) }}
{{< /highlight >}}

The above fetches regular pages not of page or about type unless they are pinned. And finally, we exclude all pages with no images set in Page params.

{{< doclink url="https://gohugo.io/functions/union/" function="union" >}}

## Symdiff

collections.SymDiff (alias symdiff) returns the symmetric difference of two collections.
Syntax
COLLECTION | symdiff COLLECTION
Example:

```
{{ slice 1 2 3 | symdiff (slice 3 4) }}
```

The above will print [1 2 4].

Also see https://en.wikipedia.org/wiki/Symmetric_difference

{{< doclink url="https://gohugo.io/functions/symdiff/" function="symdiff" >}}

## Complement

collections.Complement (alias complement) gives the elements of a collection that are not in any of the others.
Syntax
COLLECTION | complement COLLECTION [COLLECTION]...
Example:

{{< highlight go-html-template >}}
{{ $pages := .Site.RegularPages | first 50 }}
{{ $news := where $pages "Type" "news" | first 5 }}
{{ $blog := where $pages "Type" "blog" | first 5 }}
{{ $other := $pages | complement $news $blog | first 10 }} 
{{< /highlight >}}

The above is an imaginary use case for the home page where you want to display different page listings in sections/boxes on different places on the page: 5 from news, 5 from the blog and then 10 of the pages not shown in the other listings, to complement them.

{{< doclink url="https://gohugo.io/functions/complement/" function="complement" >}}
