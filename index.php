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
    .background{
        background-color:red;
        width:200px;
        height:200px;
    }
</style>

<script src="./index.js<?= $remove_cache ?>"></script>
<script>
    // fazer requisições get e post
    let xhr = helper.requestXHR('POST', './receber.php', {idade:4444, velocidade:'13kmh', nome: 'roberto'})
    helper.readyState(xhr, () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.response)
        }

        if(xhr.status != 200 && xhr.readyState != 4){
            console.log(xhr.response)
        }
    })

    //invisible element
    helper.listener('click', '.click_element', () => {
        let element = helper.toggleElement(".background", true)
        console.log(element)
    })

    let id_element = helper.getById("click-element")
    let attribute_element = helper.getAttr("click-element", "data")
    console.log(attribute_element)
</script>