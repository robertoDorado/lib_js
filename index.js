class HelpersJs {

    constructor(url = '') {
        this.url = url
    }

    selectElement = (elem) => document.querySelector(elem)
    selectElements = (elems) => document.querySelectorAll(elems)
    getById = (idElement) => document.getElementById(idElement)

    toggleElement = (element) =>

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
}

let helper = new HelpersJs('/')