
let was_opened = false;

let dec_elem = document.createElement('button')
dec_elem.innerHTML = "Decode"
dec_elem.style.position = "absolute"

document.onclick = (e) => {
    if (e.target != dec_elem) {
        dec_elem.style.visibility = "hidden"
        // was_opened = false
    }
}


// uses common key for every user
random.set_key(document.location.hostname)

document.oncontextmenu = (e) => {

    if (e.target.localName != "canvas") return;

    if (was_opened) {
        dec_elem.style.visibility = "hidden"
        was_opened = false;
    } else {
        e.preventDefault()
        dec_elem.style.visibility = "visible"
        was_opened = true
    }



    document.getElementsByTagName("body")[0].append(dec_elem)
    dec_elem.style.top = e.pageY - dec_elem.offsetHeight
    dec_elem.style.left = e.pageX

    dec_elem.onclick = () => {

        
        let [res_data, length, height] = method_hide_decode(get_data(e.target), e.target)

        // if empty strings are undetected
        if (length == 0 || height == 0) {
            res_data = method_swap(get_data(e.target), {
                decode: true,
                half_height: Math.floor(e.target.height / 2)
            }, e.target)
        } else {
            e.target.height = height
            e.target.width = length
        }

        put_data(e.target, res_data)

        dec_elem.style.visibility = "hidden"

    }
}
