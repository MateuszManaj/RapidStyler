RapidStyler
===========

For the fastest styles ever.

### Basics
Change html classes like ```class="_fnVerdana"``` to ```style="font-family: Verdana;"```
or even ```class="_bgCdedede!"``` to ```style="background-color: rgb(222, 222, 222);"``` and many more...

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

### Features
0.  You can use your own class prefix by using ```$.RapidStyler({prefix: "_custom_"});```
0.  ```!``` sign at the end of classname means ```!important``` in css code

#### List of available class meanings
|Classname|Use example|CSS Meaning|
|---------|-----------|-----------|
|m        |m10           |margin: 10px;  |
|mB     |mB15       |margin-bottom: 15px;|
|mT     |mT12       |margin-top: 12px;|
|mL     |mL9        |margin-left: 9px;|
|mR     |mR3        |margin-right: 3px;|
|taL    |taL        |text-align: left;|
|taJ    |taJ        |text-align: justify;|
|taC    |taC        |text-align: center;|
|taR    |taR        |text-align: right;|
|fL     |fL         |float: left;|
|fR     |fR         |float: right;|

