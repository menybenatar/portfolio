"use strict";
$(onInit);
$(".btn.btn-primary.submit").click(onSubmit);
function onInit() {
  randerModels();
}
function randerModels() {
  var projects = getProjcets();
  var strHtmlModel = "";
  var strHtmlProtfolio = "";
  for (var i = 0; i < projects.length; i++) {
    // console.log(i, projects[i]);
    strHtmlProtfolio += createPortfolioItem(projects[i], i + 1);
    strHtmlModel += createModal(projects[i], i + 1);
  }
  $(".portfolio-item").html(strHtmlProtfolio);
  $(".modals-project").html(strHtmlModel);
}
function createModal(proj, idx) {
  return `<div
  class="portfolio-modal modal fade"
  id="portfolioModal${idx}"
  tabindex="-1"
  role="dialog"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">
              ${proj.title}
              </p>
              <a class="btn btn-primary mb-3" href=${proj.link} target="_blank">try it </a>
             
              <img
                class="img-fluid d-block mx-auto"
                src="${proj.urlImg}"
                alt=""
              />
              <p>${proj.desc}</p>
              <ul class="list-inline">
                <li>Date: ${proj.date}</li>
                <li>Category:  ${proj.category}</li>
              </ul>
              <button
                class="btn btn-primary"
                data-dismiss="modal"
                type="button"
              >
                <i class="fa fa-times"></i>
                Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}
function createPortfolioItem(proj, idx) {
  return `<div class="col-md-6 col-sm-6 portfolio-item">
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal${idx}"
    >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img
        class="img-fluid"
        src="${proj.urlImg}"
        alt=""
      />
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>`;
}
function onSubmit() {
  var email = $(".form-control.email").val();
  var subject = $(".form-control.subject").val();
  var msg = $(".form-control.massage").val();
  console.log(email, subject, msg);
  var url = `https://mail.google.com/mail/?view=cm&fs=1&to=menybenatar@gmail.com&su=${subject}&body=${msg}`;
  open(url, "_blank");
}
