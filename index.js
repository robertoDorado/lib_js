class HelpersJs {

    constructor(url) {
        this.url = url
    }

    selectElement = (elem) => document.querySelector(elem)

    selectElements = (elems) => document.querySelectorAll(elems)

    getById = (idElement) => document.getElementById(idElement)

    toggleElement = (element, opacity=false) => {
        let toggle_element = this.selectElement(element)

        if(!opacity){
            
            if(toggle_element.style.display == "none"){
                toggle_element.style.display = "block"
            }else{
                toggle_element.style.display = "none"
            }

            return toggle_element

        }else{

            if(toggle_element.style.opacity == "0"){
                toggle_element.style.opacity = "1"
                toggle_element.style.transition = "opacity 1s"
            }else{
                toggle_element.style.opacity = "0"
                toggle_element.style.transition = "opacity 1s"
            }

            return toggle_element
        }
    }

    downWindow = (element, height, transition=false) => {

        if(!transition){
            this.selectElement(element).style.height = `${height}px`
        }else{
            this.selectElement(element).style.height = `${height}px`
            this.selectElement(element).style.transition = "1s"
        }

        return this.selectElement(element)
    }

    upWindow = (element, transition=false) => {

        if(!transition){
            this.selectElement(element).style.height = "0px"
        }else{
            this.selectElement(element).style.height = "0px"
            this.selectElement(element).style.transition = "1s"
        }
        return this.selectElement(element)
    }

    listener = (listen, element, functionName) => {
        //Se o listener for submit ele previne a ação padrão
        if (listen == 'submit') {
            this.selectElement(element).addEventListener(listen, (e) => {
                e.preventDefault()
            })
        }

        return this.selectElement(element).addEventListener(listen, functionName)
    }

    readyState = (xhr, functionName) => xhr.addEventListener('readystatechange', functionName)

    parseJSON = (string) => JSON.parse(string)

    stringJSON = (object) => JSON.stringify(object)

    visible = (element) => this.selectElement(element).style.display = 'block'

    invisible = (element) => this.selectElement(element).style.display = 'none'

    getAttr = (elementId, attribute) => this.getById(elementId).getAttribute(attribute)

    requestXHR(method, url=this.url, data = '', format = 'json') {

        let xhr = new XMLHttpRequest()
        let form_data = new FormData()
        
        if (method == 'POST') {
            switch (format) {
                case 'json':
                    data = this.stringJSON(data)
                break
                case 'querystring':
                    let query_string = []
                    for (let i in data) {
                        if (query_string.indexOf(`${i}=${data[i]}`) == -1) {
                            query_string.push(`${i}=${data[i]}`)
                        }
                    }
                    data = query_string.join('&')
                    break
            }

            form_data.append('data', data)

            xhr.open('POST', url)
            xhr.send(form_data)
        }

        if(method == 'GET'){

            xhr.open('GET', url)
            xhr.send()
        }


        return xhr
    }

    redirect = (url=this.url) => window.location.href = url

    popup(elem, altura, largura) {

        this.selectElement(elem).addEventListener('click', (e) => {
            e.preventDefault()
            let w = screen.width;
            let h = screen.height;
            let meio_w = w / 2;
            let meio_h = h / 2;
            let altura2 = altura / 2;
            let largura2 = largura / 2;
            let meio1 = meio_h - altura2;
            let meio2 = meio_w - largura2;
            return window.open(this.url, '', `scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,height=${altura},width=${largura},top=${meio1},left=${meio2}`)
        })
    }

    noPaste = (arrayElements) => {
        arrayElements.forEach((items) => {
            let id_element = items.getAttribute('id')
            this.listen('paste', `#${id_element}`, (e) => {
                e.preventDefault()
            })
        })
    }

    maskNumber = () => {
        let mask = {
            number(value){
                return value
                .replace(/\D/g, '')
            }
        }

        return mask
    }
    
    onlyNumber = (arrayElements) => {
        let mask = this.maskNumber()
        arrayElements.forEach((items) => {
            let field = items.dataset.num
            items.addEventListener('input', (e) => {
                e.target.value = mask[field](e.target.value)
            })
        })
    }
}

let helper = new HelpersJs('/')