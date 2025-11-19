let username = "Amit";  // Global scope

function greet() {
    let greeting = "Namaste";  // greet ka local scope
    
    function showMessage() {
        let emoji = "🙏";  // showMessage ka local scope
        
        // Yeh teenon access kar sakta hai
        console.log(emoji + " " + greeting + " " + username);
    }
    
    showMessage();  // 🙏 Namaste Amit
    // console.log(emoji);  // ERROR! emoji yahan accessible nahi hai
}

greet();