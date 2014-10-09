RapidStyler
===========

For the fastest styles ever.

### Basics
Converts html classes like ```class="_fnVerdana"``` to ```style="font-family: Verdana;"```
or even ```class="_bgCdedede!"``` to ```style="background-color: rgb(222, 222, 222);"``` and many more...

### How to...
Include [jQuery](http://code.jquery.com/jquery-latest.min.js) and RapidStyler.js into your html file and run following code

```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="RapidStyler.js"></script>
<script>
    $(function() { $.RapidStyler(); });
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
0.  You can use percent values using ```p``` sign after classname such as width, min-width, max-width

#### List of available class meanings
|Classname|Use example|CSS Meaning|
|---------|-----------|-----------|
|m        |m10           |```margin: 10px;```|
|mB     |mB15       |```margin-bottom: 15px;```|
|mT     |mT12       |```margin-top: 12px;```|
|mL     |mL9        |```margin-left: 9px;```|
|mR     |mR3        |```margin-right: 3px;```|
|taL    |taL        |```text-align: left;```|
|taJ    |taJ        |```text-align: justify;```|
|taC    |taC        |```text-align: center;```|
|taR    |taR        |```text-align: right;```|
|fL     |fL         |```float: left;```|
|fR     |fR         |```float: right;```|
|cB     |cB         |```clear: both;```|
|dB     |dB         |``` display: block; ```|
|dN     |dN         |``` display: none; ```|
|dIb     |dIb         |``` display: inline-block; ```|
|vH     |vH         |``` visibility: hidden; ```|
|vV     |vV         |``` visibility: visible; ```|
|m0a     |m0a         |``` margin: 0 auto; ```|
|p     |p34         |``` padding: 34px; ```|
|pB12     |pB12         |``` padding-bottom: 12px; ```|
|pT24     |pT24         |``` padding-top: 24px; ```|
|pL8     |pL8         |``` padding-left: 8px; ```|
|pR6     |pR6         |``` padding-right: 6px; ```|
|minwdt     |minwdt13         |``` min-width: 13px; ```|
|maxwdt     |maxwdt23         |``` max-width: 23px; ```|
|wdt     |wdt26         |``` width: 26px; ```|
|minwdt-p     |minwdt13p         |``` min-width: 13%; ```|
|maxwdt-p     |maxwdt23p         |``` max-width: 23%; ```|
|wdt-p     |wdt26p         |``` width: 26%; ```|
|minhgt     |minhgt92         |``` min-height: 92px; ```|
|maxhgt     |maxhgt58         |``` max-height: 58px; ```|
|hgt     |hgt25         |``` height: 25px; ```|
|minhgt-p     |minhgt92p         |``` min-height: 92%; ```|
|maxhgt-p     |maxhgt58p         |``` max-height: 58%; ```|
|hgt-p     |hgt25p         |``` height: 25%; ```|
|oA     |oA         |``` overflow: auto; ```|
|c     |cdedede         |``` color: #dedede; ```|
|fn     |fnVerdana         |``` font-family: Verdana; ```|
|fs     |fs13px         |``` font-size: 13px; ```|
|fs-em     |fs3em         |``` font-size: 2em; ```|
|fw     |fw400         |``` font-weight: 300; ```|
|bgC     |bgC00ff00         |``` background-color: #00ff00; ```|


