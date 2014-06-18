RapidStyler
===========

For the fastest styles ever.

### Basics
html class ```_fnVerdana``` --> ```html style="font-family: Verdana;" ```

### How to...

Include [jQuery](http://code.jquery.com/jquery-latest.min.js) and RapidStyler.js into your html file and run following code

```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="RapidStyler.js"></script>
<script>

    $(function()
    {
        $.RapidStyler();
    });

</script>
```

Then paste this html code into your body and refresh browser...

```html
<div class="_fnVerdana _fs15px _bgCdedede _mB20">Lorem lipsum sit dolor amet</div>
```

Plugin applies fast-styles into chosen html element like
```html
<div style="margin-bottom: 20px; font-family: Verdana; font-size: 15px; background-color: rgb(222, 222, 222);" class="_fnVerdana _fs15px _bgCdedede _mB20">Lorem lipsum sit dolor amet</div>
```