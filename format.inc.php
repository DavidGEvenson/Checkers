<?php
/**
 * Created by PhpStorm.
 * User: EvensonD
 * Date: 11/29/18
 * Time: 11:49 PM
 */

function createBoard() {
    $html = "<div></div>";

    /*
    for($i=0; $i<8; $i++) {
        for($j=0; $j<8; $j++) {
            $html .= "<div class=\"square ";
            if($i+$j % 2 == 0) {
                $html .= "darksquare\"></div>";
            } else {
                $html .= "lightsquare\"></div>";
            }
            //$html .= " id=\"sq$i$j\"></div>";
        }
    }
    */

    return $html;
}