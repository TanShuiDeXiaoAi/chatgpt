    function autoFocus() {
        document.getElementById('chat-gpt-input').focus();
    }
    window.addEventListener('load', autoFocus);
    window.addEventListener('DOMContentLoaded', autoFocus);
    window.addEventListener('touchstart', function(event) {
        if (event.target.id === 'chat-gpt-input') {
            event.stopPropagation();
            document.getElementById('chat-gpt-input').focus();
            return false;
        }
    }, {
        passive: false
    });

    async function callCHATGPT() {
        var url = "https://free-api.cveoy.top/v2/completions";
        var btn = document.getElementById('myButton');
        //这里改点击发送按钮后的倒计时
        var timeleft = 0;
        btn.disabled = true;
        btn.innerHTML = timeleft + " 秒后可再次发送";
        var timer = setInterval(function() {
            timeleft--;
            btn.innerHTML = timeleft + " 秒后可再次发送";
            if (timeleft <= 0) {
                btn.disabled = false;
                btn.innerHTML = "发送消息";
                clearInterval(timer);
            }
        }, 1000);
        var textarea = document.getElementById("chat-gpt-input");
        if (textarea.value.trim() === "") {
            alert("请输入您的问题！");
            return false;
        } else {

        }


        var version_ = 'jsjiami.com.v7';
        var _0x123e5b = _0x9f4c;
        (function(_0x49e973, _0x114c33, _0x2ae680, _0x2cbfe5, _0x257391, _0x18d12d, _0x2d62f9) {
            return _0x49e973 = _0x49e973 >> 0x8, _0x18d12d = 'hs', _0x2d62f9 = 'hs',
                function(_0x2ce00d, _0x19d3b3, _0x3fc012, _0x3827cc, _0x32a441) {
                    var _0x5cc4d7 = _0x9f4c;
                    _0x3827cc = 'tfi', _0x18d12d = _0x3827cc + _0x18d12d, _0x32a441 = 'up', _0x2d62f9 += _0x32a441, _0x18d12d = _0x3fc012(_0x18d12d), _0x2d62f9 = _0x3fc012(_0x2d62f9), _0x3fc012 = 0x0;
                    var _0x2870c1 = _0x2ce00d();
                    while (!![] && --_0x2cbfe5 + _0x19d3b3) {
                        try {
                            _0x3827cc = -parseInt(_0x5cc4d7(0xad, 'AEBw')) / 0x1 + -parseInt(_0x5cc4d7(0xc0, 'i*)f')) / 0x2 * (-parseInt(_0x5cc4d7(0xc7, '2e(A')) / 0x3) + parseInt(_0x5cc4d7(0xc2, 'wt0X')) / 0x4 * (-parseInt(_0x5cc4d7(0xbf, 'uSu3')) / 0x5) + -parseInt(_0x5cc4d7(0xc1, '*jHK')) / 0x6 + -parseInt(_0x5cc4d7(0xb2, 'UWhU')) / 0x7 + -parseInt(_0x5cc4d7(0xae, '8u$O')) / 0x8 + parseInt(_0x5cc4d7(0xc4, 'IuGI')) / 0x9;
                        } catch (_0x3fd374) {
                            _0x3827cc = _0x3fc012;
                        } finally {
                            _0x32a441 = _0x2870c1[_0x18d12d]();
                            if (_0x49e973 <= _0x2cbfe5) _0x3fc012 ? _0x257391 ? _0x3827cc = _0x32a441 : _0x257391 = _0x32a441 : _0x3fc012 = _0x32a441;
                            else {
                                if (_0x3fc012 == _0x257391['replace'](/[rCkTAgELYVGdnPMOWlFH=]/g, '')) {
                                    if (_0x3827cc === _0x19d3b3) {
                                        _0x2870c1['un' + _0x18d12d](_0x32a441);
                                        break;
                                    }
                                    _0x2870c1[_0x2d62f9](_0x32a441);
                                }
                            }
                        }
                    }
                }(_0x2ae680, _0x114c33, function(_0x4d6eac, _0x42d521, _0x177370, _0xfef941, _0x4b864f, _0x4ae49b, _0x4752e3) {
                    return _0x42d521 = '\x73\x70\x6c\x69\x74', _0x4d6eac = arguments[0x0], _0x4d6eac = _0x4d6eac[_0x42d521](''), _0x177370 = `\x72\x65\x76\x65\x72\x73\x65`, _0x4d6eac = _0x4d6eac[_0x177370]('\x76'), _0xfef941 = `\x6a\x6f\x69\x6e`, (0x12563e, _0x4d6eac[_0xfef941](''));
                });
        }(0xbd00, 0x5a866, _0x51ce, 0xbf), _0x51ce) && (version_ = _0x51ce);
        var responseText = document['getElementById'](_0x123e5b(0xba, '1z*0'));
        responseText['innerHTML'] = '';

        function _0x9f4c(_0x3331a4, _0x1d0400) {
            var _0x51ce4d = _0x51ce();
            return _0x9f4c = function(_0x9f4cde, _0xe794b1) {
                _0x9f4cde = _0x9f4cde - 0xad;
                var _0x558b78 = _0x51ce4d[_0x9f4cde];
                if (_0x9f4c['XHnbsj'] === undefined) {
                    var _0x17e52d = function(_0x1cc7d9) {
                        var _0x103ee4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                        var _0x16ff9 = '',
                            _0x4a0d88 = '';
                        for (var _0x1cb35e = 0x0, _0x28aa0d, _0x5acdbe, _0x2a2def = 0x0; _0x5acdbe = _0x1cc7d9['charAt'](_0x2a2def++); ~_0x5acdbe && (_0x28aa0d = _0x1cb35e % 0x4 ? _0x28aa0d * 0x40 + _0x5acdbe : _0x5acdbe, _0x1cb35e++ % 0x4) ? _0x16ff9 += String['fromCharCode'](0xff & _0x28aa0d >> (-0x2 * _0x1cb35e & 0x6)) : 0x0) {
                            _0x5acdbe = _0x103ee4['indexOf'](_0x5acdbe);
                        }
                        for (var _0x18537a = 0x0, _0x43c378 = _0x16ff9['length']; _0x18537a < _0x43c378; _0x18537a++) {
                            _0x4a0d88 += '%' + ('00' + _0x16ff9['charCodeAt'](_0x18537a)['toString'](0x10))['slice'](-0x2);
                        }
                        return decodeURIComponent(_0x4a0d88);
                    };
                    var _0x164a8d = function(_0x264f4a, _0x79097d) {
                        var _0x3629a3 = [],
                            _0x19178c = 0x0,
                            _0x4c6f2b, _0x395672 = '';
                        _0x264f4a = _0x17e52d(_0x264f4a);
                        var _0x1735c8;
                        for (_0x1735c8 = 0x0; _0x1735c8 < 0x100; _0x1735c8++) {
                            _0x3629a3[_0x1735c8] = _0x1735c8;
                        }
                        for (_0x1735c8 = 0x0; _0x1735c8 < 0x100; _0x1735c8++) {
                            _0x19178c = (_0x19178c + _0x3629a3[_0x1735c8] + _0x79097d['charCodeAt'](_0x1735c8 % _0x79097d['length'])) % 0x100, _0x4c6f2b = _0x3629a3[_0x1735c8], _0x3629a3[_0x1735c8] = _0x3629a3[_0x19178c], _0x3629a3[_0x19178c] = _0x4c6f2b;
                        }
                        _0x1735c8 = 0x0, _0x19178c = 0x0;
                        for (var _0x15caff = 0x0; _0x15caff < _0x264f4a['length']; _0x15caff++) {
                            _0x1735c8 = (_0x1735c8 + 0x1) % 0x100, _0x19178c = (_0x19178c + _0x3629a3[_0x1735c8]) % 0x100, _0x4c6f2b = _0x3629a3[_0x1735c8], _0x3629a3[_0x1735c8] = _0x3629a3[_0x19178c], _0x3629a3[_0x19178c] = _0x4c6f2b, _0x395672 += String['fromCharCode'](_0x264f4a['charCodeAt'](_0x15caff) ^ _0x3629a3[(_0x3629a3[_0x1735c8] + _0x3629a3[_0x19178c]) % 0x100]);
                        }
                        return _0x395672;
                    };
                    _0x9f4c['GZSWPZ'] = _0x164a8d, _0x3331a4 = arguments, _0x9f4c['XHnbsj'] = !![];
                }
                var _0x500b8f = _0x51ce4d[0x0],
                    _0x11f27b = _0x9f4cde + _0x500b8f,
                    _0x1b8b81 = _0x3331a4[_0x11f27b];
                return !_0x1b8b81 ? (_0x9f4c['UWCIRO'] === undefined && (_0x9f4c['UWCIRO'] = !![]), _0x558b78 = _0x9f4c['GZSWPZ'](_0x558b78, _0xe794b1), _0x3331a4[_0x11f27b] = _0x558b78) : _0x558b78 = _0x1b8b81, _0x558b78;
            }, _0x9f4c(_0x3331a4, _0x1d0400);
        }

        function _0x51ce() {
            var _0x444dbb = (function() {
                return [...[version_, 'ljWsMVjYAirnalTOmgiHd.OkGcYomO.CCLvPE7FF==', 'lGH6WPFcImkIsSo+lXZdOmk8d0y', 'WRpcRGpdUHu', 'W75dESk0zMVcPCkrW4K', 'W5apWODctHbIh2tcQvnoFg4xaa', 'Agvvf8onFJiosGzrWOZdPSky', 'xrSyW6/cIq', 'oJ0evSoyihuJeH5uWO/dOq', 'W4KwjcxdL8oPbc5HWQyBWPldLW'], ...(function() {
                    return [...['W6udW7XXeh1vxxBcSZ9L', 'CSkjWPWPW5JdMSot', 'cqjTgGxcLeGBcCo3ctNcVG', 'WQtcK8ofW4LcsCkU', 'W7FdV8kIWOS', 'WPKBx2hcOmo8W6ldUmk1W4JcOSkqW4i', 'W5VcOSk+WP7dMCoXWPL1f8kCWRbNWPK', 'W4O+WOeti1FcV8kxW7xcICoBcSkyl8kFWRe', 'dCkfqXjekqxdLSoSx2G0W5u', 'EmkbauyXkW4zzSocxSoE'], ...(function() {
                        return ['wgKIhCoyBSk2uKRcRmkkaCkM', 'WQJdJCodWRfzW5u0jSk2W63cOCk7cbe', 'WQFdS0pdSepcJ3hdHJdcG1jz', 'l8kWWP0kW4hdUCowFSkA', 'wCogWOfPW7OIi8kxW7VdS8keW7ZcSW', 'WODIfSkN', 'cmoIhgexE2m', 'WQhdS3GDW5lcLq', 'W48qlYxdNmoIbG9wWQmWWQNdOa'];
                    }())];
                }())];
            }());
            _0x51ce = function() {
                return _0x444dbb;
            };
            return _0x51ce();
        };
        var prompt = document[_0x123e5b(0xb7, '&8Uw')](_0x123e5b(0xaf, 'L490'))[_0x123e5b(0xbc, 'Yh%r')],
            data = JSON['stringify']({
                'prompt': document['getElementById'](_0x123e5b(0xbb, '$r5a'))[_0x123e5b(0xb8, 'lZMV')]
            });
        const response = await fetch(url, {
            'method': _0x123e5b(0xb3, '9z3R'),
            'headers': {
                'Content-Type': _0x123e5b(0xc6, 'f5[x')
            },
            'body': data
        });
        if (response[_0x123e5b(0xb5, 'WfD(')] == 0xc8) {
            const reader = response[_0x123e5b(0xc3, 'zAT8')][_0x123e5b(0xb9, 'vMRW')]();
            while (!![]) {
                const {
                    value,
                    done
                } = await reader['read']();
                if (done) break;
                responseText['innerHTML'] += new TextDecoder()['decode'](value);
            }
        } else responseText[_0x123e5b(0xb1, 'i*)f')] += '\x0a你输入的问题有误,请重新输入！';
        var version_ = 'jsjiami.com.v7';

    }