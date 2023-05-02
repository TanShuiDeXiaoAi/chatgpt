new Vue({
    el: "div",
    data() {
        return {
            isRight: false
        }
    },
    methods: {
        togglePosition() {
            $("#done-clear").css("transition", "color .5s")
            this.isRight = !this.isRight;
            if (this.isRight == true) {
                //Dark
                $("body").css("background-color", "#181A1B")
                $(".GPTLogo").css("fill", "rgb(232,230,227)")
                $("#input,#answer").css("border-color", "#8F8F9D")
                $("#input,#answer").css("background-color", "#2B2A33")
                $("#input,#answer").css("color", "#FBFBFE")
                $(".btn").css("background-color", "#2B2A33")
                $(".btn").css("color", "#FBFBFE")
                $(".btn").css("border-color", "#8F8F9D")
                $("#done-clear").css({
                    "color": "#181A1B",
                    "background-color": "#990000"
                })
            } else {
                //Light
                $("body").css("background-color", "#FFF")
                $(".GPTLogo").css("fill", "#000")
                $("#input,#answer").css("border-color", "#8F8F9D")
                $("#input,#answer").css("background-color", "#FFF")
                $("#input,#answer").css("color", "#000")
                $(".btn").css({
                    "background-color": "#1E90FF",
                    "color": "#FFF",
                    "border-color": "#FFF"
                })
                $("#done-clear").css({
                    "color": "#FFF",
                    "background-color": "#ff4e4e"
                })
            }
        }
    }
})