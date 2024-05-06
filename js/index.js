// bài 1
document.getElementById("action").onclick = function () {
  // khai báo lưu trữ 3 số
  let so1 = document.getElementById("num1").value;
  let so2 = document.getElementById("num2").value;
  let so3 = document.getElementById("num3").value;
  let show = document.createElement("p");
  show.className = "p-2  text-white bg-success";
  // so sánh 3 số
  // các trường hợp bao gồm :
  // 1 2 3 r
  // 1 3 2 r
  // 2 1 3 r
  // 2 3 1 r
  // 3 2 1 r
  // 3 1 2 r
  if (so1 < so2 && so2 < so3 && so1 < so3) {
    show.innerHTML =
      "Dãy số đã được sắp xếp là: " + so1 + "," + so2 + "," + so3;
    document.getElementById("result1").appendChild(show);
  } else {
    if (so1 < so2 && so2 > so3 && so1 < so3) {
      show.innerHTML =
        "Dãy số đã được sắp xếp là: " + so1 + "," + so3 + "," + so2;
      document.getElementById("result1").appendChild(show);
    } else {
      if (so1 < so2 && so2 > so3 && so1 > so3) {
        show.innerHTML =
          "Dãy số đã được sắp xếp là: " + so3 + "," + so1 + "," + so2;
        document.getElementById("result1").appendChild(show);
      } else {
        if (so1 > so2 && so2 < so3 && so1 < so3) {
          show.innerHTML =
            "Dãy số đã được sắp xếp là: " + so2 + "," + so1 + "," + so3;
          document.getElementById("result1").appendChild(show);
        } else {
          if (so1 > so2 && so2 < so3 && so1 > so3) {
            show.innerHTML =
              "Dãy số đã được sắp xếp là: " + so2 + "," + so3 + "," + so1;
            document.getElementById("result1").appendChild(show);
          } else {
            if (so1 > so2 && so2 > so3 && so1 > so3) {
              show.innerHTML =
                "Dãy số đã được sắp xếp là: " + so3 + "," + so2 + "," + so1;
              document.getElementById("result1").appendChild(show);
            }
          }
        }
      }
    }
  }
};

// bài 2
document.getElementById("action2").onclick = function () {
  let member = document.getElementById("user").value;
  let show2 = document.createElement("p");
  show2.className = "p-2 bg-primary text-white";
  if ((member = "B")) {
    show2.innerHTML = "Chào mừng Bố";
    document.getElementById("result2").appendChild(show2);
  } else {
    if ((member = "M")) {
      show2.innerHTML = "Chào mừng Mẹ";
      document.getElementById("result2").appendChild(show2);
    } else {
      if ((member = "A")) {
        show2.innerHTML = "Chào mừng anh trai";
        document.getElementById("result2").appendChild(show2);
      } else {
        if ((member = "E")) {
          show2.innerHTML = "Chào mừng em gái";
          document.getElementById("result2").appendChild(show2);
        }
      }
    }
  }
};
