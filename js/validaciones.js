export function validarCodigo(input){
    let patron = /^[\d]{1,5}$/
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    } 
}

export function validarTitulo(min, max, input){
    if(input.value.trim().length >= min && input.value.trim().length <= max){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    } 
}

export function validarGenero(input){
    if(input.value.trim().length > 0){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarUrl(input){
    let patron = /^((http|https):\/\/)?([a-z0-9_-]+\.){1,2}[a-z]{2,6}(\.[a-z]{2,6})$/
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
