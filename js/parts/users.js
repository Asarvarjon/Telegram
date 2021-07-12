  
 let selected = 0;  

let localStorageData = localStorage.getItem('data')

 let data = (localStorageData)? JSON.parse(localStorageData): {
     config: {
         background: 'black',
         name: 'Sarvarbek',
         myProfilePhoto: './assets/img/telegram.svg'
     },
     chats: [{
         chatId: 1,
         chatName: 'Durbek',
         username: "durbek",
         profileImg: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
         chatNumber: '+998 99 142-34-71',
         chatMessages: [{
             sender:'Sarvarbek',
             message: 'How are you?',
             messageSendedTime: '17:56'
         }, {
             sender: 'Elnur',
             message: 'Hey, whats up!',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 2,
         chatName: 'Rustambek',
         username: "mamadaliyev",
         profileImg: "https://images.unsplash.com/photo-1608613520463-d6115b7feb06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         chatNumber: '+998 99 000-00-00',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Nima gap',
             messageSendedTime: '00:26'
         }, {
             sender: 'Elnur',
             message: 'Tinchlik',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 3,
         chatName: 'John',
         username: "john",
         profileImg: "https://images.unsplash.com/photo-1624352907931-318b3bb70bfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
         chatNumber: '+998 99 333-34-11',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Ready to pour… the Font Awesome 6 Beta'             ,
             messageSendedTime: '12:46'
         }, {
             sender: 'Elnur',
             message: 'Font Awesome 6 Beta!             ',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 4,
         chatName: 'Andy',
         username: "andy-andy",
         profileImg: "https://images.unsplash.com/photo-1558227108-83a15ddbbb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
         chatNumber: '+998 99 142-34-71',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Assalomu Alaykum',
             messageSendedTime: '13:26'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom, qalaysiz',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 5,
         chatName: 'Friend',
         username: "unknown",
         profileImg: "https://images.unsplash.com/photo-1624918201580-388eae33e802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
         chatNumber: '+998 99 333-11-34',
         chatMessages: [{
            sender:'Sarvarbek',
         
             message: 'Nullam eu euismod nisi, vitae venenatis dolor. Aliquam non venenatis est. Phasellus commodo urna rhoncus arcu tristique feugiat. Morbi et urna metus. Etiam eleifend, ex non malesuada condimentum, libero neque luctus neque, eget viverra metus ex quis mauris. Vivamus sodales turpis eu facilisis iaculis. Curabitur mattis diam a sem lacinia eleifend.   ',
             messageSendedTime: '22:06'
         }, {
             sender: 'Elnur',
             message: 'Nima bu?',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 6,
         chatName: 'Web',
         username: "hacker",
         profileImg: "https://images.unsplash.com/photo-1625645207115-3818c67e5830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
         chatNumber: '+998 99 368-88-22',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Assalomu Alaykum',
             messageSendedTime: '12:56'
         }, {
             sender: 'Elnur',
             message: 'Qayerdasiz? Toshkentdamisiz',
             messageSendedTime: "18:00"
         }] }, {
            chatId: 7,
            chatName: 'Muhammad',
            username: "unknown",
            profileImg: "https://images.unsplash.com/photo-1624918201580-388eae33e802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            chatNumber: '+998 99 568-21-98',
            chatMessages: [{
                sender:'Sarvarbek',

                message: 'Assalomu Alaykum',
                messageSendedTime: '04:56'
            }, {
                sender: 'Elnur',
                message: 'Bugun markazga kela olasizmi?',
                messageSendedTime: "18:00"
            }]
        }, {
            chatId: 8,
            chatName: 'Kimdir',
            username: "somebody",
            profileImg: "https://picsum.photos/100/100?2",
            chatNumber: '+998 99 321-96-45',
            chatMessages: [{
                sender:'Sarvarbek',

                message: 'Assalomu Alaykum, nima gaplar endi',
                messageSendedTime: '17:56'
            }, {
                sender: 'Elnur',
                message: 'Va Alaykum assalom, lorem ipsum dolor sit ',
                messageSendedTime: "18:00"
            }]
        }, {
            chatId: 9,
            chatName: 'Unknown',
            username: "lorem",
            profileImg: "https://picsum.photos/100/100?4",
            chatNumber: '+998 99 123-34-58',
            chatMessages: [{
                sender:'Sarvarbek', 
                message: 'Nima gap',
                messageSendedTime: '17:56'
            }, {
                sender: 'Elnur',
                message: 'Kim bu, tanimadim',
                messageSendedTime: "18:00"
            }]
        }
     ]
 } 
 

 localStorage.setItem('data', JSON.stringify(data))

 const asideUsers = document.querySelector(".aside__users") 

 userChatRender() 


function userRender(chatName, profileImg, messageSendedTime, messageTitle) {
    const newUserBox = document.createElement("div")
    const userPhotoBox = document.createElement("div")
    const userMainInfo = document.createElement("div")
    const userInfo = document.createElement("div")
    const userMessageInfo = document.createElement("div")
    const newUsername = document.createElement("p")
    const newTime = document.createElement("time") 
    const newImg = document.createElement("img")
    const userMessageTitle = document.createElement("p")

    newUserBox.classList.add("user-box")
    userPhotoBox.classList.add("user-photo-box")
    userMainInfo.classList.add("user-main-info")
    userMessageInfo.classList.add("user-message-info")
    userMessageTitle.classList.add("user-message-title")
    userInfo.classList.add("user-info")
    newUsername.classList.add("user-name")
    newTime.classList.add("time") 
    newImg.classList.add("user-photo")

    newUsername.textContent = chatName
    newTime.textContent = messageSendedTime
    userMessageTitle.textContent = messageTitle
    newImg.src = profileImg



    userPhotoBox.appendChild(newImg)
    userMainInfo.appendChild(newUsername)
    userMainInfo.appendChild(newTime)
    userMessageInfo.appendChild(userMessageTitle)

    userInfo.appendChild(userMainInfo)
    userInfo.appendChild(userMessageInfo)

    newUserBox.appendChild(userPhotoBox)
    newUserBox.appendChild(userInfo) 

    return newUserBox


}

function userChatRender() {
    for(let item of data.chats){ 
        asideUsers.appendChild(userRender(item.chatName, item.profileImg, item.chatMessages[0].messageSendedTime, item.chatMessages[1].message))
    }

}


 const usersList = document.querySelector(".aside__users")
 const chatMainSection = document.querySelector(".chat-section") 
 const userBoxes = document.querySelectorAll(".user-box")



 // changing top infos when clicking
 const chatUserAvatar = document.querySelector(".chat-user-avatar")
 const chatUsername =  document.querySelector(".chat-username")

 //changing right aside when clicking 
 const userAvatarPhoto = document.querySelector(".user-avatar-photo")
 const userProfileName = document.querySelector(".text")
 const UsernameElement = document.querySelector(".user-name")
 const chatSection = document.querySelector(".chat-section")
 const UserPhoneNumber = document.querySelector(".user-number")
 const NameUser = document.querySelector(".nameUser")
 
 


 userBoxes.forEach((element, index) => { 
     element.addEventListener("click", event => {
        chatSection.style.display = "flex"
       
         userBoxes.forEach(elm => {
             elm.classList.remove("actived-user-box")
         })

         element.classList.add("actived-user-box")
         selected = index 
         chatUserAvatar.src = data.chats[selected].profileImg;
         chatUsername.textContent = data.chats[selected].chatName
        
         userAvatarPhoto.src = data.chats[selected].profileImg;
         userProfileName.textContent = data.chats[selected].chatName
         UserPhoneNumber.textContent = data.chats[selected].chatNumber
         NameUser.textContent = data.chats[selected].chatName
         console.log(NameUser.textContent);
         renderSelectedChatMessages()

     })
 })


 let messages = document.querySelector(".messages")




 function renderMessage(msgText, msgTime, sender) {  
    if(sender  == data.config.name){
        const newSentElement = document.createElement("li") 
        const timeElement = document.createElement("time")
        newSentElement.classList.add("sent-message")
        newSentElement.textContent = msgText
        timeElement.textContent = msgTime
        return newSentElement
    } else {
        const newReceivedElement = document.createElement("li")
        const timeElement = document.createElement("time")
        newReceivedElement.classList.add("received-message")
        newReceivedElement.textContent = msgText
        timeElement.textContent = msgTime
        return newReceivedElement
    }

 } 

 function renderSelectedChatMessages() {
     messages.innerHTML = ""
     for (let message of data.chats[selected].chatMessages) {  
         messages.appendChild(renderMessage(message.message, message.messageSendedTime, message.sender))
     }
 }












 const sendMessageForm = document.querySelector(".message-send-form")
const sendMessageInput = document.querySelector(".message-send-input")
const messagesParent = document.querySelector(".messages")



sendMessageForm.addEventListener("submit", event => {
  event.preventDefault()
 
  var date = new Date;
  var hour = date.getHours();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();


  data.chats[selected].chatMessages.push({
    sender: "Sarvarbek",
    message: sendMessageInput.value,
    time: hour + ":" + minutes
  })

  localStorage.setItem('data', JSON.stringify(data))




  const newPElement = document.createElement("p")
  newPElement.classList.add("sent-message")

  const newTimeElement = document.createElement("time")
  newTimeElement.classList.add("message-time")

  newTimeElement.textContent = hour + ":" + minutes
  newPElement.textContent = sendMessageInput.value
 
  newPElement.appendChild(newTimeElement) 
  messagesParent.appendChild(newPElement)


  sendMessageInput.value = null
   
})


