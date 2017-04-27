<?php

class Task extends Eloquent {


	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'Tasks';

	public $timestamps = false;

	protected $primaryKey = 'ID';

}
