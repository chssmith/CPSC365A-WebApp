<?php

class histogramController extends Controller {

    public function whateveryouwant()
    {
        $draw_data=ResponseData::all();
        return View::make('histogram', compact('draw_data'));
        /* echo "here"; */
        /* return View::make('histogram'); */
    }

}


?>