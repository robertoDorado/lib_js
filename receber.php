<?php
$data = array(
    'id' => 123,
    'nome' => 'franklin'
);

if(!empty($_POST['data'])){
    $new_data = json_decode($_POST['data']);
    foreach($new_data as $key => $value){
        $data[$key] = $value;
    }
}

echo json_encode($data);