
let usernameCorrect = false;  
let passwordCorrect = false;  
  
const userInput = document.getElementById('user-input');  
const userInput2 = document.getElementById('user-input2');  
const loginBox = document.getElementById('login-box');  
  


// 这里不需要监听keydown事件来检查Enter键，因为您已经有了一个按钮来处理登录逻辑  
userInput.addEventListener("input", function() {  

  if (userInput.value === "123") {  
      usernameCorrect = true;  
  } else {  
      usernameCorrect = false;  
  }  
});  
  
userInput2.addEventListener("input", function() {  
  if (userInput2.value === "123") {  
      passwordCorrect = true;  
  } else {  
      passwordCorrect = false;  
  }  
});  
  
loginBox.addEventListener("click", function() {  
  if (usernameCorrect && passwordCorrect) { // 这里应该使用逻辑与操作符(&&)而不是逻辑或(||)  
    window.location.href = "https://www.baidu.com"; // 跳转到example.com  
  } else {  
    alert("账号或密码不正确，请重新输入"); // 显示警告信息  
    userInput.value = ""; // 清空用户名输入框的值  
    userInput2.value = ""; // 清空密码输入框的值  
  }  
});  

const yeeimg = document.querySelector(".yee")
let isPasswordVisible = false;
yeeimg.addEventListener("click", function() {  
      if (isPasswordVisible) {  
        userInput2.type = "password";  
        yeeimg.src = "guan.png";
      } else {  
        userInput2.type = "text";  
        yeeimg.src = "kai.png";
      }
      isPasswordVisible =!isPasswordVisible
    })
