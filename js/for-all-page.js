// show or hide sidebar //
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// change theme dark and light mode//
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})


const langBtn = document.querySelector('.lang-btn');

langBtn.addEventListener('click', () => {
    document.body.classList.toggle('arabic_lang');

    langBtn.querySelector('span:first-child').classList.toggle('active');
    langBtn.querySelector('span:last-child').classList.toggle('active');
})

function showNotification() {
    let notificationList = document.getElementsByClassName("notification-list")[0];
    if (notificationList.style.display === "none" || notificationList.style.display === "") {
      notificationList.style.display = "block";
    } else {
      notificationList.style.display = "none";
    }
  }
  
  document.addEventListener("click", function(event) {
    let notificationList = document.getElementsByClassName("notification-list")[0];
    if (event.target.closest(".btn_notification") === null) {
      notificationList.style.display = "none";
    }
  });


  function showDetailsProfile() {
    let details_profile = document.getElementsByClassName("details_profile-list")[0];
    if (details_profile.style.display === "none" || details_profile.style.display === "") {
      details_profile.style.display = "block";
    } else {
      details_profile.style.display = "none";
    }
  }
  
  document.addEventListener("click", function(event) {
    let details_profile = document.getElementsByClassName("details_profile-list")[0];
    if (event.target.closest(".profile") === null) {
      details_profile.style.display = "none";
    }   
  });