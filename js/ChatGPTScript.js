document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
        answer()
    }
})

function answer() {
    if ($("#input").val() === "") {
        $("#answer").val("请输入问题")
    } else {
        $("#answer").val("请稍等...")
        //获取数据
        var inputValue = document.getElementById("input").value
        var xhr = new XMLHttpRequest();
        var url = "https://api.pearktrue.cn/api/gpt/?type=get&message=" + inputValue
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var xhrStrgify = JSON.parse(xhr.responseText)
                var string = xhrStrgify.answer
                var charsArray = string.split('')
                var i = 0;
                $("#answer").val("")
                //让答案一个一个的逐个输出
                setInterval(() => {
                    if (i < charsArray.length) {
                        $("#answer").val($("#answer").val() + charsArray[i])
                        i++
                    } else {
                        clearInterval();
                    }
                }, 50);
            }
        }
    }

}

function clearQestion() {
    document.getElementById("input").value = ""
}

function clearAnswer() {
    document.getElementById("answer").value = ""
}
function toggleDisabledAttribute() {
    //判断有没有disabled这个属性
    var attribute = document.getElementById("answer").hasAttribute("disabled")
    if (attribute) {
        document.getElementById("answer").removeAttribute("disabled")
    } else {
        document.getElementById("answer").setAttribute("disabled", "disabled")
    }
}