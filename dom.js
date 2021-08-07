window.dom = {
    find(selector, scope){
        let x =(scope || document).querySelectorAll(selector)
        return x
    },
    style(node, name, value){
        if(arguments.length === 3){
            return node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name == 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style(key) = name(key)
                }
            }
        }
    },
    each(nodelist, fn){
        for(let i = 0; i<=nodelist.length; i++){
            fn.call(null, nodelist[i])
        }
    }
}



