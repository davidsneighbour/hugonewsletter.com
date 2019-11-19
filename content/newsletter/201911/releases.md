---
headless: true
---

Release 0.59 brings new features for [the image processing functions]9https://gohugo.io/content-management/image-processing/#image-processing-options). You can now set the format of the file output (jpg, png, tif, bmp, and gif) or set a background fill colour for transparent parts of an image.

Another new feature is the addition of `Prev` and `Next` pagination functions in Hugo's core page collections. This works the same way these function work in a single page. [Read more about it here](https://gohugo.io/variables/pages/).

Furthermore, shortcode parameters are now type hinting. (If you don't understand what this means no worry, this is mostly targeted towards developers.) To use @beps own commit as explanation:

> ... you now can do: `{{&lt; vidur 9KvBeKu false true 32 3.14 &gt;}}`
> And the boolean and numeric values will be converted to bool, int and float64.
> If you want these to be strings, they must be quoted: {{&lt; vidur 9KvBeKu "false" "true" "32" "3.14" &gt;}}

Think of handing over to a shortcode how many items of a collection of pages you want to show and then use this param directly as an integer in the `first` or `last` function.

As always there are lots more new improvements, fixes and so one. Check the release notes on Github to get the full picture.
