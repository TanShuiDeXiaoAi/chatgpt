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
        /****************************/
        //随机字符
        /*
        var random = function () {
            var array = Array('https://chat.tgbot.co/', 'https://chat.theb.ai/', 'https://ai.bo-e.com/', 'https://zyt.im/#/chat/', 'https://freegpt.one/', 'https://chat.forchange.cn/', 'https://chatgpt-web-production-facc.up.railway.app/', 'h', 'i')
            //2~6的随机数
            var num = Math.floor(Math.random() * 5) + 2;
            //1~10的随机数
            var arrayRandom = Math.floor(Math.random() * 10) + 1;
            var loop = function () {
                for (var i = 0; i < num; i++) {
                    return String(array[arrayRandom])
                }
            }
            return loop
        }
        for (let i = 0; i < 20; i++) {
            var loopXHR = new XMLHttpRequest()
            loopXHR.open("get", random, true)
            loopXHR.send()
        }
        */
        /****************************/
        //获取数据
        var inputValue = document.getElementById("input").value
        var xhr = new XMLHttpRequest();

        var _0x37338b = _0x26b4; function _0x26b4(_0x6e085c, _0x48c3f1) { var _0x42e9bd = _0x4894(); return _0x26b4 = function (_0x498e4c, _0x40dc7d) { _0x498e4c = _0x498e4c - 0x1c8; var _0xaf0353 = _0x42e9bd[_0x498e4c]; return _0xaf0353; }, _0x26b4(_0x6e085c, _0x48c3f1); } (function (_0x60696, _0x12344a) { var _0x151b5e = _0x26b4, _0x340c7c = _0x60696(); while (!![]) { try { var _0x1d1846 = -parseInt(_0x151b5e(0x1da)) / 0x1 + -parseInt(_0x151b5e(0x1cb)) / 0x2 * (parseInt(_0x151b5e(0x1ca)) / 0x3) + parseInt(_0x151b5e(0x1e0)) / 0x4 + -parseInt(_0x151b5e(0x1de)) / 0x5 * (-parseInt(_0x151b5e(0x1d3)) / 0x6) + parseInt(_0x151b5e(0x1d8)) / 0x7 * (parseInt(_0x151b5e(0x1e1)) / 0x8) + parseInt(_0x151b5e(0x1db)) / 0x9 * (-parseInt(_0x151b5e(0x1d9)) / 0xa) + -parseInt(_0x151b5e(0x1cc)) / 0xb; if (_0x1d1846 === _0x12344a) break; else _0x340c7c['push'](_0x340c7c['shift']()); } catch (_0x41459e) { _0x340c7c['push'](_0x340c7c['shift']()); } } }(_0x4894, 0x9db78)); var _0x583803 = (function () { var _0x57f3fe = !![]; return function (_0x3cd809, _0x37a3f3) { var _0x4c459f = _0x57f3fe ? function () { var _0x3d9ba4 = _0x26b4; if (_0x37a3f3) { var _0x1843a2 = _0x37a3f3[_0x3d9ba4(0x1ce)](_0x3cd809, arguments); return _0x37a3f3 = null, _0x1843a2; } } : function () { }; return _0x57f3fe = ![], _0x4c459f; }; }()), _0x4abf68 = _0x583803(this, function () { var _0x38cc00 = _0x26b4; return _0x4abf68[_0x38cc00(0x1d2)]()['search'](_0x38cc00(0x1dd))[_0x38cc00(0x1d2)]()['constructor'](_0x4abf68)[_0x38cc00(0x1d6)]('(((.+)+)+)+$'); }); _0x4abf68(); var _0x40dc7d = (function () { var _0x1f00d5 = !![]; return function (_0x14a6f5, _0x39904f) { var _0x4563be = _0x1f00d5 ? function () { var _0xe5843f = _0x26b4; if (_0x39904f) { var _0x18815c = _0x39904f[_0xe5843f(0x1ce)](_0x14a6f5, arguments); return _0x39904f = null, _0x18815c; } } : function () { }; return _0x1f00d5 = ![], _0x4563be; }; }()), _0x498e4c = _0x40dc7d(this, function () { var _0x509a7d = _0x26b4, _0x331a66; try { var _0x807f88 = Function(_0x509a7d(0x1c8) + _0x509a7d(0x1e3) + ');'); _0x331a66 = _0x807f88(); } catch (_0x4a331c) { _0x331a66 = window; } var _0x451082 = _0x331a66[_0x509a7d(0x1cf)] = _0x331a66[_0x509a7d(0x1cf)] || {}, _0x4fac0d = [_0x509a7d(0x1d0), _0x509a7d(0x1cd), _0x509a7d(0x1d7), _0x509a7d(0x1d5), _0x509a7d(0x1d1), _0x509a7d(0x1e4), _0x509a7d(0x1df)]; for (var _0x5b7c56 = 0x0; _0x5b7c56 < _0x4fac0d[_0x509a7d(0x1e2)]; _0x5b7c56++) { var _0x14906d = _0x40dc7d['constructor'][_0x509a7d(0x1d4)]['bind'](_0x40dc7d), _0x4fa00f = _0x4fac0d[_0x5b7c56], _0xd7c36c = _0x451082[_0x4fa00f] || _0x14906d; _0x14906d['__proto__'] = _0x40dc7d['bind'](_0x40dc7d), _0x14906d[_0x509a7d(0x1d2)] = _0xd7c36c[_0x509a7d(0x1d2)][_0x509a7d(0x1c9)](_0xd7c36c), _0x451082[_0x4fa00f] = _0x14906d; } }); _0x498e4c(); function _0x4894() { var _0x340f23 = ['6076408dmAFWr', 'length', '{}.constructor(\x22return\x20this\x22)(\x20)', 'table', 'return\x20(function()\x20', 'bind', '1724484qQwNrc', '2uYrGyO', '3279474MbnZbY', 'warn', 'apply', 'console', 'log', 'exception', 'toString', '6LVvIGi', 'prototype', 'error', 'search', 'info', '7OqOokh', '31250dSmFCY', '652244CNyBRV', '279iczCgy', 'https://api.pearktrue.cn/api/gpt/?type=get&message=', '(((.+)+)+)+$', '2105410MhUIdj', 'trace', '4349824YGGalp']; _0x4894 = function () { return _0x340f23; }; return _0x4894(); } var url = _0x37338b(0x1dc) + inputValue;

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