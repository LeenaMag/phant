const sector = document.querySelector('.section');
const container = document.querySelector('.container')
const first = document.getElementById('first');
document.getElementById("title").innerHTML = "Login";

const space = document.createElement('br');
const space2 = document.createElement('br');
const line = document.createElement('hr');


// Create inputs (NOT divs)
const nickname = document.createElement('input');
nickname.type = 'text';
nickname.id = 'nick';
nickname.className = 'camp';
nickname.placeholder = 'Username...';

const password = document.createElement('input');
password.type = 'password';
password.id = 'pass';
password.className = 'camp';
password.placeholder = 'Password...';

const login = document.createElement('button');
login.type = 'login';
login.id = 'login';
login.className = 'loginButton';
login.textContent = "Login";
login.type = "button";

const text = document.createElement('div');
text.id = 'text';
text.className = 'text';
text.innerHTML = `Don't have an account? <a href='../signup/pageSignup.html' id='login'>Sign up</a>`;

const space3 = document.createElement('div');
text.id = 'space3';
text.className = 'space3';



// Style (best: via CSS class, but this works)
nickname.style.cssText = 'background-color: #D9D9D9; border:1px solid #D9D9D9;border-radius:12px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;';
password.style.cssText = 'background-color: #D9D9D9; border:1px solid #D9D9D9;border-radius:12px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;';
login.style.cssText = 'background: linear-gradient(to right, #90fafe9c 10%, #9a2fff94 100%);border: 1px solid linear-gradient(to right, #90fafe9c 10%, #9a2fff94 100%); text-align: center; colour: #00000095; border-radius: 9999px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;box-shadow: 1px 2px 5px #00000047;'
login.style.border = "none";
login.style.outline = "none";
text.style.cssText = 'colour: #00000094; font-family: sans-serif; text-align: center; margin-top: min(5vw, 4px); font-size: 10pt;'
space3.style.cssText = 'height: 180px;'

// Insert into sector before #first
sector.insertBefore(line, first); 
sector.insertBefore(space3, line); 
sector.insertBefore(text, space3); 
sector.insertBefore(login, text); 
sector.insertBefore(space2, login);
sector.insertBefore(password, space2);
sector.insertBefore(space, password);
sector.insertBefore(nickname, space); // nickname above password

// Optional: save username (DON'T save passwords in localStorage)
nickname.value = localStorage.getItem('nick') ?? '';
nickname.addEventListener('blur', () => {
  localStorage.setItem('nick', nickname.value);
});



