// TEXT FOR GIVE

let Hard_Mode = [
    ["English is a very popular language that is spoken all around the world. To communicate effectively in English, it is important to have strong reading comprehension skills. These skills will allow you to read English language newspapers, vocabulary books, and novels! This blog provides readers with English paragraphs for reading, followed by practice exercises to test their comprehension. These English short stories are designed with a student in mind. By doing these short passages of English reading practice, you will be able to improve your English reading skills and better understand the English language. With stronger comprehension, you will be able to communicate more effectively in English both in written and spoken form. By decreasing your reading size and focusing on a personalized language learning lesson, your language levels will grow from simple vocabulary lists to a built-in dictionary. You don’t always need books to improve vocabulary. But dedicated English learners reading resources can be hard to find. So whether you are looking to improve your English communication skills for work or travel, this blog of perfect bite-sized reading for beginners can help you reach your goals. A paragraph is a collection of words combined together to make a longer unit than a sentence. It's a set of sentences that are well-organized and coherent, and they're all about the same thing. Several sentences often make up a paragraph. There are normally three to eight sentences in a paragraph. Almost all of the writing one reads in a textbook or an article can be grouped into paragraphs if it is longer than a few sentences."],
    
    

]


let Simple_Mode = [
    "he first sentence of your paragraph should offer the reader an idea of the type of information they may expect to find when they read the rest. The initial sentences should construct a scenario that will set the tone for the rest of the sentence.  And the rest of the sentence should strive to maintain the same theme.",
    "The essential sentences in the paragraph should be supplemented by the middle sentence. You can use this middle sentence to persuade the reader of the main point you made in the beginning. Expand every detail so the viewers can perceive everything from your point of view.",
    "The last sentences of a paragraph might be used to conclude the main theme of that paragraph. This concluding sentence should provide a summary of the details you supplied. If one wishes to write another paragraph the use transition words like additionally, furthermore, moreover, consequently, similarly etc.",
    "I have a pet dog named Bruno. He is brown and furry. He is named after my mother's favourite singer, Bruno Mars. Bruno came into my life when I was 4 years old. I clearly remember the day when I saw him for the first time. My older brother and I went to the Adoption Centre for Rescued Dogs.",
    "The best part about the colour blue that I feel is safety and protection. I have always seen my mother in blue sarees, it is her favourite colour as well. And even when I step out I feel my mother is with me protecting at every step."
];

let AVG_Speed;

let start_button = document.querySelector("#start_button");


// Assigning th text
let Assign_Text = document.querySelector("#Assign_Text");



// for time or mode
let Time_Select = document.querySelector("#Time_Select")
let Text_Select = document.querySelector("#text_Select")

// selecting the field wher we want to insert
let test_timer = document.querySelector("#test_timer");
let test_mode = document.querySelector("#test_mode");

let change_set = document.querySelector("#body_set");
let set_test = document.querySelector("#body_test");
let result_show = document.querySelector("#result_show")

// // selecting the typing div
let Typed_Text = document.querySelector("#Typed_Text");
let once_time_decrement = false;
let assigned_text = false;
let verify;
let taken_time;
let cal_time;

start_button.addEventListener('click', () => {
    let random_text = Math.floor(Math.random() * 5);
    
    change_set.style.display = "none";

    set_test.style.display = "flex";

    let Time_Select_one = Time_Select.value;
    let Text_Select_one = Text_Select.value;

    test_timer.innerHTML = Number(Time_Select_one)

    test_mode.innerHTML = Text_Select_one;

    Assign_Text.innerHTML = Simple_Mode[random_text];   
})


function time_decreament(){
    // test_timer.innerHTML = ''
    let taken_time = Number(Time_Select.value)
    cal_time = setInterval(()=>{
        if(taken_time > 0){
            taken_time--
            test_timer.innerHTML = taken_time
        }else{
            clearInterval(cal_time);
            Typed_Text.innerHTML = "";
            assigned_text = false; 
            set_test.style.display = "none"
            change_set.style.display = "none";
            result_show.style.display = "flex"
            once_time_decrement = false;
        }
    }, 1000)
    
}

Typed_Text.addEventListener('keypress', (key) => {
    
    let right_type= 0;
    let wrong_type = 0;
    // for storing the assigned text
    let final_array = [];
    let store_final = [];

    let stores = Typed_Text.textContent;
    if(!assigned_text){
        verify = Assign_Text.innerHTML;
        assigned_text = true;
    }

    let store_the_assign = verify.split(' ');
    
    let store_the_typed_first  = stores.split(" ");

    let store_the_typed = [];
    if(store_the_typed_first.length >= 1){
        for(let i = 0; i < store_the_typed_first.length-1; i++){
            // console.log("hii");
            if(store_the_typed_first[i].trim() != ''){
                store_the_typed.push(store_the_typed_first[i].trim())
            }
        }
    }
    store_the_typed = [...store_the_typed, store_the_typed_first[store_the_typed_first.length-1]]

    for(let i = 0; i < store_the_typed.length; i++){

        if(store_the_typed[i] == store_the_assign[i]){
            final_array.push(`<span class="gray">${store_the_typed[i]}</span>`)
            right_type++;
            store_final.push(`<span class="green">${store_the_assign[i]}</span>`)
        }else{
            final_array.push(`<span class="red">${store_the_typed[i]}</span>`);
            wrong_type++;
            store_final.push(`<span class="blue">${store_the_assign[i]}</span>`)
        }
        
    }
    store_the_assign.splice(0, store_final.length)

    store_final = [...store_final, ...store_the_assign]

    Assign_Text.innerHTML = store_final.join(" ")

    let display_it = final_array.join(" ");
    Typed_Text.innerHTML = display_it;

    // to clculate
    let total_WPM = right_type + wrong_type;
    let wrong_per = (wrong_type * 100) / total_WPM;
    let remove_wrong_per = Math.round(100 - wrong_per)
    
    AVG_Speed = total_WPM * (remove_wrong_per / 100);

    Typed_Text.focus();
    const range = document.createRange();
    range.selectNodeContents(Typed_Text);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    let total_typed_value = document.querySelector("#total_typed_value")
    total_typed_value.innerHTML = total_WPM;

    let wrong_per_put = document.querySelector("#wrong_per");
    wrong_per_put.innerHTML = Math.round(remove_wrong_per);

    let total_net_value = document.querySelector("#total_net_value")
    total_net_value.innerHTML = Math.round(AVG_Speed);


    if(!once_time_decrement){
        time_decreament();
        once_time_decrement = true;
    }

})


let Back_home = document.querySelector("#Back_home");

Back_home.addEventListener("click", () => {
    set_test.style.display = "none";
    change_set.style.display = "flex";
    verify = ""
    Typed_Text.innerHTML = "";
    assigned_text = false;
    once_time_decrement = false;
    clearInterval(cal_time);
})

let retake_test = document.querySelector("#retake_test");

retake_test.addEventListener("click", ()=> {
    set_test.style.display = "none";
    result_show.style.display = "none"
    change_set.style.display = "flex";
})
