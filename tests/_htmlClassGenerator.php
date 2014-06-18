<?php
/**
 * Created by PhpStorm.
 * User: MateuszManaj
 * Date: 06.06.14
 * Time: 19:08
 */

$txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nibh, mollis eget ipsum vel, auctor molestie magna. Mauris id magna consequat, pellentesque felis nec, euismod lorem. Phasellus rhoncus, risus at consequat tempor, neque eros scelerisque turpis, vel accumsan risus mi vel nunc. Fusce metus nisl, condimentum vel sodales sed, ullamcorper vitae massa. In purus velit, feugiat placerat mi quis, tincidunt auctor nulla. Integer nec volutpat velit. Morbi eu lobortis lorem. Aliquam erat volutpat. Fusce gravida purus at quam ornare ultricies. Cras varius risus quis elit accumsan, vehicula ultricies neque imperdiet. Suspendisse sollicitudin consequat metus, sed fringilla dolor mollis in. Donec vel posuere massa, sed volutpat sem.
Morbi ac massa tincidunt, cursus dolor a, adipiscing tortor. Morbi commodo tristique venenatis. Vivamus blandit gravida felis rutrum dapibus. Integer id eleifend urna. Phasellus eu nisi a ipsum convallis tempus in nec quam. Donec convallis consequat nunc, ut viverra nisl. In pulvinar luctus turpis, ut pharetra nunc fermentum pretium. Suspendisse vitae elementum lectus. Duis cursus porta lectus, ut egestas nibh vulputate nec. Ut dictum sollicitudin nunc, at accumsan ligula commodo in. Fusce mollis faucibus enim vitae sollicitudin. Nam quis eleifend lorem. Vivamus et mi et urna dignissim malesuada. Phasellus interdum, felis ut dapibus eleifend, urna nisi lobortis lorem, nec pharetra velit leo eu sem. Donec ac tellus tincidunt, convallis neque vel, bibendum ante. Morbi quis mollis lorem, ut porta risus.
Nullam vitae tempor purus. Fusce feugiat pharetra sapien eu posuere. Integer purus lacus, egestas et ornare nec, eleifend sit amet ipsum. Curabitur ut faucibus sapien. Vivamus porta dolor et purus condimentum varius. Integer libero mauris, feugiat ac leo quis, interdum pharetra neque. Fusce facilisis urna purus, non congue dui venenatis eget.
Vivamus eleifend justo massa, iaculis iaculis libero ultrices eu. Donec in felis a erat sagittis porta eget sed ante. Pellentesque euismod consequat feugiat. Nulla facilisi. Sed quis euismod mi, at congue odio. Praesent ullamcorper sed mi sit amet posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in mollis ligula. Fusce risus purus, sollicitudin sed tempus id, vestibulum semper erat. Ut vel est cursus, eleifend leo eu, placerat massa. Vestibulum condimentum augue eu iaculis dapibus. Duis vitae rutrum odio. Nullam pellentesque eget urna nec vulputate.
Nullam tempus sapien et nisl ultricies, sed suscipit erat euismod. Suspendisse sed tellus vulputate, interdum velit et, tincidunt nulla. Quisque lacinia semper nulla, ut faucibus nulla placerat et. Nulla posuere facilisis tristique. Proin a pulvinar purus. Vestibulum commodo et neque viverra congue. Etiam lacinia molestie urna, ac congue diam sagittis sed. Morbi non ipsum in risus interdum sagittis. Quisque tristique nunc ut elit placerat cursus. Morbi at lacus eu lectus pretium sollicitudin feugiat sed nibh. Pellentesque consequat purus id porttitor porta. Sed eu libero non orci tristique facilisis. ";

$styles = Array("_mL5", "_mL10", "_mL15", "_mR5", "_mR10", "_mR15", "_mL5", "_mL10", "_mL15", "_vV", "_dB");

for($i = 0; $i < 10000; $i++)
{
    $s = $styles[rand(0, count($styles)-1)];
    echo "<div class=\"".$styles[rand(0, count($styles)-1)]." ".$styles[rand(0, count($styles)-1)]." ".$styles[rand(0, count($styles)-1)]."\">".substr($txt, rand(0, strlen($txt)), 150)."</div><br>";
}

?>