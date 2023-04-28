  document.addEventListener('keydown', function(event) {
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
          var url = "https://chatgptmirror.com/api/v1/conversation/RefreshChat"
          var json = {
              "conversation_id": "644afb5c81240b5d61d32e03",
              "content": "hi",
              "chat_context_id_list": [],
              "is_gpt4": false,
              "model_name": "gpt3.5-turbo",
              "system_role_prompt": "",
              "base_request": {
                  "platform_type": "Web",
                  "client_version": "2.1",
                  "trace_id": "",
                  "signature": "",
                  "share": ""
              }
          }
          var data = JSON.stringify(json); // 准备要发送的JSON数
          xhr.open("POST", url, true); // 配置请求方法、请求URL地址、是否异步
          xhr.setRequestHeader("Content-Type", "application/json"); // 设置请求头的MIME type
          xhr.send(data);

          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) { // 请求成功
                  var response = JSON.parse(xhr.responseText); // 解析响应数据
                  document.write(response); // 处理服务器返回的响应数据
              }
              /*********/
              /*
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
              */
              /***************/

          }

      }

  }

  function clearQestion() {
      document.getElementById("input").value = ""
  }

  function clearAnswer() {
      document.getElementById("answer").value = ""
  }