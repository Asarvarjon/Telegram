 // main settings button click

 const mainSettingsButtonElement = document.querySelector(".main-settings-btn")
 const settingsModalElement = document.querySelector(".settings-modal")


 mainSettingsButtonElement.addEventListener("click", e => {
   settingsModalElement.style.display = "block"
 })

 mainSettingsButtonElement.addEventListener("dblclick", e => {
   settingsModalElement.style.display = "none"
 })


 document.addEventListener("keydown", function (close) {
   if (close.key === "Escape") {
     settingsModalElement.style.display = 'none'
   }
 })


 //profile-avatar 

 const profileElement = document.querySelector(".user-profile-section ")
 const userInfoElement = document.querySelector(".chat-user-info")
 const profileCloseButton = document.querySelector(".profile-close-btn")

 userInfoElement.addEventListener("click", event =>{
   profileElement.style.display = 'flex'
   profileElement.style.flex = 'auto'
 })

 profileCloseButton.addEventListener('click', event => {
   profileElement.style.display = "none"
 })

 //write modal

 const writeModalElement = document.querySelector(".write-modal")
 const writeButtonElement = document.querySelector(".write-btn")
 const closeWriteButton = document.querySelector(".close-write-btn ")

 writeButtonElement.addEventListener("click", event => {
   writeModalElement.style.display = 'flex'
   closeWriteButton.style.display = 'block'
   writeButtonElement.style.display = 'none'
 })

 closeWriteButton.addEventListener("click", event => {
   writeModalElement.style.display = 'none'
   closeWriteButton.style.display = "none"
   writeButtonElement.style.display = 'block'
 })



 // search-btn 


 const chatSearchBtnElement = document.querySelector(".chat-search-btn")
 const searchSection = document.querySelector(".search-section")
 const prevButtonElement = document.querySelector(".prev-button")



 chatSearchBtnElement.addEventListener("click", event => {
   searchSection.style.display = "flex"
 })

 prevButtonElement.addEventListener("click", e => {
   searchSection.style.display = "none"
 })


let datalist = [];



 // Chat background  and chat section
//  const sendMessageForm = document.querySelector(".message-send-form")
//  const sendMessageInput = document.querySelector(".message-send-input")
//  const messagesParent = document.querySelector(".messages")

//  const data = JSON.parse(localStorage.getItem("data")) || []

//  data.forEach(element => {
//    const newPElement = document.createElement("p")
//    newPElement.classList.add("sent-message")

//    const newTimeElement = document.createElement("time")
//    newTimeElement.classList.add("message-time")

//    newTimeElement.textContent = element.time
//    newPElement.textContent = element.message

//    messagesParent.appendChild(newPElement)
//    newPElement.appendChild(newTimeElement)


//  });
 
/*
 sendMessageForm.addEventListener('submit', event => {
   event.preventDefault()

   var date = new Date;
   var hour = date.getHours();
   var seconds = date.getSeconds();
   var minutes = date.getMinutes();

   data.push({
     message: sendMessageInput.value,
     time: hour + ":" + minutes
   })


   const stringData = JSON.stringify(data)
   localStorage.setItem("data", stringData)

   const newPElement = document.createElement("p")
   newPElement.classList.add("sent-message")

   const newTimeElement = document.createElement("time")
   newTimeElement.classList.add("message-time")

   newTimeElement.textContent = hour + ":" + minutes
   newPElement.textContent = sendMessageInput.value

   messagesParent.appendChild(newPElement)
   newPElement.appendChild(newTimeElement)


   sendMessageInput.value = null
 })
*/








 // change settings


 const editProfileBox = document.querySelector(".edit-profile-box ")
 const changeProfileButton = document.querySelector("#profile")
 const editCloseBtn = document.querySelector(".edit-close-btn")


 changeProfileButton.addEventListener("click", e => {
   editProfileBox.style.display = "flex"
 })

 editCloseBtn.addEventListener("click", e => {
   editProfileBox.style.display = "none"
 })


 // changing profile avatar

 const imgElement = document.querySelector(".img")
 const ImgChangeBtn = document.querySelector(".img-change")

 ImgChangeBtn.addEventListener("click", e => {
   imgElement.src = "./assets/img/office.jpg"
 })


 // changing name
 const changeNameButton = document.querySelector("#changeName")
 const nameChangeForm = document.querySelector(".name-set")
 const nameInputElement = document.querySelector(".name-input")
 const nameElement = document.querySelector("#name")

 changeNameButton.addEventListener("click", e => {
   nameChangeForm.style.display = "flex"
 })

 nameChangeForm.addEventListener("submit", event => {
   event.preventDefault()

   nameElement.textContent = nameInputElement.value
   nameChangeForm.style.display = "none"
 })


 