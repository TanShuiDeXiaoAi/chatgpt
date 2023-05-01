new Vue({
    el: "div",
    data() {
        return {
            isRight: false
        }
    },
    methods: {
        togglePosition() {
            this.isRight = !this.isRight;
            if (this.isRight == true) {
                $("body").css("background-color", "#181A1B")
                $(".GPTLogo").css("fill", "rgb(232,230,227)")
                $("#input,#answer").css("border-color", "#8F8F9D")
                $("#input,#answer").css("background-color", "#2B2A33")
                $("#input,#answer").css("color", "#FBFBFE")
                $(".btn").css("background-color", "#2B2A33")
                $(".btn").css("color", "#FBFBFE")
                $(".btn").css("border-color", "#8F8F9D")
            } else {
                $("body").css("background-color", "#FFF")
                $(".GPTLogo").css("fill", "#000")
                $("#input,#answer").css("border-color", "#8F8F9D")
                $("#input,#answer").css("background-color", "#FFF")
                $("#input,#answer").css("color", "#000")
                $(".btn").css("background-color", "#E9E9ED")
                $(".btn").css("color", "#000")
                $(".btn").css("border-color", "#000")
            }
        }
    }
})