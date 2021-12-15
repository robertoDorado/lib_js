<?php $remove_cache = "?" . date("YmdHis"); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button class="click_element" id="click-element" data="data-target">click</button>
    <div class="background"></div>

</body>

</html>

<style>
    .background {
        background-color: red;
        width: 200px;
        height: 0;
    }
</style>

<script src="./index.js<?= $remove_cache ?>"></script>
<script>
    let response = helper.fetchRequest("./receber.php", "POST", {carro:"vermelho", marca:"ferrari"}, 'object')
    response.then(data => console.log(data))
</script>