document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
let toastTimer;
function notify(message){const toast=document.querySelector('#toast');if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3000);}
document.querySelector('#copy-email')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('spiegelspike@naver.com');notify('이메일 주소를 복사했습니다.');}catch{notify('이메일 주소: spiegelspike@naver.com');}});
