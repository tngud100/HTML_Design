$(function () {
  $("#enroll_product").click(function () {
    $(".back_ignore").show();
    $("#enroll_form").animate(
      {
        top: "0",
      },
      1000
    );
  });

  $(".btn-close").click(function () {
    $(".back_ignore").hide();
    $("#enroll_form").animate(
      {
        top: "-2000px",
      },
      1000
    );
  });

  set_change_img();
});

const set_change_img = () => {
  const product_image = document.getElementById("product_img");
  const input_image = document.getElementById("inputGroupFile02");

  input_image.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const myFile = this.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        product_image.setAttribute("src", e.target.result);
      });

      reader.readAsDataURL(myFile);
    }
  });
};
