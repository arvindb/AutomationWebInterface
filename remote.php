<?php
$data = $_POST['clickBtnValue'];

if ($data == 'open') {
	open();
}

function open() {
	echo(exec('sudo ./remote -m 0'));
    exec('sudo ./remote -m 1');
    exit;
}
?>