<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="click_element">click</button>
    <button class="visible_element">click visible</button>
    
</body>
</html>

<script src="./index.js"></script>
<script>
    // fazer requisições get e post
    let xhr = helper.requestXHR('GET', './receber.php', {idade:4444, velocidade:'13kmh'})
    helper.readyState(xhr, () => {
        if(xhr.readyState == 4 && xhr.status == 200)
            console.log(xhr.response)
    })

    //invilible element
    helper.listener('click', '.click_element', () => {
        helper.invisible('.click_element')
    })

    //visible element
    helper.listener('click', '.visible_element', () => {
        helper.visible('.click_element')
    })
</script>