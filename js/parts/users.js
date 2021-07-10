 let selected = 0;  
// (localStorage.getItem('DATA')) ? JSON.parse(localStorage.getItem('DATA')) : 

 let data = {
     config: {
         background: 'black',
         name: 'Sarvarbek',
         myProfilePhoto: './assets/img/telegram.svg'
     },
     chats: [{
         chatId: 1,
         chatName: 'Durbek',
         profileImg: 'https://picsum.photos/100?random=1&grayscale',
         chatNumber: '+998 99 142-34-71',
         chatMessages: [{
             sender:'Sarvarbek',
             message: 'Assalomu Alaykum',
             messageSendedTime: '17:56'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 2,
         chatName: 'Rustambek',
         profileImg: "https://images.unsplash.com/photo-1608613520463-d6115b7feb06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
         chatNumber: '+998 99 000-00-00',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Assalomu Alaykum',
             messageSendedTime: '00:26'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 3,
         chatName: 'John',
         profileImg: "https://images.unsplash.com/photo-1624352907931-318b3bb70bfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
         chatNumber: '+998 99 333-34-11',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Assalomu Alaykum',
             messageSendedTime: '12:46'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 4,
         chatName: 'Andy',
         profileImg: "https://images.unsplash.com/photo-1558227108-83a15ddbbb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
         chatNumber: '+998 99 142-34-71',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Assalomu Alaykum',
             messageSendedTime: '13:26'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 5,
         chatName: 'Friend',
         profileImg: "https://images.unsplash.com/photo-1624918201580-388eae33e802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
         chatNumber: '+998 99 142-34-71',
         chatMessages: [{
            sender:'Sarvarbek',
         
             message: 'Assalomu Alaykum',
             messageSendedTime: '22:06'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom',
             messageSendedTime: "18:00"
         }]
     }, {
         chatId: 6,
         chatName: 'Web',
         profileImg: "https://images.unsplash.com/photo-1625645207115-3818c67e5830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
         chatNumber: '+998 99 142-34-71',
         chatMessages: [{
            sender:'Sarvarbek',

             message: 'Assalomu Alaykum',
             messageSendedTime: '12:56'
         }, {
             sender: 'Elnur',
             message: 'Va Alaykum assalom',
             messageSendedTime: "18:00"
         }] }, {
            chatId: 7,
            chatName: 'Muhammad',
            profileImg: "https://images.unsplash.com/photo-1624918201580-388eae33e802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            chatNumber: '+998 99 142-34-71',
            chatMessages: [{
                sender:'Sarvarbek',

                message: 'Assalomu Alaykum',
                messageSendedTime: '04:56'
            }, {
                sender: 'Elnur',
                message: 'Va Alaykum assalom',
                messageSendedTime: "18:00"
            }]
        }, {
            chatId: 8,
            chatName: 'Kimdir',
            profileImg: "https://picsum.photos/100/100?2",
            chatNumber: '+998 99 142-34-71',
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
            profileImg: "https://picsum.photos/100/100?4",
            chatNumber: '+998 99 142-34-71',
            chatMessages: [{
                sender:'Sarvarbek', 
                message: 'Nima gap',
                messageSendedTime: '17:56'
            }, {
                sender: 'Elnur',
                message: 'Tinchmi',
                messageSendedTime: "18:00"
            }]
        }
     ]
 } 
 
 const asideUsers = document.querySelector(".aside__users") 

 userChatRender() 


function userRender(chatName, profileImg, messageSendedTime) {
    const newUserBox = document.createElement("div")
    const userPhotoBox = document.createElement("div")
    const userMainInfo = document.createElement("div")
    const userInfo = document.createElement("div")
    const newUsername = document.createElement("p")
    const newTime = document.createElement("time") 
    const newImg = document.createElement("img")

    newUserBox.classList.add("user-box")
    userPhotoBox.classList.add("user-photo-box")
    userMainInfo.classList.add("user-main-info")
    userInfo.classList.add("user-info")
    newUsername.classList.add("user-name")
    newTime.classList.add("time") 
    newImg.classList.add("user-photo")

    newUsername.textContent = chatName
    newTime.textContent = messageSendedTime
    newImg.src = profileImg



    userPhotoBox.appendChild(newImg)
    userMainInfo.appendChild(newUsername)
    userMainInfo.appendChild(newTime)

    userInfo.appendChild(userMainInfo)

    newUserBox.appendChild(userPhotoBox)
    newUserBox.appendChild(userInfo) 

    return newUserBox


}

function userChatRender() {
    for(let item of data.chats){ 
        asideUsers.appendChild(userRender(item.chatName, item.profileImg, item.chatMessages[0].messageSendedTime))
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
 
 


 userBoxes.forEach((element, index) => { 
     element.addEventListener("click", event => {
          console.log(event);
        chatUserAvatar.src = event.target.childNodes[0].childNodes[0].currentSrc;
        chatUsername.textContent = event.target.innerText
       
        userAvatarPhoto.src = event.target.childNodes[0].childNodes[0].currentSrc;
        userProfileName.textContent = event.target.innerText
         userBoxes.forEach(elm => {
             elm.classList.remove("actived-user-box")
         })

         element.classList.add("actived-user-box")
         selected = index 
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












 